import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("CVScalarWhereWithAggregatesInput", {})
export class CVScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [CVScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: CVScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: CVScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: CVScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  personalInformationId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  summaryId?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
