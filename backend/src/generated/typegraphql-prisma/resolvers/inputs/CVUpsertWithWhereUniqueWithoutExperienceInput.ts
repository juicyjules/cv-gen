import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVUpdateWithoutExperienceInput } from "../inputs/CVUpdateWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpsertWithWhereUniqueWithoutExperienceInput", {})
export class CVUpsertWithWhereUniqueWithoutExperienceInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutExperienceInput, {
    nullable: false
  })
  update!: CVUpdateWithoutExperienceInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutExperienceInput, {
    nullable: false
  })
  create!: CVCreateWithoutExperienceInput;
}
