import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueSummaryOrThrowArgs } from "./args/FindUniqueSummaryOrThrowArgs";
import { Summary } from "../../../models/Summary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Summary)
export class FindUniqueSummaryOrThrowResolver {
  @TypeGraphQL.Query(_returns => Summary, {
    nullable: true
  })
  async getSummary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueSummaryOrThrowArgs): Promise<Summary | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).summary.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
