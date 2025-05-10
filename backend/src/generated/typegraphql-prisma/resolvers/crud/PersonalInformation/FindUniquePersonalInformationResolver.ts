import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePersonalInformationArgs } from "./args/FindUniquePersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class FindUniquePersonalInformationResolver {
  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async personalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
