import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutSkillsInput } from "../inputs/CVUpdateWithoutSkillsInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutSkillsInput", {})
export class CVUpdateToOneWithWhereWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutSkillsInput, {
    nullable: false
  })
  data!: CVUpdateWithoutSkillsInput;
}
