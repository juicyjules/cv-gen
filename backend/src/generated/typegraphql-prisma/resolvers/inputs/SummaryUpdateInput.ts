import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateOneWithoutSummaryNestedInput } from "../inputs/CVUpdateOneWithoutSummaryNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("SummaryUpdateInput", {})
export class SummaryUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  text?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  summaryId?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateOneWithoutSummaryNestedInput, {
    nullable: true
  })
  cv?: CVUpdateOneWithoutSummaryNestedInput | undefined;
}
