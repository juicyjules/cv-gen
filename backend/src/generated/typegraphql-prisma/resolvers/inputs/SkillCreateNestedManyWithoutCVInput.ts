import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateManyCVInputEnvelope } from "../inputs/SkillCreateManyCVInputEnvelope";
import { SkillCreateOrConnectWithoutCVInput } from "../inputs/SkillCreateOrConnectWithoutCVInput";
import { SkillCreateWithoutCVInput } from "../inputs/SkillCreateWithoutCVInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType("SkillCreateNestedManyWithoutCVInput", {})
export class SkillCreateNestedManyWithoutCVInput {
  @TypeGraphQL.Field(_type => [SkillCreateWithoutCVInput], {
    nullable: true
  })
  create?: SkillCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: SkillCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => SkillCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: SkillCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [SkillWhereUniqueInput], {
    nullable: true
  })
  connect?: SkillWhereUniqueInput[] | undefined;
}
