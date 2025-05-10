import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManySkillsInput } from "../inputs/CVCreateManySkillsInput";

@TypeGraphQL.InputType("CVCreateManySkillsInputEnvelope", {})
export class CVCreateManySkillsInputEnvelope {
  @TypeGraphQL.Field(_type => [CVCreateManySkillsInput], {
    nullable: false
  })
  data!: CVCreateManySkillsInput[];
}
