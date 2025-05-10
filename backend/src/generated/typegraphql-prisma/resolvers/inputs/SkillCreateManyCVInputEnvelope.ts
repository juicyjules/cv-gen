import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCreateManyCVInput } from "../inputs/SkillCreateManyCVInput";

@TypeGraphQL.InputType("SkillCreateManyCVInputEnvelope", {})
export class SkillCreateManyCVInputEnvelope {
  @TypeGraphQL.Field(_type => [SkillCreateManyCVInput], {
    nullable: false
  })
  data!: SkillCreateManyCVInput[];
}
