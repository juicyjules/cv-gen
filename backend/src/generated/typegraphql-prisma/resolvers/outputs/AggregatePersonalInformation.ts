import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCountAggregate } from "../outputs/PersonalInformationCountAggregate";
import { PersonalInformationMaxAggregate } from "../outputs/PersonalInformationMaxAggregate";
import { PersonalInformationMinAggregate } from "../outputs/PersonalInformationMinAggregate";

@TypeGraphQL.ObjectType("AggregatePersonalInformation", {})
export class AggregatePersonalInformation {
  @TypeGraphQL.Field(_type => PersonalInformationCountAggregate, {
    nullable: true
  })
  _count!: PersonalInformationCountAggregate | null;

  @TypeGraphQL.Field(_type => PersonalInformationMinAggregate, {
    nullable: true
  })
  _min!: PersonalInformationMinAggregate | null;

  @TypeGraphQL.Field(_type => PersonalInformationMaxAggregate, {
    nullable: true
  })
  _max!: PersonalInformationMaxAggregate | null;
}
