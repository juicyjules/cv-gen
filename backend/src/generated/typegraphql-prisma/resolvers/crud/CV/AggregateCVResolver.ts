import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateCVArgs } from "./args/AggregateCVArgs";
import { CV } from "../../../models/CV";
import { AggregateCV } from "../../outputs/AggregateCV";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CV)
export class AggregateCVResolver {
  @TypeGraphQL.Query(_returns => AggregateCV, {
    nullable: false
  })
  async aggregateCV(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateCVArgs): Promise<AggregateCV> {
    return getPrismaFromContext(ctx).cV.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
