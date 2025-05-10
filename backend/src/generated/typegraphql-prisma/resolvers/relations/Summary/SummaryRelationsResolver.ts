import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { Summary } from "../../../models/Summary";
import { SummaryCVArgs } from "./args/SummaryCVArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Summary)
export class SummaryRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CV, {
    nullable: true
  })
  async CV(@TypeGraphQL.Root() summary: Summary, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: SummaryCVArgs): Promise<CV | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).summary.findUniqueOrThrow({
      where: {
        id: summary.id,
      },
    }).CV({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
