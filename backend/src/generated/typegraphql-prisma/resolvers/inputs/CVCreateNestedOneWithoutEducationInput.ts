import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutEducationInput } from "../inputs/CVCreateOrConnectWithoutEducationInput";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedOneWithoutEducationInput", {})
export class CVCreateNestedOneWithoutEducationInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutEducationInput, {
    nullable: true
  })
  create?: CVCreateWithoutEducationInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutEducationInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutEducationInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;
}
