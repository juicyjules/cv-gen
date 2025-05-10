import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutSummaryInput } from "../inputs/CVCreateOrConnectWithoutSummaryInput";
import { CVCreateWithoutSummaryInput } from "../inputs/CVCreateWithoutSummaryInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedOneWithoutSummaryInput", {})
export class CVCreateNestedOneWithoutSummaryInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutSummaryInput, {
    nullable: true
  })
  create?: CVCreateWithoutSummaryInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutSummaryInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutSummaryInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;
}
