import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationUpdateWithoutCVInput } from "../inputs/EducationUpdateWithoutCVInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationUpdateWithWhereUniqueWithoutCVInput", {})
export class EducationUpdateWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationUpdateWithoutCVInput, {
    nullable: false
  })
  data!: EducationUpdateWithoutCVInput;
}
