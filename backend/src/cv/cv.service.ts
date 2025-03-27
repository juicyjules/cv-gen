// backend/src/cv/cv.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCVInput } from './dto/create-cv.input';
import { UpdateCVInput } from './dto/update-cv.input';
import { CV } from './models/cv.model';

@Injectable()
export class CvService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCVInput: CreateCVInput): Promise<CV> {
    const { personalInformation, summary, experience, education, skills, projects } = createCVInput;
    return this.prisma.cV.create({
      data: {
        personalInformation: { create: personalInformation },
        summary: { create: summary },
        experience: { createMany: { data: experience } },
        education: { createMany: { data: education } },
        skills: { createMany: { data: skills } },
        projects: { createMany: { data: projects } },
      },
      include: { personalInformation: true, summary: true, experience: true, education: true, skills: true, projects: true },
    });
  }

  async findAll(): Promise<CV> {
    return this.prisma.cV.findMany({
      include: { personalInformation: true, summary: true, experience: true, education: true, skills: true, projects: true },
    });
  }

  async findOne(id: string): Promise<CV | null> {
    return this.prisma.cV.findUnique({
      where: { id },
      include: { personalInformation: true, summary: true, experience: true, education: true, skills: true, projects: true },
    });
  }

  async update(id: string, updateCVInput: UpdateCVInput): Promise<CV> {
    const { personalInformation, summary, experience, education, skills, projects } = updateCVInput;
    return this.prisma.cV.update({
      where: { id },
      data: {
        personalInformation: personalInformation ? { update: personalInformation } : undefined,
        summary: summary ? { update: summary } : undefined,
        experience: experience ? { deleteMany: {}, createMany: { data: experience } } : undefined,
        education: education ? { deleteMany: {}, createMany: { data: education } } : undefined,
        skills: skills ? { deleteMany: {}, createMany: { data: skills } } : undefined,
        projects: projects ? { deleteMany: {}, createMany: { data: projects } } : undefined,
      },
      include: { personalInformation: true, summary: true, experience: true, education: true, skills: true, projects: true },
    });
  }

  async remove(id: string): Promise<CV | null> {
    return this.prisma.cV.delete({
      where: { id },
      include: { personalInformation: true, summary: true, experience: true, education: true, skills: true, projects: true },
    });
  }
}
