import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePersonalInformationOrThrowArgs } from "./args/FindUniquePersonalInformationOrThrowArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class FindUniquePersonalInformationOrThrowResolver {
  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async getPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePersonalInformationOrThrowArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
