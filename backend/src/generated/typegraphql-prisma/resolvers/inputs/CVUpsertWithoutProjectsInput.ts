import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVUpdateWithoutProjectsInput } from "../inputs/CVUpdateWithoutProjectsInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpsertWithoutProjectsInput", {})
export class CVUpsertWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CVUpdateWithoutProjectsInput, {
    nullable: false
  })
  update!: CVUpdateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => CVCreateWithoutProjectsInput, {
    nullable: false
  })
  create!: CVCreateWithoutProjectsInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
