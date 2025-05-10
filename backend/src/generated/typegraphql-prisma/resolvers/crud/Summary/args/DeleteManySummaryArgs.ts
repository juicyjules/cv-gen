import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryWhereInput } from "../../../inputs/SummaryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManySummaryArgs {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;
}
