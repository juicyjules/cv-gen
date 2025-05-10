import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManySkillsInputEnvelope } from "../inputs/CVCreateManySkillsInputEnvelope";
import { CVCreateOrConnectWithoutSkillsInput } from "../inputs/CVCreateOrConnectWithoutSkillsInput";
import { CVCreateWithoutSkillsInput } from "../inputs/CVCreateWithoutSkillsInput";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyWithWhereWithoutSkillsInput } from "../inputs/CVUpdateManyWithWhereWithoutSkillsInput";
import { CVUpdateWithWhereUniqueWithoutSkillsInput } from "../inputs/CVUpdateWithWhereUniqueWithoutSkillsInput";
import { CVUpsertWithWhereUniqueWithoutSkillsInput } from "../inputs/CVUpsertWithWhereUniqueWithoutSkillsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateManyWithoutSkillsNestedInput", {})
export class CVUpdateManyWithoutSkillsNestedInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutSkillsInput], {
    nullable: true
  })
  create?: CVCreateWithoutSkillsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutSkillsInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutSkillsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpsertWithWhereUniqueWithoutSkillsInput], {
    nullable: true
  })
  upsert?: CVUpsertWithWhereUniqueWithoutSkillsInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManySkillsInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManySkillsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CVUpdateWithWhereUniqueWithoutSkillsInput], {
    nullable: true
  })
  update?: CVUpdateWithWhereUniqueWithoutSkillsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateManyWithWhereWithoutSkillsInput], {
    nullable: true
  })
  updateMany?: CVUpdateManyWithWhereWithoutSkillsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CVScalarWhereInput[] | undefined;
}
