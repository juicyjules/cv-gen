import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSkillArgs } from "./args/CreateManyAndReturnSkillArgs";
import { Skill } from "../../../models/Skill";
import { CreateManyAndReturnSkill } from "../../outputs/CreateManyAndReturnSkill";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Skill)
export class CreateManyAndReturnSkillResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSkill], {
    nullable: false
  })
  async createManyAndReturnSkill(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSkillArgs): Promise<CreateManyAndReturnSkill[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).skill.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
