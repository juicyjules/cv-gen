import { Prisma, PrismaClient } from 'src/generated/prisma/client';
import { create } from 'domain';

const prisma = new PrismaClient();

@Injectable()
export class CVService {
  constructor(private readonly prisma: PrismaService) {}
}
