// backend/src/cv/dto/create-cv.input.ts

import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonalInformationInput {
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

@InputType()
export class CreateSummaryInput {
  @Field()
  text: string;
}

@InputType()
export class CreateExperienceInput {
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

@InputType()
export class CreateEducationInput {
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

@InputType()
export class CreateSkillInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  level?: string;
}

@InputType()
export class CreateProjectInput {
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

@InputType()
export class CreateCVInput {
  @Field()
  personalInformation: CreatePersonalInformationInput;

  @Field()
  summary: CreateSummaryInput;

  @Field(() => [CreateExperienceInput])
  experience: CreateExperienceInput;

  @Field(() => [CreateEducationInput])
  education: CreateEducationInput;

  @Field(() => [CreateSkillInput])
  skills: CreateSkillInput;

  @Field(() => [CreateProjectInput])
  projects: CreateProjectInput;
}
