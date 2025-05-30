import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVRelationFilter } from "../inputs/CVRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SkillWhereInput", {})
export class SkillWhereInput {
  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true
  })
  AND?: SkillWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true
  })
  OR?: SkillWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereInput], {
    nullable: true
  })
  NOT?: SkillWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  level?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cvId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CVRelationFilter, {
    nullable: true
  })
  CV?: CVRelationFilter | undefined;
}
