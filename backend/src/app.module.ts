// backend/src/app.module.ts

import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
<<<<<<< HEAD
import { CvModule } from './cv/cv.module'; // Import CvModule
import { AppController } from './app.controller';


=======
import { PrismaService } from './prisma/prisma.service';
import { CVModule } from './cv/cv.module'; // Import CvModule
import { AppController } from './app.controller';
import { AppService } from './app.service';
>>>>>>> c539549 (fixed for now)
@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'schema.gql',
      playground: true,
      debug: true,
    }),
    CVModule, // Add CvModule to imports
  ],
<<<<<<< HEAD
  controllers:[],
  providers: [],
=======
  controllers:[AppController],
  providers: [PrismaService, AppService],
>>>>>>> c539549 (fixed for now)
})
export class AppModule {}