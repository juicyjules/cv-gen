import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectUpdateWithoutCVInput } from "../inputs/ProjectUpdateWithoutCVInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";

@TypeGraphQL.InputType("ProjectUpdateToOneWithWhereWithoutCVInput", {})
export class ProjectUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutCVInput, {
    nullable: false
  })
  data!: ProjectUpdateWithoutCVInput;
}
