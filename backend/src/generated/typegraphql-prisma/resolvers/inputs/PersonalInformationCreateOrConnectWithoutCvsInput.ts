import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCvsInput } from "../inputs/PersonalInformationCreateWithoutCvsInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateOrConnectWithoutCvsInput", {})
export class PersonalInformationCreateOrConnectWithoutCvsInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvsInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCvsInput;
}
