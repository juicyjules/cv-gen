import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCreateWithoutCvInput } from "../inputs/SummaryCreateWithoutCvInput";
import { SummaryUpdateWithoutCvInput } from "../inputs/SummaryUpdateWithoutCvInput";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryUpsertWithoutCvInput", {})
export class SummaryUpsertWithoutCvInput {
  @TypeGraphQL.Field(_type => SummaryUpdateWithoutCvInput, {
    nullable: false
  })
  update!: SummaryUpdateWithoutCvInput;

  @TypeGraphQL.Field(_type => SummaryCreateWithoutCvInput, {
    nullable: false
  })
  create!: SummaryCreateWithoutCvInput;

  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;
}
