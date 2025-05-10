import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { PersonalInformationCvArgs } from "./args/PersonalInformationCvArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class PersonalInformationRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => CV, {
    nullable: true
  })
  async cv(@TypeGraphQL.Root() personalInformation: PersonalInformation, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PersonalInformationCvArgs): Promise<CV | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUniqueOrThrow({
      where: {
        id: personalInformation.id,
      },
    }).cv({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
