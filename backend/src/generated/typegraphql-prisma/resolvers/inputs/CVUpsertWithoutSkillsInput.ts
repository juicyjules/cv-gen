import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutSkillsInput } from "../inputs/CVCreateWithoutSkillsInput";
import { CVUpdateWithoutSkillsInput } from "../inputs/CVUpdateWithoutSkillsInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutSkillsInput", {})
export class CVUpsertWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutSkillsInput, {
    nullable: false
  })
  update!: CVUpdateWithoutSkillsInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutSkillsInput, {
    nullable: false
  })
  create!: CVCreateWithoutSkillsInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
