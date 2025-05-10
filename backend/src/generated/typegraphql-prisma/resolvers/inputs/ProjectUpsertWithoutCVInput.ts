import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutCVInput } from "../inputs/ProjectCreateWithoutCVInput";
import { ProjectUpdateWithoutCVInput } from "../inputs/ProjectUpdateWithoutCVInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpsertWithoutCVInput", {})
export class ProjectUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCVInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutCVInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
