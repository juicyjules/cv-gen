import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationUpdateWithoutCVInput } from "../inputs/EducationUpdateWithoutCVInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationUpsertWithWhereUniqueWithoutCVInput", {})
export class EducationUpsertWithWhereUniqueWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationUpdateWithoutCVInput, {
    nullable: false
  })
  update!: EducationUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => EducationCreateWithoutCVInput, {
    nullable: false
  })
  create!: EducationCreateWithoutCVInput;
}
