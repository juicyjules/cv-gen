import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateOrConnectWithoutCvInput } from "../inputs/SummaryCreateOrConnectWithoutCvInput";
import { SummaryCreateWithoutCvInput } from "../inputs/SummaryCreateWithoutCvInput";
import { SummaryWhereUniqueInput } from "../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.InputType("SummaryCreateNestedOneWithoutCvInput", {})
export class SummaryCreateNestedOneWithoutCvInput {
  @TypeGraphQL.Field(_type => SummaryCreateWithoutCvInput, {
    nullable: true
  })
  create?: SummaryCreateWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => SummaryCreateOrConnectWithoutCvInput, {
    nullable: true
  })
  connectOrCreate?: SummaryCreateOrConnectWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SummaryWhereUniqueInput | undefined;
}
