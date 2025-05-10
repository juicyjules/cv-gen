import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutSkillsInput } from "../inputs/CVCreateOrConnectWithoutSkillsInput";
import { CVCreateWithoutSkillsInput } from "../inputs/CVCreateWithoutSkillsInput";
import { CVUpdateToOneWithWhereWithoutSkillsInput } from "../inputs/CVUpdateToOneWithWhereWithoutSkillsInput";
import { CVUpsertWithoutSkillsInput } from "../inputs/CVUpsertWithoutSkillsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneRequiredWithoutSkillsNestedInput", {})
export class CVUpdateOneRequiredWithoutSkillsNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutSkillsInput, {
    nullable: true
  })
  create?: CVCreateWithoutSkillsInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutSkillsInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutSkillsInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutSkillsInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutSkillsInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutSkillsInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutSkillsInput | undefined;
}
