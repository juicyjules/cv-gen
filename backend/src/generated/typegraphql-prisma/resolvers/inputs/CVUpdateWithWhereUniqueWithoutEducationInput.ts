import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutEducationInput } from "../inputs/CVUpdateWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateWithWhereUniqueWithoutEducationInput", {})
export class CVUpdateWithWhereUniqueWithoutEducationInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutEducationInput, {
    nullable: false
  })
  data!: CVUpdateWithoutEducationInput;
}
