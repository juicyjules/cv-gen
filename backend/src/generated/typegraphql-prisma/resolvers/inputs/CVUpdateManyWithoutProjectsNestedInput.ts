import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyProjectsInputEnvelope } from "../inputs/CVCreateManyProjectsInputEnvelope";
import { CVCreateOrConnectWithoutProjectsInput } from "../inputs/CVCreateOrConnectWithoutProjectsInput";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyWithWhereWithoutProjectsInput } from "../inputs/CVUpdateManyWithWhereWithoutProjectsInput";
import { CVUpdateWithWhereUniqueWithoutProjectsInput } from "../inputs/CVUpdateWithWhereUniqueWithoutProjectsInput";
import { CVUpsertWithWhereUniqueWithoutProjectsInput } from "../inputs/CVUpsertWithWhereUniqueWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateManyWithoutProjectsNestedInput", {})
export class CVUpdateManyWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutProjectsInput], {
    nullable: true
  })
  create?: CVCreateWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutProjectsInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpsertWithWhereUniqueWithoutProjectsInput], {
    nullable: true
  })
  upsert?: CVUpsertWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyProjectsInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyProjectsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CVUpdateWithWhereUniqueWithoutProjectsInput], {
    nullable: true
  })
  update?: CVUpdateWithWhereUniqueWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateManyWithWhereWithoutProjectsInput], {
    nullable: true
  })
  updateMany?: CVUpdateManyWithWhereWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CVScalarWhereInput[] | undefined;
}
