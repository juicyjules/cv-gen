import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceUpdateWithoutCVInput } from "../inputs/ExperienceUpdateWithoutCVInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceUpdateWithWhereUniqueWithoutCVInput", {})
export class ExperienceUpdateWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceUpdateWithoutCVInput, {
    nullable: false
  })
  data!: ExperienceUpdateWithoutCVInput;
}
