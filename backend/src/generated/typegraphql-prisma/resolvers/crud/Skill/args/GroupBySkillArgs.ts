import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillOrderByWithAggregationInput } from "../../../inputs/SkillOrderByWithAggregationInput";
import { SkillScalarWhereWithAggregatesInput } from "../../../inputs/SkillScalarWhereWithAggregatesInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";
import { SkillScalarFieldEnum } from "../../../../enums/SkillScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  where?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SkillOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SkillOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SkillScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "level" | "cvId">;

  @TypeGraphQL.Field(_type => SkillScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SkillScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
