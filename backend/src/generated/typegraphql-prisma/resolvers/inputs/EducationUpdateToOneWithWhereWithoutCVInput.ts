import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationUpdateWithoutCVInput } from "../inputs/EducationUpdateWithoutCVInput";
import { EducationWhereInput } from "../inputs/EducationWhereInput";

@TypeGraphQL.InputType("EducationUpdateToOneWithWhereWithoutCVInput", {})
export class EducationUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationUpdateWithoutCVInput, {
    nullable: false
  })
  data!: EducationUpdateWithoutCVInput;
}
