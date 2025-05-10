import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceUpdateWithoutCVInput } from "../inputs/ExperienceUpdateWithoutCVInput";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";

@TypeGraphQL.InputType("ExperienceUpsertWithoutCVInput", {})
export class ExperienceUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => ExperienceUpdateWithoutCVInput, {
    nullable: false
  })
  update!: ExperienceUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => ExperienceCreateWithoutCVInput, {
    nullable: false
  })
  create!: ExperienceCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;
}
