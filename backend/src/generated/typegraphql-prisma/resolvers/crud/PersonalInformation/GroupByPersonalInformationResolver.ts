import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByPersonalInformationArgs } from "./args/GroupByPersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { PersonalInformationGroupBy } from "../../outputs/PersonalInformationGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class GroupByPersonalInformationResolver {
  @TypeGraphQL.Query(_returns => [PersonalInformationGroupBy], {
    nullable: false
  })
  async groupByPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPersonalInformationArgs): Promise<PersonalInformationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
