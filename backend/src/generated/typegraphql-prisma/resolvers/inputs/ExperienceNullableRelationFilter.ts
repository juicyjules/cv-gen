import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";

@TypeGraphQL.InputType("ExperienceNullableRelationFilter", {})
export class ExperienceNullableRelationFilter {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  is?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  isNot?: ExperienceWhereInput | undefined;
}
