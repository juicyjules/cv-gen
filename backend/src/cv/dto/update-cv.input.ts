// backend/src/cv/dto/update-cv.input.ts

import { InputType, Field, ID } from '@nestjs/graphql';
import { CreatePersonalInformationInput, CreateSummaryInput, CreateExperienceInput, CreateEducationInput, CreateSkillInput, CreateProjectInput } from './create-cv.input';

@InputType()
export class UpdatePersonalInformationInput extends CreatePersonalInformationInput {
  // You might add specific update fields here if needed
}

@InputType()
export class UpdateSummaryInput extends CreateSummaryInput {
  // You might add specific update fields here if needed
}

@InputType()
export class UpdateExperienceInput extends CreateExperienceInput {
  // You might add specific update fields here if needed
  @Field({ nullable: true })
  id?: string; // To identify which experience to update
}

@InputType()
export class UpdateEducationInput extends CreateEducationInput {
  // You might add specific update fields here if needed
  @Field({ nullable: true })
  id?: string;
}

@InputType()
export class UpdateSkillInput extends CreateSkillInput {
  // You might add specific update fields here if needed
  @Field({ nullable: true })
  id?: string;
}

@InputType()
export class UpdateProjectInput extends CreateProjectInput {
  // You might add specific update fields here if needed
  @Field({ nullable: true })
  id?: string;
}

@InputType()
export class UpdateCVInput {
  @Field(() => ID)
  id: string;

  @Field({ nullable: true })
  personalInformation?: UpdatePersonalInformationInput;

  @Field({ nullable: true })
  summary?: UpdateSummaryInput;

  @Field(() => [UpdateExperienceInput], { nullable: true })
  experience?: UpdateExperienceInput;

  @Field(() => [UpdateEducationInput], { nullable: true })
  education?: UpdateEducationInput;

  @Field(() => [UpdateSkillInput], { nullable: true })
  skills?: UpdateSkillInput;

  @Field(() => [UpdateProjectInput], { nullable: true })
  projects?: UpdateProjectInput;
}
