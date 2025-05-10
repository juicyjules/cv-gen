import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillUpdateWithoutCVInput } from "../inputs/SkillUpdateWithoutCVInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType("SkillUpdateWithWhereUniqueWithoutCVInput", {})
export class SkillUpdateWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: false
  })
  where!: SkillWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillUpdateWithoutCVInput, {
    nullable: false
  })
  data!: SkillUpdateWithoutCVInput;
}
