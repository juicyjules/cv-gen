// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaService } from './prisma/prisma.service';
import { CvModule } from './cv/cv.module'; // Import CvModule
import { AppController } from './app.controller';
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
      debug: true,
    }),
    CvModule, // Add CvModule to imports
  ],
  controllers:[AppController],
  providers: [PrismaService],
})
export class AppModule {}