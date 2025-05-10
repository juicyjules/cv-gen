import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutSummaryInput } from "../inputs/CVCreateOrConnectWithoutSummaryInput";
import { CVCreateWithoutSummaryInput } from "../inputs/CVCreateWithoutSummaryInput";
import { CVUpdateToOneWithWhereWithoutSummaryInput } from "../inputs/CVUpdateToOneWithWhereWithoutSummaryInput";
import { CVUpsertWithoutSummaryInput } from "../inputs/CVUpsertWithoutSummaryInput";
import { CVWhereInput } from "../inputs/CVWhereInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneWithoutSummaryNestedInput", {})
export class CVUpdateOneWithoutSummaryNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutSummaryInput, {
    nullable: true
  })
  create?: CVCreateWithoutSummaryInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutSummaryInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutSummaryInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutSummaryInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutSummaryInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  disconnect?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  delete?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutSummaryInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutSummaryInput | undefined;
}
