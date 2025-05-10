import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCountOrderByAggregateInput } from "../inputs/SkillCountOrderByAggregateInput";
import { SkillMaxOrderByAggregateInput } from "../inputs/SkillMaxOrderByAggregateInput";
import { SkillMinOrderByAggregateInput } from "../inputs/SkillMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SkillOrderByWithAggregationInput", {})
export class SkillOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  level?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  cvId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SkillCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: SkillCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SkillMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: SkillMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => SkillMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: SkillMinOrderByAggregateInput | undefined;
}
