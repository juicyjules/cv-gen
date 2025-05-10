import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateManyCVInputEnvelope } from "../inputs/SkillCreateManyCVInputEnvelope";
import { SkillCreateOrConnectWithoutCVInput } from "../inputs/SkillCreateOrConnectWithoutCVInput";
import { SkillCreateWithoutCVInput } from "../inputs/SkillCreateWithoutCVInput";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyWithWhereWithoutCVInput } from "../inputs/SkillUpdateManyWithWhereWithoutCVInput";
import { SkillUpdateWithWhereUniqueWithoutCVInput } from "../inputs/SkillUpdateWithWhereUniqueWithoutCVInput";
import { SkillUpsertWithWhereUniqueWithoutCVInput } from "../inputs/SkillUpsertWithWhereUniqueWithoutCVInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType("SkillUpdateManyWithoutCVNestedInput", {})
export class SkillUpdateManyWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => [SkillCreateWithoutCVInput], {
    nullable: true
  })
  create?: SkillCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: SkillCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillUpsertWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  upsert?: SkillUpsertWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => SkillCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: SkillCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true
  })
  set?: SkillWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true
  })
  disconnect?: SkillWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true
  })
  delete?: SkillWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true
  })
  connect?: SkillWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillUpdateWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  update?: SkillUpdateWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillUpdateManyWithWhereWithoutCVInput], {
    nullable: true
  })
  updateMany?: SkillUpdateManyWithWhereWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarWhereInput], {
    nullable: true
  })
  deleteMany?: SkillScalarWhereInput[] | undefined;
}
