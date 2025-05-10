import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SkillScalarWhereWithAggregatesInput", {})
export class SkillScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SkillScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SkillScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SkillScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SkillScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  name?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableWithAggregatesFilter, {
    nullable: true
  })
  level?: StringNullableWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  cvId?: StringWithAggregatesFilter | undefined;
}
