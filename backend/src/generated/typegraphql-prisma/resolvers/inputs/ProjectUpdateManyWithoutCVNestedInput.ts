import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateManyCVInputEnvelope } from "../inputs/ProjectCreateManyCVInputEnvelope";
import { ProjectCreateOrConnectWithoutCVInput } from "../inputs/ProjectCreateOrConnectWithoutCVInput";
import { ProjectCreateWithoutCVInput } from "../inputs/ProjectCreateWithoutCVInput";
import { ProjectScalarWhereInput } from "../inputs/ProjectScalarWhereInput";
import { ProjectUpdateManyWithWhereWithoutCVInput } from "../inputs/ProjectUpdateManyWithWhereWithoutCVInput";
import { ProjectUpdateWithWhereUniqueWithoutCVInput } from "../inputs/ProjectUpdateWithWhereUniqueWithoutCVInput";
import { ProjectUpsertWithWhereUniqueWithoutCVInput } from "../inputs/ProjectUpsertWithWhereUniqueWithoutCVInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType("ProjectUpdateManyWithoutCVNestedInput", {})
export class ProjectUpdateManyWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => [ProjectCreateWithoutCVInput], {
    nullable: true
  })
  create?: ProjectCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpsertWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  upsert?: ProjectUpsertWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: ProjectCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  set?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  delete?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectWhereUniqueInput], {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  update?: ProjectUpdateWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectUpdateManyWithWhereWithoutCVInput], {
    nullable: true
  })
  updateMany?: ProjectUpdateManyWithWhereWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ProjectScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ProjectScalarWhereInput[] | undefined;
}
