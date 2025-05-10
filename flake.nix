{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable"; # Or a specific commit
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils,  }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = nixpkgs.legacyPackages.${system};
        nodejs = pkgs.nodejs;
        postgresql = pkgs.postgresql;
        nodePackages = pkgs.nodePackages;
        prismaEnginesPath = pkgs.prisma-engines;
        # inherit (nodejs.packages.${system}) nodePackages nodejs;
        # inherit (postgresql.packages.${system}) postgresql; # Or your desired version

        commonEnv = {
          NODE_ENV = "development"; # Or "production"
          DATABASE_URL = "postgresql://user:password@localhost:5432/cv_generator"; # Replace with your actual URL
        };

        frontendEnv = commonEnv // {
          # Frontend specific env vars
        };

        backendEnv = commonEnv // {
          PORT = "3000"; # Backend port
          GRAPHQL_PATH = "/graphql";
        };

        frontendDependencies = with nodePackages; [
          typescript
        ];

        backendDependencies = with nodePackages; [
         prisma
        ];

        # Development environment for the frontend
        devShellFrontend = pkgs.mkShell {
          name = "cv-generator-frontend-dev";
          packages = [
            nodejs
            nodePackages.npm # Or nodePackages.yarn
            pkgs.typescript
          
          ];
          shellHook = ''
            echo "Frontend development shell activated.";
            ${builtins.concatStringsSep "\n" (builtins.attrValues (builtins.mapAttrs (name: value: "export ${name}=\"${value}\";") frontendEnv))}
          '';
        };

        # Development environment for the backend
        devShellBackend = pkgs.mkShell {
          name = "cv-generator-backend-dev";
          packages = [
            nodejs
            nodePackages.npm # Or nodePackages.yarn
            nodePackages.pnpm # Or nodePackages.yarn
            pkgs.typescript
            postgresql.dev # For database development tools
            pkgs.nodePackages.eslint
            pkgs.nest-cli
            pkgs.prisma
            pkgs.sqlite
            pkgs.openssl
            prismaEnginesPath
          ];
          shellHook = with pkgs;''
            echo "Backend development shell activated.";
            ${builtins.concatStringsSep "\n" (builtins.attrValues (builtins.mapAttrs (name: value: "export ${name}=\"${value}\";")frontendEnv))}
            export DATABASE_URL="${backendEnv.DATABASE_URL}";
            export PRISMA_QUERY_ENGINE_LIBRARY="${prismaEnginesPath}/lib/libquery_engine.node"
            export PRISMA_SCHEMA_ENGINE_BINARY="${prismaEnginesPath}/bin/schema-engine" # Or schema-engine
            export PRISMA_INTROSPECTION_ENGINE_BINARY="${prismaEnginesPath}/bin/introspection-engine"
            export PRISMA_FMT_BINARY="${prismaEnginesPath}/bin/prisma-fmt"
            export SKIP_PRISMA_VERSION_CHECK=true
          '';
        };

        # Build for the frontend
        buildFrontend = pkgs.stdenv.mkDerivation {
          name = "cv-generator-frontend";
          src = ./frontend; # Assuming your frontend code is in a 'frontend' directory
          nativeBuildInputs = [ nodejs nodePackages.npm pkgs.typescript pkgs.esbuild ];
          buildPhase = ''
            cd $src
            npm install ${builtins.concatStringsSep " " frontendDependencies}
            npm run build # Your frontend build script (e.g., vite build)
          '';
          installPhase = ''
            mkdir -p $out/dist
            cp -r $src/dist/* $out/dist
          '';
        };

        # Build for the backend (using NestJS CLI)
        buildBackend = pkgs.stdenv.mkDerivation {
          name = "cv-generator-backend";
          src = ./backend; # Assuming your backend code is in a 'backend' directory
          nativeBuildInputs = [ nodejs nodePackages.npm pkgs.typescript  ];
          buildPhase = ''
            cd $src
            npm install ${builtins.concatStringsSep " " backendDependencies}
            npx prisma generate
            npm run build # NestJS build command
          '';
          installPhase = ''
            mkdir -p $out/dist
            cp -r $src/dist/* $out/dist
            cp -r $src/prisma $out/prisma # Include Prisma schema
            cp -r $src/package.json $out/package.json # For running migrations
          '';
          runtimeDependencies = [ postgresql ];
        };

        # Development server for the frontend
        devServerFrontend = pkgs.stdenv.mkDerivation {
          name = "cv-generator-frontend-dev-server";
          src = ./frontend;
          nativeBuildInputs = [ nodejs nodePackages.npm nodePackages.pnpm pkgs.typescript pkgs.esbuild ];
          buildPhase = ''
            cd $src
            npm install ${builtins.concatStringsSep " " frontendDependencies}
          '';
          installPhase = ''
            mkdir -p $out/bin
            echo "#!${pkgs.stdenv.shell}" > $out/bin/run
            echo "cd $src" >> $out/bin/run
            ${builtins.concatStringsSep "\n" (builtins.attrValues (builtins.mapAttrs (name: value: "export ${name}=\"${value}\";") frontendEnv))}
            chmod +x $out/bin/run
          '';
        };

        # Development server for the backend (using NestJS)
        devServerBackend = pkgs.stdenv.mkDerivation {
          name = "cv-generator-backend-dev-server";
          src = ./backend;
          nativeBuildInputs = [ nodejs nodePackages.npm pkgs.typescript pkgs.nodemon  postgresql ];
          buildPhase = ''
            cd $src
            npm install ${builtins.concatStringsSep " " backendDependencies}
            npx prisma generate
          '';
          installPhase = ''
            mkdir -p $out/bin
            echo "#!${pkgs.stdenv.shell}" > $out/bin/run
            echo "cd $src" >> $out/bin/run
            ${builtins.concatStringsSep "\n" (builtins.attrValues (builtins.mapAttrs (name: value: "export ${name}=\"${value}\";") frontendEnv))}
            export DATABASE_URL="${backendEnv.DATABASE_URL}";
            echo "npm run start:dev" >> $out/bin/run # NestJS dev command
            chmod +x $out/bin/run
          '';
          runtimeDependencies = [ postgresql ];
        };
      in {
        devShells.default = devShellBackend; # Default dev shell
        devShells.frontend = devShellFrontend;
        devShells.backend = devShellBackend;
        packages.frontend = buildFrontend;
        packages.backend = buildBackend;
        packages.frontendDevServer = devServerFrontend;
        packages.backendDevServer = devServerBackend;
      }
    );
}