<<<<<<< HEAD
import { CVService } from './cv.service';
import { Prisma } from 'src/generated/prisma/client'
import { Resolver, Query, Args, Mutation, ResolveField, Parent } from '@nestjs/graphql'; // Import the Resolver decorator
import { CV } from './models/cv.model';
import { CreateCVInput } from './dto/create-cv.input';

@Resolver(() => CV) // Add the Resolver decorator here
export class CVResolver {
  constructor(
    private cvService: CVService
  ) {}
  @Query(() => CV)
  async cv(@Args('id') id: string) {
    return this.cvService.getCVById(id);
  }
  @Mutation(() => CV)
  async createCV(@Args('createCVInput') createCVInput: Prisma.CVCreateInput) {
    
    return this.cvService.createCV(createCVInput);
  }
  @Mutation(() => CV)
  async createPersonalInformation(@Args('personalInformationInput') personalInformationInput: Prisma.PersonalInformationCreateInput) {
    
    return this.cvService.createPersonalData(personalInformationInput);
  }
  @ResolveField()
  async skills(@Parent() cv: CV){
    const { id } = cv;
    return (await this.cvService.Skills(id)).skills
  }
}
=======
// backend/src/cv/cv.resolver.ts

import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CVService } from './cv.service';

export class CvResolver {
  constructor(private readonly cvService: CVService) {}

}
>>>>>>> c539549 (fixed for now)
