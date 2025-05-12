import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyPersonalInformationInput } from "../inputs/CVCreateManyPersonalInformationInput";

@TypeGraphQL.InputType("CVCreateManyPersonalInformationInputEnvelope", {})
export class CVCreateManyPersonalInformationInputEnvelope {
  @TypeGraphQL.Field(_type => [CVCreateManyPersonalInformationInput], {
    nullable: false
  })
  data!: CVCreateManyPersonalInformationInput[];
}
