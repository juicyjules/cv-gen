import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceCreateManyInput } from "../../../inputs/ExperienceCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnExperienceArgs {
  @TypeGraphQL.Field(_type => [ExperienceCreateManyInput], {
    nullable: false
  })
  data!: ExperienceCreateManyInput[];
}
