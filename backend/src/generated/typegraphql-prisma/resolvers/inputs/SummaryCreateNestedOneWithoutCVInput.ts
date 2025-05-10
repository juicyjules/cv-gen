import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateOrConnectWithoutCVInput } from "../inputs/SummaryCreateOrConnectWithoutCVInput";
import { SummaryCreateWithoutCVInput } from "../inputs/SummaryCreateWithoutCVInput";
import { SummaryWhereUniqueInput } from "../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.InputType("SummaryCreateNestedOneWithoutCVInput", {})
export class SummaryCreateNestedOneWithoutCVInput {
  @TypeGraphQL.Field(_type => SummaryCreateWithoutCVInput, {
    nullable: true
  })
  create?: SummaryCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SummaryCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: SummaryCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: true
  })
  connect?: SummaryWhereUniqueInput | undefined;
}
