import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateWithoutCVInput } from "../inputs/PersonalInformationCreateWithoutCVInput";
import { PersonalInformationUpdateWithoutCVInput } from "../inputs/PersonalInformationUpdateWithoutCVInput";
import { PersonalInformationWhereInput } from "../inputs/PersonalInformationWhereInput";

@TypeGraphQL.InputType("PersonalInformationUpsertWithoutCVInput", {})
export class PersonalInformationUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => PersonalInformationUpdateWithoutCVInput, {
    nullable: false
  })
  update!: PersonalInformationUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCVInput, {
    nullable: false
  })
  create!: PersonalInformationCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;
}
