import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("ProjectMinAggregate", {})
export class ProjectMinAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  name!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  technologies!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  liveUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  cvId!: string | null;
}
