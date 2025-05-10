import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { PersonalInformationCVArgs } from "./args/PersonalInformationCVArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class PersonalInformationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CV, {
    nullable: true
  })
  async CV(@TypeGraphQL.Root() personalInformation: PersonalInformation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PersonalInformationCVArgs): Promise<CV | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUniqueOrThrow({
      where: {
        id: personalInformation.id,
      },
    }).CV({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
