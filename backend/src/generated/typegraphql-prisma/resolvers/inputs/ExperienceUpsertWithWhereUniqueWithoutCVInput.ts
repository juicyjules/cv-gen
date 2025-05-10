import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceUpdateWithoutCVInput } from "../inputs/ExperienceUpdateWithoutCVInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpsertWithWhereUniqueWithoutCVInput", {})
export class ExperienceUpsertWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceUpdateWithoutCVInput, {
    nullable: false
  })
  update!: ExperienceUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => ExperienceCreateWithoutCVInput, {
    nullable: false
  })
  create!: ExperienceCreateWithoutCVInput;
}
