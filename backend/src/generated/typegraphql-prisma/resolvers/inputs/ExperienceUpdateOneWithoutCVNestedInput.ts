import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateOrConnectWithoutCVInput } from "../inputs/ExperienceCreateOrConnectWithoutCVInput";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceUpdateToOneWithWhereWithoutCVInput } from "../inputs/ExperienceUpdateToOneWithWhereWithoutCVInput";
import { ExperienceUpsertWithoutCVInput } from "../inputs/ExperienceUpsertWithoutCVInput";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpdateOneWithoutCVNestedInput", {})
export class ExperienceUpdateOneWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => ExperienceCreateWithoutCVInput, {
    nullable: true
  })
  create?: ExperienceCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpsertWithoutCVInput, {
    nullable: true
  })
  upsert?: ExperienceUpsertWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  disconnect?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  delete?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: true
  })
  connect?: ExperienceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateToOneWithWhereWithoutCVInput, {
    nullable: true
  })
  update?: ExperienceUpdateToOneWithWhereWithoutCVInput | undefined;
}
