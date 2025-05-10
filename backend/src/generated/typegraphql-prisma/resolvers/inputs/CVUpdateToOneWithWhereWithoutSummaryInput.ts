import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVUpdateWithoutSummaryInput } from "../inputs/CVUpdateWithoutSummaryInput";
import { CVWhereInput } from "../inputs/CVWhereInput";

@TypeGraphQL.InputType("CVUpdateToOneWithWhereWithoutSummaryInput", {})
export class CVUpdateToOneWithWhereWithoutSummaryInput {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateWithoutSummaryInput, {
    nullable: false
  })
  data!: CVUpdateWithoutSummaryInput;
}
