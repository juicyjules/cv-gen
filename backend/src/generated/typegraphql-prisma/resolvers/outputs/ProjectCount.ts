import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCountCVArgs } from "./args/ProjectCountCVArgs";

@TypeGraphQL.ObjectType("ProjectCount", {})
export class ProjectCount {
  CV!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "CV",
    nullable: false
  })
  getCV(@TypeGraphQL.Root() root: ProjectCount, @TypeGraphQL.Args() args: ProjectCountCVArgs): number {
    return root.CV;
  }
}
