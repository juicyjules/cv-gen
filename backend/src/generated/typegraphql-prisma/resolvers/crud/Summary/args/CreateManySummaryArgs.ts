import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryCreateManyInput } from "../../../inputs/SummaryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManySummaryArgs {
  @TypeGraphQL.Field(_type => [SummaryCreateManyInput], {
    nullable: false
  })
  data!: SummaryCreateManyInput[];
}
