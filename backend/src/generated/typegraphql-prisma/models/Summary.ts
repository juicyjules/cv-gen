import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { CV } from "../models/CV";

@TypeGraphQL.ObjectType("Summary", {})
export class Summary {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  cv?: CV | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summaryId!: string;
}
