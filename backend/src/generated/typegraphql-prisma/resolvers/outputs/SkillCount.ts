import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCountCVArgs } from "./args/SkillCountCVArgs";

@TypeGraphQL.ObjectType("SkillCount", {})
export class SkillCount {
  CV!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "CV",
    nullable: false
  })
  getCV(@TypeGraphQL.Root() root: SkillCount, @TypeGraphQL.Args() args: SkillCountCVArgs): number {
    return root.CV;
  }
}
