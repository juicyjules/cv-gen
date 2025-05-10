import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationCreateManyInput } from "../../../inputs/EducationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyEducationArgs {
  @TypeGraphQL.Field(_type => [EducationCreateManyInput], {
    nullable: false
  })
  data!: EducationCreateManyInput[];
}
