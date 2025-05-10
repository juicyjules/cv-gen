import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryUpdateWithoutCVInput } from "../inputs/SummaryUpdateWithoutCVInput";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryUpdateToOneWithWhereWithoutCVInput", {})
export class SummaryUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SummaryUpdateWithoutCVInput, {
    nullable: false
  })
  data!: SummaryUpdateWithoutCVInput;
}
