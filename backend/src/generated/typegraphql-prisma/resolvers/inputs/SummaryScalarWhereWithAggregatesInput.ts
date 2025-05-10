import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("SummaryScalarWhereWithAggregatesInput", {})
export class SummaryScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [SummaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: SummaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SummaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: SummaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [SummaryScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: SummaryScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  text?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  summaryId?: StringWithAggregatesFilter | undefined;
}
