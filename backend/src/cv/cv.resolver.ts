// backend/src/cv/cv.resolver.ts

import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CvService } from './cv.service';
import { CV } from './models/cv.model';
import { CreateCVInput } from './dto/create-cv.input';
import { UpdateCVInput } from './dto/update-cv.input';

@Resolver(() => CV)
export class CvResolver {
  constructor(private readonly cvService: CvService) {}

  @Mutation(() => CV, { name: 'createCv' })
  create(@Args('createCVInput') createCVInput: CreateCVInput): Promise<CV> {
    return this.cvService.create(createCVInput);
  }

  @Query(() => [CV], { name: 'cvs' })
  findAll(): Promise<CV> {
    return this.cvService.findAll();
  }

  @Query(() => CV, { name: 'cv', nullable: true })
  findOne(@Args('id', { type: () => ID }) id: string): Promise<CV | null> {
    return this.cvService.findOne(id);
  }

  @Mutation(() => CV, { name: 'updateCv' })
  update(@Args('updateCVInput') updateCVInput: UpdateCVInput): Promise<CV> {
    return this.cvService.update(updateCVInput.id, updateCVInput);
  }

  @Mutation(() => CV, { name: 'deleteCv', nullable: true })
  remove(@Args('id', { type: () => ID }) id: string): Promise<CV | null> {
    return this.cvService.remove(id);
  }
}
