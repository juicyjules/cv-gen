import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCountCVArgs } from "./args/ExperienceCountCVArgs";

@TypeGraphQL.ObjectType("ExperienceCount", {})
export class ExperienceCount {
  CV!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "CV",
    nullable: false
  })
  getCV(@TypeGraphQL.Root() root: ExperienceCount, @TypeGraphQL.Args() args: ExperienceCountCVArgs): number {
    return root.CV;
  }
}
