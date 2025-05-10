import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCountEducationArgs } from "./args/CVCountEducationArgs";
import { CVCountExperienceArgs } from "./args/CVCountExperienceArgs";
import { CVCountProjectsArgs } from "./args/CVCountProjectsArgs";
import { CVCountSkillsArgs } from "./args/CVCountSkillsArgs";

@TypeGraphQL.ObjectType("CVCount", {})
export class CVCount {
  experience!: number;
  education!: number;
  skills!: number;
  projects!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "experience",
    nullable: false
  })
  getExperience(@TypeGraphQL.Root() root: CVCount, @TypeGraphQL.Args() args: CVCountExperienceArgs): number {
    return root.experience;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "education",
    nullable: false
  })
  getEducation(@TypeGraphQL.Root() root: CVCount, @TypeGraphQL.Args() args: CVCountEducationArgs): number {
    return root.education;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "skills",
    nullable: false
  })
  getSkills(@TypeGraphQL.Root() root: CVCount, @TypeGraphQL.Args() args: CVCountSkillsArgs): number {
    return root.skills;
  }

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "projects",
    nullable: false
  })
  getProjects(@TypeGraphQL.Root() root: CVCount, @TypeGraphQL.Args() args: CVCountProjectsArgs): number {
    return root.projects;
  }
}
