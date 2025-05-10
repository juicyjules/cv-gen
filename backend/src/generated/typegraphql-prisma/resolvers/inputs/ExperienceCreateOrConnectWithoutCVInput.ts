import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCreateWithoutCVInput } from "../inputs/ExperienceCreateWithoutCVInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";

@TypeGraphQL.InputType("ExperienceCreateOrConnectWithoutCVInput", {})
export class ExperienceCreateOrConnectWithoutCVInput {
  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: false
  })
  where!: ExperienceWhereUniqueInput;

  @TypeGraphQL.Field(_type => ExperienceCreateWithoutCVInput, {
    nullable: false
  })
  create!: ExperienceCreateWithoutCVInput;
}
