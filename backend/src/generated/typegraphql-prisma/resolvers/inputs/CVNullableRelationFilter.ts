import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVNullableRelationFilter", {})
export class CVNullableRelationFilter {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  is?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  isNot?: CVWhereInput | undefined;
}
