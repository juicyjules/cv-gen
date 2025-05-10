import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("CVScalarWhereInput", {})
export class CVScalarWhereInput {
  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  AND?: CVScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  OR?: CVScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarWhereInput], {
    nullable: true
  })
  NOT?: CVScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  personalInformationId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  summaryId?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
