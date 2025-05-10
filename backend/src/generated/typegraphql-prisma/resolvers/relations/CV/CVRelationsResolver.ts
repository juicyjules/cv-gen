import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CV } from "../../../models/CV";
import { Education } from "../../../models/Education";
import { Experience } from "../../../models/Experience";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { Project } from "../../../models/Project";
import { Skill } from "../../../models/Skill";
import { Summary } from "../../../models/Summary";
import { CVEducationArgs } from "./args/CVEducationArgs";
import { CVExperienceArgs } from "./args/CVExperienceArgs";
import { CVProjectsArgs } from "./args/CVProjectsArgs";
import { CVSkillsArgs } from "./args/CVSkillsArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => CV)
export class CVRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => PersonalInformation, {
    nullable: false
  })
  async personalInformation(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<PersonalInformation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).personalInformation({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Summary, {
    nullable: false
  })
  async summary(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Summary> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).summary({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Experience], {
    nullable: false
  })
  async experience(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CVExperienceArgs): Promise<Experience[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).experience({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Education], {
    nullable: false
  })
  async education(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CVEducationArgs): Promise<Education[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).education({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Skill], {
    nullable: false
  })
  async skills(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CVSkillsArgs): Promise<Skill[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).skills({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Project], {
    nullable: false
  })
  async projects(@TypeGraphQL.Root() cV: CV, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CVProjectsArgs): Promise<Project[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).cV.findUniqueOrThrow({
      where: {
        id: cV.id,
      },
    }).projects({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
