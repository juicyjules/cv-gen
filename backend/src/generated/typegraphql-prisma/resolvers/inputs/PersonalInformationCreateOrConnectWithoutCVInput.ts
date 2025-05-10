import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCVInput } from "../inputs/PersonalInformationCreateWithoutCVInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateOrConnectWithoutCVInput", {})
export class PersonalInformationCreateOrConnectWithoutCVInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCVInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCVInput;
}
