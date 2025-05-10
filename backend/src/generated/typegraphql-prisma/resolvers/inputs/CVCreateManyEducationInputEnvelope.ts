import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyEducationInput } from "../inputs/CVCreateManyEducationInput";

@TypeGraphQL.InputType("CVCreateManyEducationInputEnvelope", {})
export class CVCreateManyEducationInputEnvelope {
  @TypeGraphQL.Field(_type => [CVCreateManyEducationInput], {
    nullable: false
  })
  data!: CVCreateManyEducationInput[];
}
