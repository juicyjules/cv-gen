import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOnePersonalInformationArgs } from "./args/DeleteOnePersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class DeleteOnePersonalInformationResolver {
  @TypeGraphQL.Mutation(_returns => PersonalInformation, {
    nullable: true
  })
  async deleteOnePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
