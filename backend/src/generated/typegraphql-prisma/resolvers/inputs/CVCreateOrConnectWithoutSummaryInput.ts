import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutSummaryInput } from "../inputs/CVCreateWithoutSummaryInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateOrConnectWithoutSummaryInput", {})
export class CVCreateOrConnectWithoutSummaryInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutSummaryInput, {
    nullable: false
  })
  create!: CVCreateWithoutSummaryInput;
}
