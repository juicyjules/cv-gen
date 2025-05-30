import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("NestedDateTimeNullableFilter", {})
export class NestedDateTimeNullableFilter {
  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  equals?: Date | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  in?: Date[] | undefined;

  @TypeGraphQL.Field(_type => [Date], {
    nullable: true
  })
  notIn?: Date[] | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  lte?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  gte?: Date | undefined;

  @TypeGraphQL.Field(_type => NestedDateTimeNullableFilter, {
    nullable: true
  })
  not?: NestedDateTimeNullableFilter | undefined;
}
