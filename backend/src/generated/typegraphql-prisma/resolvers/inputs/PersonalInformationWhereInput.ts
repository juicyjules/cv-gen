import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVListRelationFilter } from "../inputs/CVListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";

@TypeGraphQL.InputType("PersonalInformationWhereInput", {})
export class PersonalInformationWhereInput {
  @TypeGraphQL.Field(_type => [PersonalInformationWhereInput], {
    nullable: true
  })
  AND?: PersonalInformationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonalInformationWhereInput], {
    nullable: true
  })
  OR?: PersonalInformationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonalInformationWhereInput], {
    nullable: true
  })
  NOT?: PersonalInformationWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  firstName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  lastName?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  phone?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  location?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  linkedinUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  githubUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  personalWebsite?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => CVListRelationFilter, {
    nullable: true
  })
  cvs?: CVListRelationFilter | undefined;
}
