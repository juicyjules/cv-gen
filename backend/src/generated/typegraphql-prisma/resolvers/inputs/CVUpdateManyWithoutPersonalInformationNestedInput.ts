import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyPersonalInformationInputEnvelope } from "../inputs/CVCreateManyPersonalInformationInputEnvelope";
import { CVCreateOrConnectWithoutPersonalInformationInput } from "../inputs/CVCreateOrConnectWithoutPersonalInformationInput";
import { CVCreateWithoutPersonalInformationInput } from "../inputs/CVCreateWithoutPersonalInformationInput";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyWithWhereWithoutPersonalInformationInput } from "../inputs/CVUpdateManyWithWhereWithoutPersonalInformationInput";
import { CVUpdateWithWhereUniqueWithoutPersonalInformationInput } from "../inputs/CVUpdateWithWhereUniqueWithoutPersonalInformationInput";
import { CVUpsertWithWhereUniqueWithoutPersonalInformationInput } from "../inputs/CVUpsertWithWhereUniqueWithoutPersonalInformationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateManyWithoutPersonalInformationNestedInput", {})
export class CVUpdateManyWithoutPersonalInformationNestedInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutPersonalInformationInput], {
    nullable: true
  })
  create?: CVCreateWithoutPersonalInformationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutPersonalInformationInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpsertWithWhereUniqueWithoutPersonalInformationInput], {
    nullable: true
  })
  upsert?: CVUpsertWithWhereUniqueWithoutPersonalInformationInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyPersonalInformationInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyPersonalInformationInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CVUpdateWithWhereUniqueWithoutPersonalInformationInput], {
    nullable: true
  })
  update?: CVUpdateWithWhereUniqueWithoutPersonalInformationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateManyWithWhereWithoutPersonalInformationInput], {
    nullable: true
  })
  updateMany?: CVUpdateManyWithWhereWithoutPersonalInformationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CVScalarWhereInput[] | undefined;
}
