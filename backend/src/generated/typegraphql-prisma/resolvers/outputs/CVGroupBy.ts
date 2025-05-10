import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCountAggregate } from "../outputs/CVCountAggregate";
import { CVMaxAggregate } from "../outputs/CVMaxAggregate";
import { CVMinAggregate } from "../outputs/CVMinAggregate";

@TypeGraphQL.ObjectType("CVGroupBy", {})
export class CVGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  personalInformationId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summaryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => CVCountAggregate, {
    nullable: true
  })
  _count!: CVCountAggregate | null;

  @TypeGraphQL.Field(_type => CVMinAggregate, {
    nullable: true
  })
  _min!: CVMinAggregate | null;

  @TypeGraphQL.Field(_type => CVMaxAggregate, {
    nullable: true
  })
  _max!: CVMaxAggregate | null;
}
