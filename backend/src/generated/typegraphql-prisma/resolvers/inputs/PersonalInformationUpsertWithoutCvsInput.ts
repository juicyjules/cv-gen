import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCvsInput } from "../inputs/PersonalInformationCreateWithoutCvsInput";
import { PersonalInformationUpdateWithoutCvsInput } from "../inputs/PersonalInformationUpdateWithoutCvsInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpsertWithoutCvsInput", {})
export class PersonalInformationUpsertWithoutCvsInput {
  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCvsInput, {
    nullable: false
  })
  update!: PersonalInformationUpdateWithoutCvsInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvsInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCvsInput;

  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;
}
