import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPersonalInformationOrThrowArgs } from "./args/FindFirstPersonalInformationOrThrowArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class FindFirstPersonalInformationOrThrowResolver {
  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async findFirstPersonalInformationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPersonalInformationOrThrowArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
