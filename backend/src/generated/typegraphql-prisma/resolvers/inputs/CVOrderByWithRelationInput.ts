import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationOrderByWithRelationInput } from "../inputs/EducationOrderByWithRelationInput";
import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
import { PersonalInformationOrderByWithRelationInput } from "../inputs/PersonalInformationOrderByWithRelationInput";
import { ProjectOrderByWithRelationInput } from "../inputs/ProjectOrderByWithRelationInput";
import { SkillOrderByWithRelationInput } from "../inputs/SkillOrderByWithRelationInput";
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

  @TypeGraphQL.Field(_type => ExperienceOrderByWithRelationInput, {
    nullable: true
  })
  experience?: ExperienceOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => EducationOrderByWithRelationInput, {
    nullable: true
  })
  education?: EducationOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => SkillOrderByWithRelationInput, {
    nullable: true
  })
  skills?: SkillOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => ProjectOrderByWithRelationInput, {
    nullable: true
  })
  projects?: ProjectOrderByWithRelationInput | undefined;
}
