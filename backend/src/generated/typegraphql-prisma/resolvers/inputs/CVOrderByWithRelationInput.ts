import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationOrderByRelationAggregateInput } from "../inputs/EducationOrderByRelationAggregateInput";
import { ExperienceOrderByRelationAggregateInput } from "../inputs/ExperienceOrderByRelationAggregateInput";
import { PersonalInformationOrderByWithRelationInput } from "../inputs/PersonalInformationOrderByWithRelationInput";
import { ProjectOrderByRelationAggregateInput } from "../inputs/ProjectOrderByRelationAggregateInput";
import { SkillOrderByRelationAggregateInput } from "../inputs/SkillOrderByRelationAggregateInput";
import { SummaryOrderByWithRelationInput } from "../inputs/SummaryOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CVOrderByWithRelationInput", {})
export class CVOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personalInformationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  summaryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationOrderByWithRelationInput, {
    nullable: true
  })
  personalInformation?: PersonalInformationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SummaryOrderByWithRelationInput, {
    nullable: true
  })
  summary?: SummaryOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceOrderByRelationAggregateInput, {
    nullable: true
  })
  experience?: ExperienceOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationOrderByRelationAggregateInput, {
    nullable: true
  })
  education?: EducationOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SkillOrderByRelationAggregateInput, {
    nullable: true
  })
  skills?: SkillOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByRelationAggregateInput, {
    nullable: true
  })
  projects?: ProjectOrderByRelationAggregateInput | undefined;
}
