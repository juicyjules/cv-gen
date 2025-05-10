import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyExperienceInputEnvelope } from "../inputs/CVCreateManyExperienceInputEnvelope";
import { CVCreateOrConnectWithoutExperienceInput } from "../inputs/CVCreateOrConnectWithoutExperienceInput";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedManyWithoutExperienceInput", {})
export class CVCreateNestedManyWithoutExperienceInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutExperienceInput], {
    nullable: true
  })
  create?: CVCreateWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutExperienceInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutExperienceInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyExperienceInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyExperienceInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  connect?: CVWhereUniqueInput[] | undefined;
}
