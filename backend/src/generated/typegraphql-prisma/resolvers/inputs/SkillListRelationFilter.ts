import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@TypeGraphQL.InputType("SkillListRelationFilter", {})
export class SkillListRelationFilter {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  every?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  some?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  none?: SkillWhereInput | undefined;
}
