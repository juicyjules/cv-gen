import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVNullableRelationFilter } from "../inputs/CVNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("SummaryWhereInput", {})
export class SummaryWhereInput {
  @TypeGraphQL.Field(_type => [SummaryWhereInput], {
    nullable: true
  })
  AND?: SummaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SummaryWhereInput], {
    nullable: true
  })
  OR?: SummaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SummaryWhereInput], {
    nullable: true
  })
  NOT?: SummaryWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  summaryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CVNullableRelationFilter, {
    nullable: true
  })
  cv?: CVNullableRelationFilter | undefined;
}
