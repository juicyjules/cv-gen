import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutExperienceInput } from "../inputs/CVCreateOrConnectWithoutExperienceInput";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedOneWithoutExperienceInput", {})
export class CVCreateNestedOneWithoutExperienceInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutExperienceInput, {
    nullable: true
  })
  create?: CVCreateWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutExperienceInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;
}
