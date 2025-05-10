import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CreateManyAndReturnCVEducationArgs } from "./args/CreateManyAndReturnCVEducationArgs";
import { CreateManyAndReturnCVExperienceArgs } from "./args/CreateManyAndReturnCVExperienceArgs";
import { CreateManyAndReturnCVProjectsArgs } from "./args/CreateManyAndReturnCVProjectsArgs";
import { CreateManyAndReturnCVSkillsArgs } from "./args/CreateManyAndReturnCVSkillsArgs";
import { Education } from "../../models/Education";
import { Experience } from "../../models/Experience";
import { PersonalInformation } from "../../models/PersonalInformation";
import { Project } from "../../models/Project";
import { Skill } from "../../models/Skill";
import { Summary } from "../../models/Summary";

@TypeGraphQL.ObjectType("CreateManyAndReturnCV", {})
export class CreateManyAndReturnCV {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  personalInformationId!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  summaryId!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => PersonalInformation, {
    nullable: false
  })
  personalInformation!: PersonalInformation;

  @TypeGraphQL.Field(_type => Summary, {
    nullable: false
  })
  summary!: Summary;

  experience!: Experience | null;
  education!: Education | null;
  skills!: Skill | null;
  projects!: Project | null;

  @TypeGraphQL.Field(_type => Experience, {
    name: "experience",
    nullable: true
  })
  getExperience(@TypeGraphQL.Root() root: CreateManyAndReturnCV, @TypeGraphQL.Args() args: CreateManyAndReturnCVExperienceArgs): Experience | null {
    return root.experience;
  }

  @TypeGraphQL.Field(_type => Education, {
    name: "education",
    nullable: true
  })
  getEducation(@TypeGraphQL.Root() root: CreateManyAndReturnCV, @TypeGraphQL.Args() args: CreateManyAndReturnCVEducationArgs): Education | null {
    return root.education;
  }

  @TypeGraphQL.Field(_type => Skill, {
    name: "skills",
    nullable: true
  })
  getSkills(@TypeGraphQL.Root() root: CreateManyAndReturnCV, @TypeGraphQL.Args() args: CreateManyAndReturnCVSkillsArgs): Skill | null {
    return root.skills;
  }

  @TypeGraphQL.Field(_type => Project, {
    name: "projects",
    nullable: true
  })
  getProjects(@TypeGraphQL.Root() root: CreateManyAndReturnCV, @TypeGraphQL.Args() args: CreateManyAndReturnCVProjectsArgs): Project | null {
    return root.projects;
  }
}
