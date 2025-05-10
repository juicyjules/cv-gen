import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePersonalInformationArgs } from "./args/AggregatePersonalInformationArgs";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { AggregatePersonalInformation } from "../../outputs/AggregatePersonalInformation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class AggregatePersonalInformationResolver {
  @TypeGraphQL.Query(_returns => AggregatePersonalInformation, {
    nullable: false
  })
  async aggregatePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePersonalInformationArgs): Promise<AggregatePersonalInformation> {
    return getPrismaFromContext(ctx).personalInformation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
