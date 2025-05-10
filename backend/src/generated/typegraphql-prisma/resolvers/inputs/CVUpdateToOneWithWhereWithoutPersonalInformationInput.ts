import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutPersonalInformationInput } from "../inputs/CVUpdateWithoutPersonalInformationInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutPersonalInformationInput", {})
export class CVUpdateToOneWithWhereWithoutPersonalInformationInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutPersonalInformationInput, {
    nullable: false
  })
  data!: CVUpdateWithoutPersonalInformationInput;
}
