import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillUpdateWithoutCVInput } from "../inputs/SkillUpdateWithoutCVInput";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@TypeGraphQL.InputType("SkillUpdateToOneWithWhereWithoutCVInput", {})
export class SkillUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  where?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => SkillUpdateWithoutCVInput, {
    nullable: false
  })
  data!: SkillUpdateWithoutCVInput;
}
