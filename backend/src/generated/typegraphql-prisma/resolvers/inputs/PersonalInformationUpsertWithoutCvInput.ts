import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCvInput } from "../inputs/PersonalInformationCreateWithoutCvInput";
import { PersonalInformationUpdateWithoutCvInput } from "../inputs/PersonalInformationUpdateWithoutCvInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpsertWithoutCvInput", {})
export class PersonalInformationUpsertWithoutCvInput {
  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCvInput, {
    nullable: false
  })
  update!: PersonalInformationUpdateWithoutCvInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCvInput;

  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;
}
