import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SkillCountAggregate } from "../outputs/SkillCountAggregate";
import { SkillMaxAggregate } from "../outputs/SkillMaxAggregate";
import { SkillMinAggregate } from "../outputs/SkillMinAggregate";

@TypeGraphQL.ObjectType("SkillGroupBy", {})
export class SkillGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  @TypeGraphQL.Field(_type => SkillCountAggregate, {
    nullable: true
  })
  _count!: SkillCountAggregate | null;

  @TypeGraphQL.Field(_type => SkillMinAggregate, {
    nullable: true
  })
  _min!: SkillMinAggregate | null;

  @TypeGraphQL.Field(_type => SkillMaxAggregate, {
    nullable: true
  })
  _max!: SkillMaxAggregate | null;
}
