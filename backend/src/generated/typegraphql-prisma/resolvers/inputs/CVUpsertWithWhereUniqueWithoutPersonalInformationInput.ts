import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutPersonalInformationInput } from "../inputs/CVCreateWithoutPersonalInformationInput";
import { CVUpdateWithoutPersonalInformationInput } from "../inputs/CVUpdateWithoutPersonalInformationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpsertWithWhereUniqueWithoutPersonalInformationInput", {})
export class CVUpsertWithWhereUniqueWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutPersonalInformationInput, {
    nullable: false
  })
  update!: CVUpdateWithoutPersonalInformationInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutPersonalInformationInput, {
    nullable: false
  })
  create!: CVCreateWithoutPersonalInformationInput;
}
