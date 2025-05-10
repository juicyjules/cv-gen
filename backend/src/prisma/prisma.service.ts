import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
// Adjust the import path based on where your Prisma Client is generated.
// This path assumes your schema.prisma's client generator output is set to '../src/generated/prisma/client'
// and this prisma.service.ts file is in 'backend/src/prisma/'.
import { PrismaClient } from '../generated/prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    // You can pass Prisma Client constructor options here if needed, e.g., logging configuration.
    // https://www.prisma.io/docs/orm/reference/prisma-client-reference#constructor
    super({
      // log: ['query', 'info', 'warn', 'error'], // Example: Enable query logging
    });
  }

  async onModuleInit() {
    // This lifecycle hook is called once the host module has been initialized.
    // It's a good place to connect to the database.
    await this.$connect();
    console.log('PrismaClient connected to the database.');
  }

  async onModuleDestroy() {
    // This lifecycle hook is called after a termination signal (e.g., SIGTERM) has been received.
    // It's a good place to gracefully disconnect from the database.
    await this.$disconnect();
    console.log('PrismaClient disconnected from the database.');
  }

  // You can add custom methods here if you need to extend PrismaClient's functionality
  // or provide utility methods related to Prisma. For example, a method for
  // handling transactions if you find yourself repeating that logic often.
  // However, for most direct database interactions, you'll use the methods
  // inherited from PrismaClient (e.g., this.user.create(), this.cv.findMany()).
}