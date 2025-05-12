import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { PersonalInformationCvsArgs } from "./args/PersonalInformationCvsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class PersonalInformationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [CV], {
    nullable: false
  })
  async cvs(@TypeGraphQL.Root() personalInformation: PersonalInformation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PersonalInformationCvsArgs): Promise<CV[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUniqueOrThrow({
      where: {
        id: personalInformation.id,
      },
    }).cvs({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
