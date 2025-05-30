import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { Skill } from "../../../models/Skill";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Skill)
export class SkillRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CV, {
    nullable: false
  })
  async CV(@TypeGraphQL.Root() skill: Skill, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<CV> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).skill.findUniqueOrThrow({
      where: {
        id: skill.id,
      },
    }).CV({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
