import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EducationUpdateManyWithoutCVNestedInput } from "../inputs/EducationUpdateManyWithoutCVNestedInput";
import { ExperienceUpdateManyWithoutCVNestedInput } from "../inputs/ExperienceUpdateManyWithoutCVNestedInput";
import { PersonalInformationUpdateOneRequiredWithoutCVNestedInput } from "../inputs/PersonalInformationUpdateOneRequiredWithoutCVNestedInput";
import { ProjectUpdateManyWithoutCVNestedInput } from "../inputs/ProjectUpdateManyWithoutCVNestedInput";
import { SkillUpdateManyWithoutCVNestedInput } from "../inputs/SkillUpdateManyWithoutCVNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("CVUpdateWithoutSummaryInput", {})
export class CVUpdateWithoutSummaryInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateOneRequiredWithoutCVNestedInput, {
    nullable: true
  })
  personalInformation?: PersonalInformationUpdateOneRequiredWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  experience?: ExperienceUpdateManyWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => EducationUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  education?: EducationUpdateManyWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  skills?: SkillUpdateManyWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutCVNestedInput | undefined;
}
