import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationWhereInput } from "../inputs/EducationWhereInput";

@TypeGraphQL.InputType("EducationNullableRelationFilter", {})
export class EducationNullableRelationFilter {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  is?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  isNot?: EducationWhereInput | undefined;
}
