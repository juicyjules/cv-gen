import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyExperienceInputEnvelope } from "../inputs/CVCreateManyExperienceInputEnvelope";
import { CVCreateOrConnectWithoutExperienceInput } from "../inputs/CVCreateOrConnectWithoutExperienceInput";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyWithWhereWithoutExperienceInput } from "../inputs/CVUpdateManyWithWhereWithoutExperienceInput";
import { CVUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/CVUpdateWithWhereUniqueWithoutExperienceInput";
import { CVUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/CVUpsertWithWhereUniqueWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateManyWithoutExperienceNestedInput", {})
export class CVUpdateManyWithoutExperienceNestedInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutExperienceInput], {
    nullable: true
  })
  create?: CVCreateWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutExperienceInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpsertWithWhereUniqueWithoutExperienceInput], {
    nullable: true
  })
  upsert?: CVUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyExperienceInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyExperienceInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [CVUpdateWithWhereUniqueWithoutExperienceInput], {
    nullable: true
  })
  update?: CVUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVUpdateManyWithWhereWithoutExperienceInput], {
    nullable: true
  })
  updateMany?: CVUpdateManyWithWhereWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  deleteMany?: CVScalarWhereInput[] | undefined;
}
