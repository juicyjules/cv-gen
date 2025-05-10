import { Prisma, PrismaClient } from 'src/generated/prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

<<<<<<< HEAD
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
  async createCV(createCVInput: Prisma.CVCreateInput) {  
    return prisma.cV.create({data : createCVInput});
  }
  async createPersonalData(createPersonalDataInput: Prisma.PersonalInformationCreateInput) {
    return prisma.personalInformation.create({data : createPersonalDataInput})
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
  async Skills(id: string) {
    return prisma.cV.findUnique({
      where: { id },
      include: {
        personalInformation: false,
        summary: false,
        experience: false,
        education: false,
        skills: true,
        projects: false,
      },
    });
  }
}
=======
@Injectable()
export class CVService {
  constructor(private readonly prisma: PrismaService) {}
}
>>>>>>> c539549 (fixed for now)
