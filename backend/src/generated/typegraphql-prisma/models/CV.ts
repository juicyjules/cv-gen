import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Education } from "../models/Education";
import { Experience } from "../models/Experience";
import { PersonalInformation } from "../models/PersonalInformation";
import { Project } from "../models/Project";
import { Skill } from "../models/Skill";
import { Summary } from "../models/Summary";
import { CVCount } from "../resolvers/outputs/CVCount";

@TypeGraphQL.ObjectType("CV", {})
export class CV {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  personalInformation?: PersonalInformation;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  personalInformationId!: string;

  summary?: Summary;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summaryId!: string;

  experience?: Experience[];

  education?: Education[];

  skills?: Skill[];

  projects?: Project[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CVCount, {
    nullable: true
  })
  _count?: CVCount | null;
}
