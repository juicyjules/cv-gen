import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("SkillScalarWhereInput", {})
export class SkillScalarWhereInput {
  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true
  })
  AND?: SkillScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true
  })
  OR?: SkillScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true
  })
  NOT?: SkillScalarWhereInput[] | undefined;

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
}
