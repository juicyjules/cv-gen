import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EducationUpdateOneWithoutCVNestedInput } from "../inputs/EducationUpdateOneWithoutCVNestedInput";
import { ExperienceUpdateOneWithoutCVNestedInput } from "../inputs/ExperienceUpdateOneWithoutCVNestedInput";
import { PersonalInformationUpdateOneRequiredWithoutCvNestedInput } from "../inputs/PersonalInformationUpdateOneRequiredWithoutCvNestedInput";
import { ProjectUpdateOneWithoutCVNestedInput } from "../inputs/ProjectUpdateOneWithoutCVNestedInput";
import { SkillUpdateOneWithoutCVNestedInput } from "../inputs/SkillUpdateOneWithoutCVNestedInput";

@TypeGraphQL.InputType("CVUpdateWithoutSummaryInput", {})
export class CVUpdateWithoutSummaryInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateOneRequiredWithoutCvNestedInput, {
    nullable: true
  })
  personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateOneWithoutCVNestedInput, {
    nullable: true
  })
  experience?: ExperienceUpdateOneWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => EducationUpdateOneWithoutCVNestedInput, {
    nullable: true
  })
  education?: EducationUpdateOneWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateOneWithoutCVNestedInput, {
    nullable: true
  })
  skills?: SkillUpdateOneWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneWithoutCVNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateOneWithoutCVNestedInput | undefined;
}
