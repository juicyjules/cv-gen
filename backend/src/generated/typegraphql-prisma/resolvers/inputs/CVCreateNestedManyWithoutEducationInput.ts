import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyEducationInputEnvelope } from "../inputs/CVCreateManyEducationInputEnvelope";
import { CVCreateOrConnectWithoutEducationInput } from "../inputs/CVCreateOrConnectWithoutEducationInput";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedManyWithoutEducationInput", {})
export class CVCreateNestedManyWithoutEducationInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutEducationInput], {
    nullable: true
  })
  create?: CVCreateWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutEducationInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyEducationInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyEducationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  connect?: CVWhereUniqueInput[] | undefined;
}
