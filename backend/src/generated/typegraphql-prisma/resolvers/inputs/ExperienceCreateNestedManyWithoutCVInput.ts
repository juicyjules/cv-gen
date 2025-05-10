import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateManyCVInputEnvelope } from "../inputs/ExperienceCreateManyCVInputEnvelope";
import { ExperienceCreateOrConnectWithoutCVInput } from "../inputs/ExperienceCreateOrConnectWithoutCVInput";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceCreateNestedManyWithoutCVInput", {})
export class ExperienceCreateNestedManyWithoutCVInput {
  @TypeGraphQL.Field(_type => [ExperienceCreateWithoutCVInput], {
    nullable: true
  })
  create?: ExperienceCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [ExperienceCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: ExperienceCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [ExperienceWhereUniqueInput], {
    nullable: true
  })
  connect?: ExperienceWhereUniqueInput[] | undefined;
}
