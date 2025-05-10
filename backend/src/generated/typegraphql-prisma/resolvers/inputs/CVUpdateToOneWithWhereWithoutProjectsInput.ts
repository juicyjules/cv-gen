import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutProjectsInput } from "../inputs/CVUpdateWithoutProjectsInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutProjectsInput", {})
export class CVUpdateToOneWithWhereWithoutProjectsInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutProjectsInput, {
    nullable: false
  })
  data!: CVUpdateWithoutProjectsInput;
}
