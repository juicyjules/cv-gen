import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryWhereUniqueInput } from "../../../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSummaryOrThrowArgs {
  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: false
  })
  where!: SummaryWhereUniqueInput;
}
