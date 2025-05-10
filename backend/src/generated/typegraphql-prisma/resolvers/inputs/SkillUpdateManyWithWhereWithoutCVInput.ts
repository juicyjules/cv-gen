import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillScalarWhereInput } from "../inputs/SkillScalarWhereInput";
import { SkillUpdateManyMutationInput } from "../inputs/SkillUpdateManyMutationInput";

@TypeGraphQL.InputType("SkillUpdateManyWithWhereWithoutCVInput", {})
export class SkillUpdateManyWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => SkillScalarWhereInput, {
    nullable: false
  })
  where!: SkillScalarWhereInput;

  @TypeGraphQL.Field(_type => SkillUpdateManyMutationInput, {
    nullable: false
  })
  data!: SkillUpdateManyMutationInput;
}
