import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutCVInput } from "../inputs/ProjectUpdateWithoutCVInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateWithWhereUniqueWithoutCVInput", {})
export class ProjectUpdateWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCVInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutCVInput;
}
