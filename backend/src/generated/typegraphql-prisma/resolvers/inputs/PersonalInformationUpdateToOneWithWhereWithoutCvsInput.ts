import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationUpdateWithoutCvsInput } from "../inputs/PersonalInformationUpdateWithoutCvsInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpdateToOneWithWhereWithoutCvsInput", {})
export class PersonalInformationUpdateToOneWithWhereWithoutCvsInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCvsInput, {
    nullable: false
  })
  data!: PersonalInformationUpdateWithoutCvsInput;
}
