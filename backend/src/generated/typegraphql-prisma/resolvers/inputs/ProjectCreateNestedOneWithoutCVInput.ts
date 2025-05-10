import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCVInput } from "../inputs/ProjectCreateOrConnectWithoutCVInput";
import { ProjectCreateWithoutCVInput } from "../inputs/ProjectCreateWithoutCVInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectCreateNestedOneWithoutCVInput", {})
export class ProjectCreateNestedOneWithoutCVInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutCVInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;
}
