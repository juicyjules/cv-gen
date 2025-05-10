import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateManyCVInputEnvelope } from "../inputs/EducationCreateManyCVInputEnvelope";
import { EducationCreateOrConnectWithoutCVInput } from "../inputs/EducationCreateOrConnectWithoutCVInput";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationScalarWhereInput } from "../inputs/EducationScalarWhereInput";
import { EducationUpdateManyWithWhereWithoutCVInput } from "../inputs/EducationUpdateManyWithWhereWithoutCVInput";
import { EducationUpdateWithWhereUniqueWithoutCVInput } from "../inputs/EducationUpdateWithWhereUniqueWithoutCVInput";
import { EducationUpsertWithWhereUniqueWithoutCVInput } from "../inputs/EducationUpsertWithWhereUniqueWithoutCVInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationUpdateManyWithoutCVNestedInput", {})
export class EducationUpdateManyWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => [EducationCreateWithoutCVInput], {
    nullable: true
  })
  create?: EducationCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: EducationCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationUpsertWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  upsert?: EducationUpsertWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: EducationCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EducationWhereUniqueInput], {
    nullable: true
  })
  set?: EducationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationWhereUniqueInput], {
    nullable: true
  })
  disconnect?: EducationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationWhereUniqueInput], {
    nullable: true
  })
  delete?: EducationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationWhereUniqueInput], {
    nullable: true
  })
  connect?: EducationWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationUpdateWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  update?: EducationUpdateWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationUpdateManyWithWhereWithoutCVInput], {
    nullable: true
  })
  updateMany?: EducationUpdateManyWithWhereWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationScalarWhereInput], {
    nullable: true
  })
  deleteMany?: EducationScalarWhereInput[] | undefined;
}
