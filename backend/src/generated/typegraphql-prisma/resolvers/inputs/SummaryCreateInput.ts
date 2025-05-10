import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateNestedOneWithoutSummaryInput } from "../inputs/CVCreateNestedOneWithoutSummaryInput";

@TypeGraphQL.InputType("SummaryCreateInput", {})
export class SummaryCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => CVCreateNestedOneWithoutSummaryInput, {
    nullable: true
  })
  CV?: CVCreateNestedOneWithoutSummaryInput | undefined;
}
