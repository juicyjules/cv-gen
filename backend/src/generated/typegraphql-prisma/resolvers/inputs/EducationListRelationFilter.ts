import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationWhereInput } from "../inputs/EducationWhereInput";

@TypeGraphQL.InputType("EducationListRelationFilter", {})
export class EducationListRelationFilter {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  every?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  some?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  none?: EducationWhereInput | undefined;
}
