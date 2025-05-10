import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCountCVArgs } from "./args/EducationCountCVArgs";

@TypeGraphQL.ObjectType("EducationCount", {})
export class EducationCount {
  CV!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "CV",
    nullable: false
  })
  getCV(@TypeGraphQL.Root() root: EducationCount, @TypeGraphQL.Args() args: EducationCountCVArgs): number {
    return root.CV;
  }
}
