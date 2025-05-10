import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutEducationInput } from "../inputs/CVUpdateWithoutEducationInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutEducationInput", {})
export class CVUpdateToOneWithWhereWithoutEducationInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutEducationInput, {
    nullable: false
  })
  data!: CVUpdateWithoutEducationInput;
}
