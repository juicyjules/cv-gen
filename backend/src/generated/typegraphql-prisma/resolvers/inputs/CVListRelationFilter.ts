import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVListRelationFilter", {})
export class CVListRelationFilter {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  every?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  some?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  none?: CVWhereInput | undefined;
}
