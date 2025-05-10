import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateManyAndReturnPersonalInformationArgs } from "./args/CreateManyAndReturnPersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { CreateManyAndReturnPersonalInformation } from "../../outputs/CreateManyAndReturnPersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class CreateManyAndReturnPersonalInformationResolver {
  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPersonalInformation], {
    nullable: false
  })
  async createManyAndReturnPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPersonalInformationArgs): Promise<CreateManyAndReturnPersonalInformation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
