import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateManyCVInput } from "../inputs/EducationCreateManyCVInput";

@TypeGraphQL.InputType("EducationCreateManyCVInputEnvelope", {})
export class EducationCreateManyCVInputEnvelope {
  @TypeGraphQL.Field(_type => [EducationCreateManyCVInput], {
    nullable: false
  })
  data!: EducationCreateManyCVInput[];
}
