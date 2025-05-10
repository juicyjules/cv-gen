import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCountOrderByAggregateInput } from "../inputs/PersonalInformationCountOrderByAggregateInput";
import { PersonalInformationMaxOrderByAggregateInput } from "../inputs/PersonalInformationMaxOrderByAggregateInput";
import { PersonalInformationMinOrderByAggregateInput } from "../inputs/PersonalInformationMinOrderByAggregateInput";
import { SortOrderInput } from "../inputs/SortOrderInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PersonalInformationOrderByWithAggregationInput", {})
export class PersonalInformationOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  firstName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  lastName?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  phone?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  location?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  linkedinUrl?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  githubUrl?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrderInput, {
    nullable: true
  })
  personalWebsite?: SortOrderInput | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  personalInformationId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PersonalInformationCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PersonalInformationMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PersonalInformationMinOrderByAggregateInput | undefined;
}
