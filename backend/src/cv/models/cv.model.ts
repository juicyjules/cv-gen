// backend/src/cv/models/cv.model.ts

import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class PersonalInformation {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  phone: string;

  @Field()
  location: string;

  @Field({ nullable: true })
  linkedinUrl?: string;

  @Field({ nullable: true })
  githubUrl?: string;

  @Field({ nullable: true })
  personalWebsite?: string;
}

@ObjectType()
export class Summary {
  @Field()
  text: string;
}

@ObjectType()
export class Experience {
  @Field()
  jobTitle: string;

  @Field()
  company: string;

  @Field({ nullable: true })
  location?: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field(() => [String])
  description: string;
}

@ObjectType()
export class Education {
  @Field()
  institution: string;

  @Field()
  degree: string;

  @Field({ nullable: true })
  major?: string;

  @Field()
  startDate: Date;

  @Field({ nullable: true })
  endDate?: Date;

  @Field({ nullable: true })
  description?: string;
}

@ObjectType()
export class Skill {
  @Field()
  name: string;

  @Field({ nullable: true })
  level?: string;
}

@ObjectType()
export class Project {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field(() => [String])
  technologies: string;

  @Field({ nullable: true })
  liveUrl?: string;

  @Field({ nullable: true })
  githubUrl?: string;
}

@ObjectType()
export class CV {
  @Field(() => ID)
  id: string; // You'll likely want an ID for each CV

  @Field()
  personalInformation: PersonalInformation;

  @Field()
  summary: Summary;

  @Field(() => [Experience])
  experience: Experience;

  @Field(() => [Education])
  education: Education;

  @Field(() => [Skill])
  skills: Skill;

  @Field(() => [Project])
  projects: Project;

  // You might want to include a user ID to associate CVs with users
  // @Field(() => ID)
  // userId: string;
}