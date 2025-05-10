import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SummaryOrderByWithAggregationInput } from "../../../inputs/SummaryOrderByWithAggregationInput";
import { SummaryScalarWhereWithAggregatesInput } from "../../../inputs/SummaryScalarWhereWithAggregatesInput";
import { SummaryWhereInput } from "../../../inputs/SummaryWhereInput";
import { SummaryScalarFieldEnum } from "../../../../enums/SummaryScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySummaryArgs {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  where?: SummaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SummaryOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SummaryOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SummaryScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "text">;

  @TypeGraphQL.Field(_type => SummaryScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SummaryScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
