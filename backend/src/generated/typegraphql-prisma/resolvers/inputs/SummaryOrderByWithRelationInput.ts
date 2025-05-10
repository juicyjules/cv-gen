import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVOrderByWithRelationInput } from "../inputs/CVOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("SummaryOrderByWithRelationInput", {})
export class SummaryOrderByWithRelationInput {
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

  @TypeGraphQL.Field(_type => CVOrderByWithRelationInput, {
    nullable: true
  })
  cv?: CVOrderByWithRelationInput | undefined;
}
