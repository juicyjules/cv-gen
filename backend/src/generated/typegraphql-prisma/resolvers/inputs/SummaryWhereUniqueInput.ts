import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVNullableRelationFilter } from "../inputs/CVNullableRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryWhereUniqueInput", {})
export class SummaryWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
  text?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => CVNullableRelationFilter, {
    nullable: true
  })
  CV?: CVNullableRelationFilter | undefined;
}
