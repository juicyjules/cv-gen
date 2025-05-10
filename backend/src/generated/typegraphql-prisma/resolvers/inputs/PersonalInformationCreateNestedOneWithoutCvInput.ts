import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateOrConnectWithoutCvInput } from "../inputs/PersonalInformationCreateOrConnectWithoutCvInput";
import { PersonalInformationCreateWithoutCvInput } from "../inputs/PersonalInformationCreateWithoutCvInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationCreateNestedOneWithoutCvInput", {})
export class PersonalInformationCreateNestedOneWithoutCvInput {
  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvInput, {
    nullable: true
  })
  create?: PersonalInformationCreateWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateOrConnectWithoutCvInput, {
    nullable: true
  })
  connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonalInformationWhereUniqueInput | undefined;
}
