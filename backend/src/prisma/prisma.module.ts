import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // Optional: Makes PrismaService available globally without importing PrismaModule everywhere
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // Export PrismaService so other modules can import PrismaModule and use it
})
export class PrismaModule {}