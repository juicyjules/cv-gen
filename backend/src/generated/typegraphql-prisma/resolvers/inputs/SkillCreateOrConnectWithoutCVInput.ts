import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateWithoutCVInput } from "../inputs/SkillCreateWithoutCVInput";
import { SkillWhereUniqueInput } from "../inputs/SkillWhereUniqueInput";

@TypeGraphQL.InputType("SkillCreateOrConnectWithoutCVInput", {})
export class SkillCreateOrConnectWithoutCVInput {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: false
  })
  where!: SkillWhereUniqueInput;

  @TypeGraphQL.Field(_type => SkillCreateWithoutCVInput, {
    nullable: false
  })
  create!: SkillCreateWithoutCVInput;
}
