import { Test, TestingModule } from '@nestjs/testing';
import { CVResolver } from './cv.resolver';

describe('CvResolver', () => {
  let resolver: CVResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CVResolver],
    }).compile();

    resolver = module.get<CVResolver>(CVResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
