// backend/src/cv/cv.module.ts
import { Module } from '@nestjs/common';
import { CVService } from './cv.service';
<<<<<<< HEAD
import { CVResolver } from './cv.resolver';

@Module({
  providers: [CVService, CVResolver]
=======
import { PrismaService } from '../prisma/prisma.service'; // Your Prisma service
import {
  CVCrudResolver,
  PersonalInformationCrudResolver,
  ExperienceCrudResolver,
  EducationCrudResolver,
  SummaryCrudResolver,
  SkillCrudResolver,
  // ... other generated resolvers for your models
} from '../generated/typegraphql-prisma'; // Adjust path if necessary

@Module({
  providers: [
    PrismaService,
    CVService, // Keep for custom business logic if needed
    CVCrudResolver,
    PersonalInformationCrudResolver,
    ExperienceCrudResolver,
    EducationCrudResolver,
    SummaryCrudResolver,
    SkillCrudResolver,
    // Your custom CVResolver if it has logic beyond CRUD
    // CVResolver,
  ],
  exports: [CVService],
>>>>>>> c539549 (fixed for now)
})
export class CVModule {}