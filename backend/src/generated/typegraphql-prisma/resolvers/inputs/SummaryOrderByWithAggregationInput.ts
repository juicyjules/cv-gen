import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCountOrderByAggregateInput } from "../inputs/SummaryCountOrderByAggregateInput";
import { SummaryMaxOrderByAggregateInput } from "../inputs/SummaryMaxOrderByAggregateInput";
import { SummaryMinOrderByAggregateInput } from "../inputs/SummaryMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SummaryOrderByWithAggregationInput", {})
export class SummaryOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  text?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  summaryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SummaryCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SummaryCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SummaryMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SummaryMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SummaryMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SummaryMinOrderByAggregateInput | undefined;
}
