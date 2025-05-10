import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCountOrderByAggregateInput } from "../inputs/CVCountOrderByAggregateInput";
import { CVMaxOrderByAggregateInput } from "../inputs/CVMaxOrderByAggregateInput";
import { CVMinOrderByAggregateInput } from "../inputs/CVMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("CVOrderByWithAggregationInput", {})
export class CVOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personalInformationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  summaryId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => CVCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: CVCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CVMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: CVMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => CVMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: CVMinOrderByAggregateInput | undefined;
}
