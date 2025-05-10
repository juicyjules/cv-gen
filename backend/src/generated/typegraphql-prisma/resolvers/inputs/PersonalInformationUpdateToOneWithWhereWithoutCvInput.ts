import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationUpdateWithoutCvInput } from "../inputs/PersonalInformationUpdateWithoutCvInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpdateToOneWithWhereWithoutCvInput", {})
export class PersonalInformationUpdateToOneWithWhereWithoutCvInput {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCvInput, {
    nullable: false
  })
  data!: PersonalInformationUpdateWithoutCvInput;
}
