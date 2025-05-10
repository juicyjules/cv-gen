import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSkillArgs } from "./args/AggregateSkillArgs";
import { Skill } from "../../../models/Skill";
import { AggregateSkill } from "../../outputs/AggregateSkill";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Skill)
export class AggregateSkillResolver {
  @TypeGraphQL.Query(_returns => AggregateSkill, {
    nullable: false
  })
  async aggregateSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSkillArgs): Promise<AggregateSkill> {
    return getPrismaFromContext(ctx).skill.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
