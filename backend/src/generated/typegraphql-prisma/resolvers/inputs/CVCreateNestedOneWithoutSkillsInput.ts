import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutSkillsInput } from "../inputs/CVCreateOrConnectWithoutSkillsInput";
import { CVCreateWithoutSkillsInput } from "../inputs/CVCreateWithoutSkillsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedOneWithoutSkillsInput", {})
export class CVCreateNestedOneWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutSkillsInput, {
    nullable: true
  })
  create?: CVCreateWithoutSkillsInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutSkillsInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutSkillsInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;
}
