import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPersonalInformationArgs } from "./args/FindManyPersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class FindManyPersonalInformationResolver {
  @TypeGraphQL.Query(_returns => [PersonalInformation], {
    nullable: false
  })
  async personalInformations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPersonalInformationArgs): Promise<PersonalInformation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
