import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCountOrderByAggregateInput } from "../inputs/ExperienceCountOrderByAggregateInput";
import { ExperienceMaxOrderByAggregateInput } from "../inputs/ExperienceMaxOrderByAggregateInput";
import { ExperienceMinOrderByAggregateInput } from "../inputs/ExperienceMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ExperienceOrderByWithAggregationInput", {})
export class ExperienceOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  jobTitle?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  company?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  location?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  endDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cvId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ExperienceCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ExperienceCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ExperienceMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ExperienceMinOrderByAggregateInput | undefined;
}
