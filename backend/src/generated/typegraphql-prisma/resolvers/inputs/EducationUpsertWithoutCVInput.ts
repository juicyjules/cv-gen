import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationUpdateWithoutCVInput } from "../inputs/EducationUpdateWithoutCVInput";
import { EducationWhereInput } from "../inputs/EducationWhereInput";

@TypeGraphQL.InputType("EducationUpsertWithoutCVInput", {})
export class EducationUpsertWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationUpdateWithoutCVInput, {
    nullable: false
  })
  update!: EducationUpdateWithoutCVInput;

  @TypeGraphQL.Field(_type => EducationCreateWithoutCVInput, {
    nullable: false
  })
  create!: EducationCreateWithoutCVInput;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;
}
