import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateNestedOneWithoutEducationInput } from "../inputs/CVCreateNestedOneWithoutEducationInput";

@TypeGraphQL.InputType("EducationCreateInput", {})
export class EducationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institution!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  degree!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  major?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate?: Date | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => CVCreateNestedOneWithoutEducationInput, {
    nullable: false
  })
  CV!: CVCreateNestedOneWithoutEducationInput;
}
