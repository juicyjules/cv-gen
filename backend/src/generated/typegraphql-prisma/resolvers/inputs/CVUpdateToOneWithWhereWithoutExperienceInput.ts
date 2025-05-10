import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutExperienceInput } from "../inputs/CVUpdateWithoutExperienceInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutExperienceInput", {})
export class CVUpdateToOneWithWhereWithoutExperienceInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutExperienceInput, {
    nullable: false
  })
  data!: CVUpdateWithoutExperienceInput;
}
