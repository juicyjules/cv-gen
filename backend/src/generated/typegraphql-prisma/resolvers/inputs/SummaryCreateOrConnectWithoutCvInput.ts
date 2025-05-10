import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateWithoutCvInput } from "../inputs/SummaryCreateWithoutCvInput";
import { SummaryWhereUniqueInput } from "../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.InputType("SummaryCreateOrConnectWithoutCvInput", {})
export class SummaryCreateOrConnectWithoutCvInput {
  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: false
  })
  where!: SummaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SummaryCreateWithoutCvInput, {
    nullable: false
  })
  create!: SummaryCreateWithoutCvInput;
}
