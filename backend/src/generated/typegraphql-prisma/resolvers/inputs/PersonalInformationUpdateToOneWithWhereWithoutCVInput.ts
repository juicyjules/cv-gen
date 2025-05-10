import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationUpdateWithoutCVInput } from "../inputs/PersonalInformationUpdateWithoutCVInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpdateToOneWithWhereWithoutCVInput", {})
export class PersonalInformationUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCVInput, {
    nullable: false
  })
  data!: PersonalInformationUpdateWithoutCVInput;
}
