import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryUpdateManyMutationInput } from "../../../inputs/SummaryUpdateManyMutationInput";
import { SummaryWhereInput } from "../../../inputs/SummaryWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManySummaryArgs {
  @TypeGraphQL.Field(_type => SummaryUpdateManyMutationInput, {
    nullable: false
  })
  data!: SummaryUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;
}
