import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVRelationFilter } from "../inputs/CVRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("ExperienceWhereInput", {})
export class ExperienceWhereInput {
  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  AND?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  OR?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereInput], {
    nullable: true
  })
  NOT?: ExperienceWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  jobTitle?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  company?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  location?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  startDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeNullableFilter, {
    nullable: true
  })
  endDate?: DateTimeNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  cvId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CVRelationFilter, {
    nullable: true
  })
  CV?: CVRelationFilter | undefined;
}
