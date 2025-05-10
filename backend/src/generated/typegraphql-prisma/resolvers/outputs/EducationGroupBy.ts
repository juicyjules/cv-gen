import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCountAggregate } from "../outputs/EducationCountAggregate";
import { EducationMaxAggregate } from "../outputs/EducationMaxAggregate";
import { EducationMinAggregate } from "../outputs/EducationMinAggregate";

@TypeGraphQL.ObjectType("EducationGroupBy", {})
export class EducationGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  institution!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  degree!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  major!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  @TypeGraphQL.Field(_type => EducationCountAggregate, {
    nullable: true
  })
  _count!: EducationCountAggregate | null;

  @TypeGraphQL.Field(_type => EducationMinAggregate, {
    nullable: true
  })
  _min!: EducationMinAggregate | null;

  @TypeGraphQL.Field(_type => EducationMaxAggregate, {
    nullable: true
  })
  _max!: EducationMaxAggregate | null;
}
