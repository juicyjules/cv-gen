import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutPersonalInformationInput } from "../inputs/CVCreateWithoutPersonalInformationInput";
import { CVUpdateWithoutPersonalInformationInput } from "../inputs/CVUpdateWithoutPersonalInformationInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutPersonalInformationInput", {})
export class CVUpsertWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutPersonalInformationInput, {
    nullable: false
  })
  update!: CVUpdateWithoutPersonalInformationInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutPersonalInformationInput, {
    nullable: false
  })
  create!: CVCreateWithoutPersonalInformationInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
