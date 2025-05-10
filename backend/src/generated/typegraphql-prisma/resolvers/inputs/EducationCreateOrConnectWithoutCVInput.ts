import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationCreateOrConnectWithoutCVInput", {})
export class EducationCreateOrConnectWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationCreateWithoutCVInput, {
    nullable: false
  })
  create!: EducationCreateWithoutCVInput;
}
