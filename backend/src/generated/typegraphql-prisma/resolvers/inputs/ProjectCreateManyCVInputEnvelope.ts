import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyCVInput } from "../inputs/ProjectCreateManyCVInput";

@TypeGraphQL.InputType("ProjectCreateManyCVInputEnvelope", {})
export class ProjectCreateManyCVInputEnvelope {
  @TypeGraphQL.Field(_type => [ProjectCreateManyCVInput], {
    nullable: false
  })
  data!: ProjectCreateManyCVInput[];
}
