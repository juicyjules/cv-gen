import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutCVInput } from "../inputs/ProjectCreateWithoutCVInput";
import { ProjectUpdateWithoutCVInput } from "../inputs/ProjectUpdateWithoutCVInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpsertWithWhereUniqueWithoutCVInput", {})
export class ProjectUpsertWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: false
  })
  where!: ProjectWhereUniqueInput;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCVInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutCVInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutCVInput;
}
