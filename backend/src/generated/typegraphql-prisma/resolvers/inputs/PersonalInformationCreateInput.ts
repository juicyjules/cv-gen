import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateNestedManyWithoutPersonalInformationInput } from "../inputs/CVCreateNestedManyWithoutPersonalInformationInput";

@TypeGraphQL.InputType("PersonalInformationCreateInput", {})
export class PersonalInformationCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  firstName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  lastName!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  phone!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  linkedinUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  personalWebsite?: string | undefined;

  @TypeGraphQL.Field(_type => CVCreateNestedManyWithoutPersonalInformationInput, {
    nullable: true
  })
  cvs?: CVCreateNestedManyWithoutPersonalInformationInput | undefined;
}
