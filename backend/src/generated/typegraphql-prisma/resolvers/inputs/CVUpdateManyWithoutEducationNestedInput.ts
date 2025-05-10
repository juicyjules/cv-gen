import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyEducationInputEnvelope } from "../inputs/CVCreateManyEducationInputEnvelope";
import { CVCreateOrConnectWithoutEducationInput } from "../inputs/CVCreateOrConnectWithoutEducationInput";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyWithWhereWithoutEducationInput } from "../inputs/CVUpdateManyWithWhereWithoutEducationInput";
import { CVUpdateWithWhereUniqueWithoutEducationInput } from "../inputs/CVUpdateWithWhereUniqueWithoutEducationInput";
import { CVUpsertWithWhereUniqueWithoutEducationInput } from "../inputs/CVUpsertWithWhereUniqueWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateManyWithoutEducationNestedInput", {})
export class CVUpdateManyWithoutEducationNestedInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutEducationInput], {
    nullable: true
  })
  create?: CVCreateWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutEducationInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpsertWithWhereUniqueWithoutEducationInput], {
    nullable: true
  })
  upsert?: CVUpsertWithWhereUniqueWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyEducationInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyEducationInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  set?: CVWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  disconnect?: CVWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  delete?: CVWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  connect?: CVWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateWithWhereUniqueWithoutEducationInput], {
    nullable: true
  })
  update?: CVUpdateWithWhereUniqueWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateManyWithWhereWithoutEducationInput], {
    nullable: true
  })
  updateMany?: CVUpdateManyWithWhereWithoutEducationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CVScalarWhereInput[] | undefined;
}
