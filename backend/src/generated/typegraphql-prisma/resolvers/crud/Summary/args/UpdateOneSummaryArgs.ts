import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryUpdateInput } from "../../../inputs/SummaryUpdateInput";
import { SummaryWhereUniqueInput } from "../../../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSummaryArgs {
  @TypeGraphQL.Field(_type => SummaryUpdateInput, {
    nullable: false
  })
  data!: SummaryUpdateInput;

  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: false
  })
  where!: SummaryWhereUniqueInput;
}
