import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateNestedOneWithoutCVInput } from "../inputs/EducationCreateNestedOneWithoutCVInput";
import { ExperienceCreateNestedOneWithoutCVInput } from "../inputs/ExperienceCreateNestedOneWithoutCVInput";
import { ProjectCreateNestedOneWithoutCVInput } from "../inputs/ProjectCreateNestedOneWithoutCVInput";
import { SkillCreateNestedOneWithoutCVInput } from "../inputs/SkillCreateNestedOneWithoutCVInput";
import { SummaryCreateNestedOneWithoutCvInput } from "../inputs/SummaryCreateNestedOneWithoutCvInput";

@TypeGraphQL.InputType("CVCreateWithoutPersonalInformationInput", {})
export class CVCreateWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => SummaryCreateNestedOneWithoutCvInput, {
    nullable: false
  })
  summary!: SummaryCreateNestedOneWithoutCvInput;

  @TypeGraphQL.Field(_type => ExperienceCreateNestedOneWithoutCVInput, {
    nullable: true
  })
  experience?: ExperienceCreateNestedOneWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => EducationCreateNestedOneWithoutCVInput, {
    nullable: true
  })
  education?: EducationCreateNestedOneWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SkillCreateNestedOneWithoutCVInput, {
    nullable: true
  })
  skills?: SkillCreateNestedOneWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutCVInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedOneWithoutCVInput | undefined;
}
