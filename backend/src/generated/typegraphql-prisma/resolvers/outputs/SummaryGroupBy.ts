import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SummaryCountAggregate } from "../outputs/SummaryCountAggregate";
import { SummaryMaxAggregate } from "../outputs/SummaryMaxAggregate";
import { SummaryMinAggregate } from "../outputs/SummaryMinAggregate";

@TypeGraphQL.ObjectType("SummaryGroupBy", {})
export class SummaryGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  text!: string;

  @TypeGraphQL.Field(_type => SummaryCountAggregate, {
    nullable: true
  })
  _count!: SummaryCountAggregate | null;

  @TypeGraphQL.Field(_type => SummaryMinAggregate, {
    nullable: true
  })
  _min!: SummaryMinAggregate | null;

  @TypeGraphQL.Field(_type => SummaryMaxAggregate, {
    nullable: true
  })
  _max!: SummaryMaxAggregate | null;
}
