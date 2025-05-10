import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnSummaryArgs } from "./args/CreateManyAndReturnSummaryArgs";
import { Summary } from "../../../models/Summary";
import { CreateManyAndReturnSummary } from "../../outputs/CreateManyAndReturnSummary";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Summary)
export class CreateManyAndReturnSummaryResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnSummary], {
    nullable: false
  })
  async createManyAndReturnSummary(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnSummaryArgs): Promise<CreateManyAndReturnSummary[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).summary.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
