import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyExperienceInput } from "../inputs/CVCreateManyExperienceInput";

@TypeGraphQL.InputType("CVCreateManyExperienceInputEnvelope", {})
export class CVCreateManyExperienceInputEnvelope {
  @TypeGraphQL.Field(_type => [CVCreateManyExperienceInput], {
    nullable: false
  })
  data!: CVCreateManyExperienceInput[];
}
