import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class CVService {
  async getCVById(id: string) {
    return prisma.cV.findUnique({
      where: { id },
      include: {
        personalInformation: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
      },
    });
  }

  async getAllCVs() {
    return prisma.cV.findMany({
      include: {
        personalInformation: true,
        summary: true,
        experience: true,
        education: true,
        skills: true,
        projects: true,
      },
    });
  }
}