import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutProjectsInput } from "../inputs/CVUpdateWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateWithWhereUniqueWithoutProjectsInput", {})
export class CVUpdateWithWhereUniqueWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutProjectsInput, {
    nullable: false
  })
  data!: CVUpdateWithoutProjectsInput;
}
