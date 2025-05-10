import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVScalarWhereInput } from "../inputs/CVScalarWhereInput";
import { CVUpdateManyMutationInput } from "../inputs/CVUpdateManyMutationInput";

@TypeGraphQL.InputType("CVUpdateManyWithWhereWithoutSkillsInput", {})
export class CVUpdateManyWithWhereWithoutSkillsInput {
  @TypeGraphQL.Field(_type => CVScalarWhereInput, {
    nullable: false
  })
  where!: CVScalarWhereInput;

  @TypeGraphQL.Field(_type => CVUpdateManyMutationInput, {
    nullable: false
  })
  data!: CVUpdateManyMutationInput;
}
