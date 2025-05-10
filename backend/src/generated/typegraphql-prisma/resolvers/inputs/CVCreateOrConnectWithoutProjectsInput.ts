import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateOrConnectWithoutProjectsInput", {})
export class CVCreateOrConnectWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: CVCreateWithoutProjectsInput;
}
