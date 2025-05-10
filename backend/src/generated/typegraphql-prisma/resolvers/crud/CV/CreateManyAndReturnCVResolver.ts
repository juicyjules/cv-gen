import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnCVArgs } from "./args/CreateManyAndReturnCVArgs";
import { CV } from "../../../models/CV";
import { CreateManyAndReturnCV } from "../../outputs/CreateManyAndReturnCV";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CV)
export class CreateManyAndReturnCVResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnCV], {
    nullable: false
  })
  async createManyAndReturnCV(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnCVArgs): Promise<CreateManyAndReturnCV[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
