// backend/src/cv/cv.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Your injectable PrismaService
import {
  CV,
  Prisma,
  PersonalInformation,
  Summary,
  Experience,
  Education,
  Skill,
} from '../generated/prisma/client'; // Correct path to your Prisma Client generated types

@Injectable()
export class CVService {
  constructor(private prisma: PrismaService) {}

  /**
   * Creates a new CV.
   * This might be called by a custom resolver or if the generated CreateOneCvArgs
   * is passed directly from a generated resolver that delegates to this service.
   */
  async createCV(data: Prisma.CVCreateInput): Promise<CV> {
    // Add any custom validation or pre-processing logic here
    return this.prisma.cV.create({
      data,
      // Optionally include relations if you want them returned after creation
      include: {
        personalInformation: true,
        summary: true,
        experiences: true,
        educations: true,
        skills: true,
      },
    });
  }

  /**
   * Finds all CVs.
   * Could have pagination, filtering, sorting arguments.
   */
  async findAllCVs(params?: {
    skip?: number;
    take?: number;
    cursor?: Prisma.CVCursorUniqueInput;
    where?: Prisma.CVWhereInput;
    orderBy?: Prisma.CVOrderByWithRelationInput;
  }): Promise<CV[]> {
    const { skip, take, cursor, where, orderBy } = params || {};
    return this.prisma.cV.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      include: {
        // Example: only include personalInformation and summary in the list view
        personalInformation: true,
        summary: true,
        // User relation if applicable
        // user: true,
      },
    });
  }

  /**
   * Finds a single CV by its ID.
   * Throws NotFoundException if the CV isn't found.
   */
  async findOneCV(
    cvWhereUniqueInput: Prisma.CVWhereUniqueInput,
  ): Promise<CV | null> {
    const cv = await this.prisma.cV.findUnique({
      where: cvWhereUniqueInput,
      include: {
        personalInformation: true,
        summary: true,
        experiences: true,
        educations: true,
        skills: true,
        // user: true, // Include the user if there's a relation
      },
    });
    if (!cv) {
      throw new NotFoundException(
        `CV with ID ${cvWhereUniqueInput.id} not found`,
      );
    }
    return cv;
  }

  /**
   * Updates an existing CV.
   */
  async updateCV(params: {
    where: Prisma.CVWhereUniqueInput;
    data: Prisma.CVUpdateInput;
  }): Promise<CV> {
    const { where, data } = params;
    // Add any custom validation or pre-processing logic here
    try {
      return await this.prisma.cV.update({
        where,
        data,
        include: {
          personalInformation: true,
          summary: true,
          experiences: true,
          educations: true,
          skills: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025' // Record to update not found
      ) {
        throw new NotFoundException(`CV with ID ${where.id} not found for update`);
      }
      throw error;
    }
  }

  /**
   * Deletes a CV.
   */
  async deleteCV(where: Prisma.CVWhereUniqueInput): Promise<CV> {
    try {
      return await this.prisma.cV.delete({
        where,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025' // Record to delete not found
      ) {
        throw new NotFoundException(`CV with ID ${where.id} not found for deletion`);
      }
      throw error;
    }
  }

  // --- Example of managing related entities (PersonalInformation) ---
  // Note: Often, creating/updating related entities like PersonalInformation
  // can be done through nested writes when creating/updating a CV,
  // if your Prisma schema and GraphQL inputs are set up for it.
  // e.g., prisma.cV.create({ data: { title: "...", personalInformation: { create: { ... } } } })

  async createOrUpdatePersonalInformation(
    cvId: string,
    data: Prisma.PersonalInformationUncheckedCreateInput | Prisma.PersonalInformationUncheckedUpdateInput, // Or more specific types
  ): Promise<PersonalInformation> {
    // This assumes PersonalInformation has a unique relation to CV (e.g., a unique cvId field)
    // or you might fetch the CV first to ensure it exists.
    const cvExists = await this.prisma.cV.findUnique({ where: { id: cvId } });
    if (!cvExists) {
      throw new NotFoundException(`CV with ID ${cvId} not found.`);
    }

    // Upsert is useful here: create if not exists, update if it does.
    // This requires a unique constraint on the relation in PersonalInformation table (e.g. cvId)
    return this.prisma.personalInformation.upsert({
      where: { cvId: cvId }, // Assuming PersonalInformation has a unique cvId field
      create: { ...data, cvId: cvId } as Prisma.PersonalInformationCreateInput, // Cast if types differ slightly
      update: data as Prisma.PersonalInformationUpdateInput, // Cast if types differ slightly
      include: {
        cv: true, // Optionally include the CV it's linked to
      },
    });
  }

  // You could add similar service methods for Experience, Education, Skill, Summary
  // For example: addExperienceToCV, updateExperience, removeExperienceFromCV, etc.
  // These would typically take a cvId and the data for the experience.

  /**
   * Custom business logic example:
   * Get a count of all CVs for a specific user (if you have a user relation).
   */
  // async countCVsForUser(userId: string): Promise<number> {
  //   return this.prisma.cV.count({
  //     where: { userId: userId },
  //   });
  // }
}