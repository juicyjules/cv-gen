import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutCVInput } from "../inputs/ProjectCreateOrConnectWithoutCVInput";
import { ProjectCreateWithoutCVInput } from "../inputs/ProjectCreateWithoutCVInput";
import { ProjectUpdateToOneWithWhereWithoutCVInput } from "../inputs/ProjectUpdateToOneWithWhereWithoutCVInput";
import { ProjectUpsertWithoutCVInput } from "../inputs/ProjectUpsertWithoutCVInput";
import { ProjectWhereInput } from "../inputs/ProjectWhereInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateOneWithoutCVNestedInput", {})
export class ProjectUpdateOneWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutCVInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutCVInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  disconnect?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  delete?: ProjectWhereInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateToOneWithWhereWithoutCVInput, {
    nullable: true
  })
  update?: ProjectUpdateToOneWithWhereWithoutCVInput | undefined;
}
