// backend/src/cv/cv.resolver.ts

import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { CVService } from './cv.service';

export class CvResolver {
  constructor(private readonly cvService: CVService) {}

}
