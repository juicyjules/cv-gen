import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutSkillsInput } from "../inputs/CVCreateWithoutSkillsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateOrConnectWithoutSkillsInput", {})
export class CVCreateOrConnectWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutSkillsInput, {
    nullable: false
  })
  create!: CVCreateWithoutSkillsInput;
}
