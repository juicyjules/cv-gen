import { CVService } from './cv.service';
import { CreateCVInput } from './dto/create-cv.input'; // Adjust the import path
import { UpdateCVInput } from './dto/update-cv.input'; // Adjust the import path
import { Resolver, Query, Args } from '@nestjs/graphql'; // Import the Resolver decorator
import { CV } from './models/cv.model';

@Resolver(() => CV) // Add the Resolver decorator here
export class CVResolver {
  constructor(
    private cvService: CVService
  ) {}
  @Query(() => CV)
  async cv(@Args('id') id: string) {
    return this.cvService.getCVById(id);
  }
}