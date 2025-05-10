import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CV } from "../models/CV";
import { ProjectCount } from "../resolvers/outputs/ProjectCount";

@TypeGraphQL.ObjectType("Project", {})
export class Project {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  technologies!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  liveUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  CV?: CV[];

  @TypeGraphQL.Field(_type => ProjectCount, {
    nullable: true
  })
  _count?: ProjectCount | null;
}
