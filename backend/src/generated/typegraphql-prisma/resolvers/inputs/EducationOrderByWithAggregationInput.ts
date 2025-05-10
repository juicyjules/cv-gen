import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCountOrderByAggregateInput } from "../inputs/EducationCountOrderByAggregateInput";
import { EducationMaxOrderByAggregateInput } from "../inputs/EducationMaxOrderByAggregateInput";
import { EducationMinOrderByAggregateInput } from "../inputs/EducationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("EducationOrderByWithAggregationInput", {})
export class EducationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  institution?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  degree?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  major?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  startDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  endDate?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  description?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cvId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => EducationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: EducationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: EducationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => EducationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: EducationMinOrderByAggregateInput | undefined;
}
