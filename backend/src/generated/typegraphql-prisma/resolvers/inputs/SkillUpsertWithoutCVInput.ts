import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateWithoutCVInput } from "../inputs/SkillCreateWithoutCVInput";
import { SkillUpdateWithoutCVInput } from "../inputs/SkillUpdateWithoutCVInput";
import { SkillWhereInput } from "../inputs/SkillWhereInput";

@TypeGraphQL.InputType("SkillUpsertWithoutCVInput", {})
export class SkillUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => SkillUpdateWithoutCVInput, {
    nullable: false
  })
  update!: SkillUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => SkillCreateWithoutCVInput, {
    nullable: false
  })
  create!: SkillCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  where?: SkillWhereInput | undefined;
}
