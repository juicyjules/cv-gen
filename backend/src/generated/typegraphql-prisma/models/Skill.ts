import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CV } from "../models/CV";
import { SkillCount } from "../resolvers/outputs/SkillCount";

@TypeGraphQL.ObjectType("Skill", {})
export class Skill {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  CV?: CV[];

  @TypeGraphQL.Field(_type => SkillCount, {
    nullable: true
  })
  _count?: SkillCount | null;
}
