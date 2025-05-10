import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutExperienceInput } from "../inputs/CVUpdateWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateWithWhereUniqueWithoutExperienceInput", {})
export class CVUpdateWithWhereUniqueWithoutExperienceInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutExperienceInput, {
    nullable: false
  })
  data!: CVUpdateWithoutExperienceInput;
}
