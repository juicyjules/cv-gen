import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateManyWithoutCVNestedInput } from "../inputs/ExperienceUpdateManyWithoutCVNestedInput";
import { PersonalInformationUpdateOneRequiredWithoutCvsNestedInput } from "../inputs/PersonalInformationUpdateOneRequiredWithoutCvsNestedInput";
import { ProjectUpdateManyWithoutCVNestedInput } from "../inputs/ProjectUpdateManyWithoutCVNestedInput";
import { SkillUpdateManyWithoutCVNestedInput } from "../inputs/SkillUpdateManyWithoutCVNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { SummaryUpdateOneRequiredWithoutCVNestedInput } from "../inputs/SummaryUpdateOneRequiredWithoutCVNestedInput";

@TypeGraphQL.InputType("CVUpdateWithoutEducationInput", {})
export class CVUpdateWithoutEducationInput {
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

  @TypeGraphQL.Field(_type => PersonalInformationUpdateOneRequiredWithoutCvsNestedInput, {
    nullable: true
  })
  personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput | undefined;

  @TypeGraphQL.Field(_type => SummaryUpdateOneRequiredWithoutCVNestedInput, {
    nullable: true
  })
  summary?: SummaryUpdateOneRequiredWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  experience?: ExperienceUpdateManyWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  skills?: SkillUpdateManyWithoutCVNestedInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateManyWithoutCVNestedInput, {
    nullable: true
  })
  projects?: ProjectUpdateManyWithoutCVNestedInput | undefined;
}
