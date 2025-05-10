import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCountAggregate } from "../outputs/EducationCountAggregate";
import { EducationMaxAggregate } from "../outputs/EducationMaxAggregate";
import { EducationMinAggregate } from "../outputs/EducationMinAggregate";

@TypeGraphQL.ObjectType("AggregateEducation", {})
export class AggregateEducation {
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
