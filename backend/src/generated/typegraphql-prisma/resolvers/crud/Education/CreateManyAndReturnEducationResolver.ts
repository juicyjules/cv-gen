import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnEducationArgs } from "./args/CreateManyAndReturnEducationArgs";
import { Education } from "../../../models/Education";
import { CreateManyAndReturnEducation } from "../../outputs/CreateManyAndReturnEducation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Education)
export class CreateManyAndReturnEducationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnEducation], {
    nullable: false
  })
  async createManyAndReturnEducation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnEducationArgs): Promise<CreateManyAndReturnEducation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).education.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
