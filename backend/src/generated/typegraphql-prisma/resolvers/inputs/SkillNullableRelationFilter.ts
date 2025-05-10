import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@TypeGraphQL.InputType("SkillNullableRelationFilter", {})
export class SkillNullableRelationFilter {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  is?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  isNot?: SkillWhereInput | undefined;
}
