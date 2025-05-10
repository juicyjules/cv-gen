import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVUpdateWithoutExperienceInput } from "../inputs/CVUpdateWithoutExperienceInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutExperienceInput", {})
export class CVUpsertWithoutExperienceInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutExperienceInput, {
    nullable: false
  })
  update!: CVUpdateWithoutExperienceInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutExperienceInput, {
    nullable: false
  })
  create!: CVCreateWithoutExperienceInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
