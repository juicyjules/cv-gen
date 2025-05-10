import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EducationNullableRelationFilter } from "../inputs/EducationNullableRelationFilter";
import { ExperienceNullableRelationFilter } from "../inputs/ExperienceNullableRelationFilter";
import { PersonalInformationRelationFilter } from "../inputs/PersonalInformationRelationFilter";
import { ProjectNullableRelationFilter } from "../inputs/ProjectNullableRelationFilter";
import { SkillNullableRelationFilter } from "../inputs/SkillNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SummaryRelationFilter } from "../inputs/SummaryRelationFilter";

@TypeGraphQL.InputType("CVWhereInput", {})
export class CVWhereInput {
  @TypeGraphQL.Field(_type => [CVWhereInput], {
    nullable: true
  })
  AND?: CVWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVWhereInput], {
    nullable: true
  })
  OR?: CVWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVWhereInput], {
    nullable: true
  })
  NOT?: CVWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  personalInformationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  summaryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationRelationFilter, {
    nullable: true
  })
  personalInformation?: PersonalInformationRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SummaryRelationFilter, {
    nullable: true
  })
  summary?: SummaryRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ExperienceNullableRelationFilter, {
    nullable: true
  })
  experience?: ExperienceNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EducationNullableRelationFilter, {
    nullable: true
  })
  education?: EducationNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SkillNullableRelationFilter, {
    nullable: true
  })
  skills?: SkillNullableRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectNullableRelationFilter, {
    nullable: true
  })
  projects?: ProjectNullableRelationFilter | undefined;
}
