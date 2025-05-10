import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateOrConnectWithoutCVInput } from "../inputs/SkillCreateOrConnectWithoutCVInput";
import { SkillCreateWithoutCVInput } from "../inputs/SkillCreateWithoutCVInput";
import { SkillUpdateToOneWithWhereWithoutCVInput } from "../inputs/SkillUpdateToOneWithWhereWithoutCVInput";
import { SkillUpsertWithoutCVInput } from "../inputs/SkillUpsertWithoutCVInput";
import { SkillWhereInput } from "../inputs/SkillWhereInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType("SkillUpdateOneWithoutCVNestedInput", {})
export class SkillUpdateOneWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => SkillCreateWithoutCVInput, {
    nullable: true
  })
  create?: SkillCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SkillCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: SkillCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpsertWithoutCVInput, {
    nullable: true
  })
  upsert?: SkillUpsertWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  disconnect?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  delete?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: true
  })
  connect?: SkillWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateToOneWithWhereWithoutCVInput, {
    nullable: true
  })
  update?: SkillUpdateToOneWithWhereWithoutCVInput | undefined;
}
