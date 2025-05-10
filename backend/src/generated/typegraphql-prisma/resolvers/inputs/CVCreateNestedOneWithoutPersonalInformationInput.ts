import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutPersonalInformationInput } from "../inputs/CVCreateOrConnectWithoutPersonalInformationInput";
import { CVCreateWithoutPersonalInformationInput } from "../inputs/CVCreateWithoutPersonalInformationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedOneWithoutPersonalInformationInput", {})
export class CVCreateNestedOneWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutPersonalInformationInput, {
    nullable: true
  })
  create?: CVCreateWithoutPersonalInformationInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutPersonalInformationInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;
}
