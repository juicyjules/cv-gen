import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryCreateInput } from "../../../inputs/SummaryCreateInput";
import { SummaryUpdateInput } from "../../../inputs/SummaryUpdateInput";
import { SummaryWhereUniqueInput } from "../../../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneSummaryArgs {
  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: false
  })
  where!: SummaryWhereUniqueInput;

  @TypeGraphQL.Field(_type => SummaryCreateInput, {
    nullable: false
  })
  create!: SummaryCreateInput;

  @TypeGraphQL.Field(_type => SummaryUpdateInput, {
    nullable: false
  })
  update!: SummaryUpdateInput;
}
