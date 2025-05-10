import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutSummaryInput } from "../inputs/CVCreateWithoutSummaryInput";
import { CVUpdateWithoutSummaryInput } from "../inputs/CVUpdateWithoutSummaryInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutSummaryInput", {})
export class CVUpsertWithoutSummaryInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutSummaryInput, {
    nullable: false
  })
  update!: CVUpdateWithoutSummaryInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutSummaryInput, {
    nullable: false
  })
  create!: CVCreateWithoutSummaryInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
