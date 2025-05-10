import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillOrderByWithRelationInput } from "../../../inputs/SkillOrderByWithRelationInput";
import { SkillWhereInput } from "../../../inputs/SkillWhereInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateSkillArgs {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  where?: SkillWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SkillOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: SkillOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: true
  })
  cursor?: SkillWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
