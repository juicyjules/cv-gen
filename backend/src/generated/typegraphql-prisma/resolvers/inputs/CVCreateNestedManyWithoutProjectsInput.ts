import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateManyProjectsInputEnvelope } from "../inputs/CVCreateManyProjectsInputEnvelope";
import { CVCreateOrConnectWithoutProjectsInput } from "../inputs/CVCreateOrConnectWithoutProjectsInput";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVCreateNestedManyWithoutProjectsInput", {})
export class CVCreateNestedManyWithoutProjectsInput {
  @TypeGraphQL.Field(_type => [CVCreateWithoutProjectsInput], {
    nullable: true
  })
  create?: CVCreateWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVCreateOrConnectWithoutProjectsInput], {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutProjectsInput[] | undefined;

  @TypeGraphQL.Field(_type => CVCreateManyProjectsInputEnvelope, {
    nullable: true
  })
  createMany?: CVCreateManyProjectsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CVWhereUniqueInput], {
    nullable: true
  })
  connect?: CVWhereUniqueInput[] | undefined;
}
