import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryUpdateWithoutCvInput } from "../inputs/SummaryUpdateWithoutCvInput";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryUpdateToOneWithWhereWithoutCvInput", {})
export class SummaryUpdateToOneWithWhereWithoutCvInput {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SummaryUpdateWithoutCvInput, {
    nullable: false
  })
  data!: SummaryUpdateWithoutCvInput;
}
