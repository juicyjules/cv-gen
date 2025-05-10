import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateNestedManyWithoutSkillsInput } from "../inputs/CVCreateNestedManyWithoutSkillsInput";

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

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  @TypeGraphQL.Field(_type => CVCreateNestedManyWithoutSkillsInput, {
    nullable: true
  })
  CV?: CVCreateNestedManyWithoutSkillsInput | undefined;
}
