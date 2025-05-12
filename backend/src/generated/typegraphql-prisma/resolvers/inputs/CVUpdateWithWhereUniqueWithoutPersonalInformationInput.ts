import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutPersonalInformationInput } from "../inputs/CVUpdateWithoutPersonalInformationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateWithWhereUniqueWithoutPersonalInformationInput", {})
export class CVUpdateWithWhereUniqueWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutPersonalInformationInput, {
    nullable: false
  })
  data!: CVUpdateWithoutPersonalInformationInput;
}
