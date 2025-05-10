import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCountAggregate } from "../outputs/PersonalInformationCountAggregate";
import { PersonalInformationMaxAggregate } from "../outputs/PersonalInformationMaxAggregate";
import { PersonalInformationMinAggregate } from "../outputs/PersonalInformationMinAggregate";

@TypeGraphQL.ObjectType("PersonalInformationGroupBy", {})
export class PersonalInformationGroupBy {
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
  linkedinUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  personalWebsite!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  personalInformationId!: string;

  @TypeGraphQL.Field(_type => PersonalInformationCountAggregate, {
    nullable: true
  })
  _count!: PersonalInformationCountAggregate | null;

  @TypeGraphQL.Field(_type => PersonalInformationMinAggregate, {
    nullable: true
  })
  _min!: PersonalInformationMinAggregate | null;

  @TypeGraphQL.Field(_type => PersonalInformationMaxAggregate, {
    nullable: true
  })
  _max!: PersonalInformationMaxAggregate | null;
}
