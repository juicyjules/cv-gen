import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVUpdateWithoutProjectsInput } from "../inputs/CVUpdateWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpsertWithWhereUniqueWithoutProjectsInput", {})
export class CVUpsertWithWhereUniqueWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: CVUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: CVCreateWithoutProjectsInput;
}
