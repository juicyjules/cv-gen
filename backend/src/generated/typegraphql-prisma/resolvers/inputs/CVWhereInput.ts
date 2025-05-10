import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EducationListRelationFilter } from "../inputs/EducationListRelationFilter";
import { ExperienceListRelationFilter } from "../inputs/ExperienceListRelationFilter";
import { PersonalInformationRelationFilter } from "../inputs/PersonalInformationRelationFilter";
import { ProjectListRelationFilter } from "../inputs/ProjectListRelationFilter";
import { SkillListRelationFilter } from "../inputs/SkillListRelationFilter";
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

  @TypeGraphQL.Field(_type => ExperienceListRelationFilter, {
    nullable: true
  })
  experience?: ExperienceListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => EducationListRelationFilter, {
    nullable: true
  })
  education?: EducationListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => SkillListRelationFilter, {
    nullable: true
  })
  skills?: SkillListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ProjectListRelationFilter, {
    nullable: true
  })
  projects?: ProjectListRelationFilter | undefined;
}
