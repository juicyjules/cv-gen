import { Module } from '@nestjs/common';
import { CVService } from './cv.service';
import { CVResolver } from './cv.resolver';

@Module({
  providers: [CVService, CVResolver]
})
export class CvModule {}
