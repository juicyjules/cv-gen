import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { Experience } from "../../../models/Experience";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Experience)
export class ExperienceRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CV, {
    nullable: false
  })
  async CV(@TypeGraphQL.Root() experience: Experience, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<CV> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).experience.findUniqueOrThrow({
      where: {
        id: experience.id,
      },
    }).CV({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
