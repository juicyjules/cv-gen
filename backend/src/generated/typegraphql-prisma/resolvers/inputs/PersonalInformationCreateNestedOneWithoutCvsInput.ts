import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateOrConnectWithoutCvsInput } from "../inputs/PersonalInformationCreateOrConnectWithoutCvsInput";
import { PersonalInformationCreateWithoutCvsInput } from "../inputs/PersonalInformationCreateWithoutCvsInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateNestedOneWithoutCvsInput", {})
export class PersonalInformationCreateNestedOneWithoutCvsInput {
  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvsInput, {
    nullable: true
  })
  create?: PersonalInformationCreateWithoutCvsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateOrConnectWithoutCvsInput, {
    nullable: true
  })
  connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonalInformationWhereUniqueInput | undefined;
}
