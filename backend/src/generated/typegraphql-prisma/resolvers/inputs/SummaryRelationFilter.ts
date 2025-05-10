import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryWhereInput } from "../inputs/SummaryWhereInput";

@TypeGraphQL.InputType("SummaryRelationFilter", {})
export class SummaryRelationFilter {
  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  is?: SummaryWhereInput | undefined;

  @TypeGraphQL.Field(_type => SummaryWhereInput, {
    nullable: true
  })
  isNot?: SummaryWhereInput | undefined;
}
