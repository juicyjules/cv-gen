import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateWithoutCVInput } from "../inputs/SummaryCreateWithoutCVInput";
import { SummaryUpdateWithoutCVInput } from "../inputs/SummaryUpdateWithoutCVInput";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryUpsertWithoutCVInput", {})
export class SummaryUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => SummaryUpdateWithoutCVInput, {
    nullable: false
  })
  update!: SummaryUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => SummaryCreateWithoutCVInput, {
    nullable: false
  })
  create!: SummaryCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;
}
