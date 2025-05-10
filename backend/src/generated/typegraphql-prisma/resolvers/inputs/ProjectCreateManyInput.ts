import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("ProjectCreateManyInput", {})
export class ProjectCreateManyInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

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
  liveUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  githubUrl?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;
}
