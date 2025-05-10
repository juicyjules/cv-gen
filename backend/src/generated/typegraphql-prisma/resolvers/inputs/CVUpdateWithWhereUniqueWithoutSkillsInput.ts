import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutSkillsInput } from "../inputs/CVUpdateWithoutSkillsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateWithWhereUniqueWithoutSkillsInput", {})
export class CVUpdateWithWhereUniqueWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutSkillsInput, {
    nullable: false
  })
  data!: CVUpdateWithoutSkillsInput;
}
