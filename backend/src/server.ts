// backend/src/server.ts
import 'reflect-metadata'; // Must be imported first for type-graphql
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import path from 'path';
import { PrismaClient } from './generated/prisma/client'; // Import Prisma Client

// Import your resolvers (assuming typegraphql-prisma generated them or you wrote them)
// Adjust the path based on your typegraphql-prisma output
import { CVCrudResolver /*, other resolvers */ } from './generated/typegraphql-prisma';
// import { MyCustomResolver } from './resolvers/my-custom.resolver';

// Define the context type (optional but recommended)
export interface MyContext {
    prisma: PrismaClient;
    // Add other context properties like user info if needed
}

// Instantiate Prisma Client
const prisma = new PrismaClient({
    // log: ['query'], // Optional logging
});

async function bootstrap() {
    console.log('Connecting to database...');
    await prisma.$connect(); // Connect Prisma Client
    console.log('Database connected.');

    console.log('Building GraphQL schema...');
    const schema = await buildSchema({
        // Provide all resolver classes here
        resolvers: [
            CVCrudResolver,
            // PersonalInformationCrudResolver,
            // ExperienceCrudResolver, etc...
            // MyCustomResolver,
        ],
        // Point type-graphql to the output directory if needed for generated types
        // emitted by typegraphql-prisma, or rely on imports.
        // validate: false, // Disable class-validator if not used, true otherwise
        validate: { forbidUnknownValues: false } // Example validation setting
    });
    console.log('Schema built.');

    console.log('Creating Apollo Server...');
    const server = new ApolloServer<MyContext>({ // Use context type here
        schema,
        // Add plugins if needed (e.g., for logging, complexity)
    });

    console.log('Starting server...');
    const { url } = await startStandaloneServer(server, {
        // Define the context function
        context: async ({ req }) => {
            // This function runs for each incoming request
            // Return an object that includes everything your resolvers need
            return {
                prisma, // Provide the Prisma client instance
                // You could also add authentication logic here to get user info
                // user: await getUserFromToken(req.headers.authorization),
            };
        },
        listen: { port: 4000 }, // Or read from process.env.PORT
    });

    console.log(`🚀 Server ready at: ${url}`);
}

bootstrap().catch(async (error) => {
    console.error("Failed to start server:", error);
    await prisma.$disconnect(); // Ensure disconnection on error
    process.exit(1);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM signal received. Closing server and disconnecting database...');
    // Add server shutdown logic if needed (e.g., server.stop() if using Express integration)
    await prisma.$disconnect();
    console.log('Prisma Client disconnected.');
    process.exit(0);
});
process.on('SIGINT', async () => { // Handle Ctrl+C
    console.log('SIGINT signal received. Closing server and disconnecting database...');
    await prisma.$disconnect();
    console.log('Prisma Client disconnected.');
    process.exit(0);
});