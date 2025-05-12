import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CV } from "../models/CV";
import { PersonalInformationCount } from "../resolvers/outputs/PersonalInformationCount";

@TypeGraphQL.ObjectType("PersonalInformation", {})
export class PersonalInformation {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

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
  linkedinUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  personalWebsite?: string | null;

  cvs?: CV[];

  @TypeGraphQL.Field(_type => PersonalInformationCount, {
    nullable: true
  })
  _count?: PersonalInformationCount | null;
}
