import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateOneRequiredWithoutSkillsNestedInput } from "../inputs/CVUpdateOneRequiredWithoutSkillsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SkillUpdateInput", {})
export class SkillUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  level?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateOneRequiredWithoutSkillsNestedInput, {
    nullable: true
  })
  CV?: CVUpdateOneRequiredWithoutSkillsNestedInput | undefined;
}
