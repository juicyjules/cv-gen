import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateSummaryArgs } from "./args/AggregateSummaryArgs";
import { Summary } from "../../../models/Summary";
import { AggregateSummary } from "../../outputs/AggregateSummary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Summary)
export class AggregateSummaryResolver {
  @TypeGraphQL.Query(_returns => AggregateSummary, {
    nullable: false
  })
  async aggregateSummary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateSummaryArgs): Promise<AggregateSummary> {
    return getPrismaFromContext(ctx).summary.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
