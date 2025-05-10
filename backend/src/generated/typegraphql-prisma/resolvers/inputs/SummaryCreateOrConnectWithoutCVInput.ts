import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateWithoutCVInput } from "../inputs/SummaryCreateWithoutCVInput";
import { SummaryWhereUniqueInput } from "../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.InputType("SummaryCreateOrConnectWithoutCVInput", {})
export class SummaryCreateOrConnectWithoutCVInput {
  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: false
  })
  where!: SummaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SummaryCreateWithoutCVInput, {
    nullable: false
  })
  create!: SummaryCreateWithoutCVInput;
}
