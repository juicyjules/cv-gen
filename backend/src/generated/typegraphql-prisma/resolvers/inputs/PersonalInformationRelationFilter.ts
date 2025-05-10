import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationRelationFilter", {})
export class PersonalInformationRelationFilter {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  is?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  isNot?: PersonalInformationWhereInput | undefined;
}
