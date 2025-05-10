import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVUpdateWithoutEducationInput } from "../inputs/CVUpdateWithoutEducationInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutEducationInput", {})
export class CVUpsertWithoutEducationInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutEducationInput, {
    nullable: false
  })
  update!: CVUpdateWithoutEducationInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutEducationInput, {
    nullable: false
  })
  create!: CVCreateWithoutEducationInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
