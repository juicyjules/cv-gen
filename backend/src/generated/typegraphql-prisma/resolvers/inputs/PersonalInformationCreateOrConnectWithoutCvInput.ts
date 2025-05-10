import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCvInput } from "../inputs/PersonalInformationCreateWithoutCvInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateOrConnectWithoutCvInput", {})
export class PersonalInformationCreateOrConnectWithoutCvInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCvInput;
}
