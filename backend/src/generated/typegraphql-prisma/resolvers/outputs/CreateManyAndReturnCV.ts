import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformation } from "../../models/PersonalInformation";
import { Summary } from "../../models/Summary";

@TypeGraphQL.ObjectType("CreateManyAndReturnCV", {})
export class CreateManyAndReturnCV {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  personalInformationId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summaryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PersonalInformation, {
    nullable: false
  })
  personalInformation!: PersonalInformation;

  @TypeGraphQL.Field(_type => Summary, {
    nullable: false
  })
  summary!: Summary;
}
