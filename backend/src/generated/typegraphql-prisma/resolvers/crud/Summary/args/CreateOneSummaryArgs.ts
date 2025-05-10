import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryCreateInput } from "../../../inputs/SummaryCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSummaryArgs {
  @TypeGraphQL.Field(_type => SummaryCreateInput, {
    nullable: false
  })
  data!: SummaryCreateInput;
}
