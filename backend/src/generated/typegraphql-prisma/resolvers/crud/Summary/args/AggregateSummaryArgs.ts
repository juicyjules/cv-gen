import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryOrderByWithRelationInput } from "../../../inputs/SummaryOrderByWithRelationInput";
import { SummaryWhereInput } from "../../../inputs/SummaryWhereInput";
import { SummaryWhereUniqueInput } from "../../../inputs/SummaryWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSummaryArgs {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SummaryOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SummaryOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SummaryWhereUniqueInput, {
    nullable: true
  })
  cursor?: SummaryWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
