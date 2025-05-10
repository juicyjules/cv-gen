import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyProjectsInput } from "../inputs/CVCreateManyProjectsInput";

@TypeGraphQL.InputType("CVCreateManyProjectsInputEnvelope", {})
export class CVCreateManyProjectsInputEnvelope {
  @TypeGraphQL.Field(_type => [CVCreateManyProjectsInput], {
    nullable: false
  })
  data!: CVCreateManyProjectsInput[];
}
