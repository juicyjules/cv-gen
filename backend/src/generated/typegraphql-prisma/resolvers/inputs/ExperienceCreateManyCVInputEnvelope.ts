import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyCVInput } from "../inputs/ExperienceCreateManyCVInput";

@TypeGraphQL.InputType("ExperienceCreateManyCVInputEnvelope", {})
export class ExperienceCreateManyCVInputEnvelope {
  @TypeGraphQL.Field(_type => [ExperienceCreateManyCVInput], {
    nullable: false
  })
  data!: ExperienceCreateManyCVInput[];
}
