import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceCountAggregate } from "../outputs/ExperienceCountAggregate";
import { ExperienceMaxAggregate } from "../outputs/ExperienceMaxAggregate";
import { ExperienceMinAggregate } from "../outputs/ExperienceMinAggregate";

@TypeGraphQL.ObjectType("ExperienceGroupBy", {})
export class ExperienceGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  jobTitle!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  company!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  startDate!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  endDate!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  @TypeGraphQL.Field(_type => ExperienceCountAggregate, {
    nullable: true
  })
  _count!: ExperienceCountAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceMinAggregate, {
    nullable: true
  })
  _min!: ExperienceMinAggregate | null;

  @TypeGraphQL.Field(_type => ExperienceMaxAggregate, {
    nullable: true
  })
  _max!: ExperienceMaxAggregate | null;
}
