import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateOrConnectWithoutCVInput } from "../inputs/PersonalInformationCreateOrConnectWithoutCVInput";
import { PersonalInformationCreateWithoutCVInput } from "../inputs/PersonalInformationCreateWithoutCVInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateNestedOneWithoutCVInput", {})
export class PersonalInformationCreateNestedOneWithoutCVInput {
  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCVInput, {
    nullable: true
  })
  create?: PersonalInformationCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: PersonalInformationCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonalInformationWhereUniqueInput | undefined;
}
