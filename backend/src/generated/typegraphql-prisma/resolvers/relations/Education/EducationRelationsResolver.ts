import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { Education } from "../../../models/Education";
import { EducationCVArgs } from "./args/EducationCVArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Education)
export class EducationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CV], {
    nullable: false
  })
  async CV(@TypeGraphQL.Root() education: Education, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: EducationCVArgs): Promise<CV[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).education.findUniqueOrThrow({
      where: {
        id: education.id,
      },
    }).CV({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
