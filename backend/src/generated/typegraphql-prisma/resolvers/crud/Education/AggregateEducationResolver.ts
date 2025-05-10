import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateEducationArgs } from "./args/AggregateEducationArgs";
import { Education } from "../../../models/Education";
import { AggregateEducation } from "../../outputs/AggregateEducation";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Education)
export class AggregateEducationResolver {
  @TypeGraphQL.Query(_returns => AggregateEducation, {
    nullable: false
  })
  async aggregateEducation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateEducationArgs): Promise<AggregateEducation> {
    return getPrismaFromContext(ctx).education.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
