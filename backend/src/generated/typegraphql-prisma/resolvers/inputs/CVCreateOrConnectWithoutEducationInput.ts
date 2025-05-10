import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateOrConnectWithoutEducationInput", {})
export class CVCreateOrConnectWithoutEducationInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutEducationInput, {
    nullable: false
  })
  create!: CVCreateWithoutEducationInput;
}
