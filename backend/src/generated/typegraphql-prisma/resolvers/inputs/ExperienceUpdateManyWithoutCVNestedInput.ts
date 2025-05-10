import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyCVInputEnvelope } from "../inputs/ExperienceCreateManyCVInputEnvelope";
import { ExperienceCreateOrConnectWithoutCVInput } from "../inputs/ExperienceCreateOrConnectWithoutCVInput";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceScalarWhereInput } from "../inputs/ExperienceScalarWhereInput";
import { ExperienceUpdateManyWithWhereWithoutCVInput } from "../inputs/ExperienceUpdateManyWithWhereWithoutCVInput";
import { ExperienceUpdateWithWhereUniqueWithoutCVInput } from "../inputs/ExperienceUpdateWithWhereUniqueWithoutCVInput";
import { ExperienceUpsertWithWhereUniqueWithoutCVInput } from "../inputs/ExperienceUpsertWithWhereUniqueWithoutCVInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpdateManyWithoutCVNestedInput", {})
export class ExperienceUpdateManyWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => [ExperienceCreateWithoutCVInput], {
    nullable: true
  })
  create?: ExperienceCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpsertWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  upsert?: ExperienceUpsertWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: ExperienceCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  set?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  disconnect?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  delete?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  connect?: ExperienceWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpdateWithWhereUniqueWithoutCVInput], {
    nullable: true
  })
  update?: ExperienceUpdateWithWhereUniqueWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceUpdateManyWithWhereWithoutCVInput], {
    nullable: true
  })
  updateMany?: ExperienceUpdateManyWithWhereWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarWhereInput], {
    nullable: true
  })
  deleteMany?: ExperienceScalarWhereInput[] | undefined;
}
