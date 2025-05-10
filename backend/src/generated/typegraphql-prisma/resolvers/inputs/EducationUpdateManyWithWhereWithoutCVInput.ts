import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationScalarWhereInput } from "../inputs/EducationScalarWhereInput";
import { EducationUpdateManyMutationInput } from "../inputs/EducationUpdateManyMutationInput";

@TypeGraphQL.InputType("EducationUpdateManyWithWhereWithoutCVInput", {})
export class EducationUpdateManyWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => EducationScalarWhereInput, {
    nullable: false
  })
  where!: EducationScalarWhereInput;

  @TypeGraphQL.Field(_type => EducationUpdateManyMutationInput, {
    nullable: false
  })
  data!: EducationUpdateManyMutationInput;
}
