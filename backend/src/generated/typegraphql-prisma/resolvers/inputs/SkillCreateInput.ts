import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateNestedOneWithoutSkillsInput } from "../inputs/CVCreateNestedOneWithoutSkillsInput";

@TypeGraphQL.InputType("SkillCreateInput", {})
export class SkillCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level?: string | undefined;

  @TypeGraphQL.Field(_type => CVCreateNestedOneWithoutSkillsInput, {
    nullable: false
  })
  CV!: CVCreateNestedOneWithoutSkillsInput;
}
