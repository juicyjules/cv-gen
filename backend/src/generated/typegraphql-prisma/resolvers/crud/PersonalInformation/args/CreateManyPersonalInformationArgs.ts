import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationCreateManyInput } from "../../../inputs/PersonalInformationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPersonalInformationArgs {
  @TypeGraphQL.Field(_type => [PersonalInformationCreateManyInput], {
    nullable: false
  })
  data!: PersonalInformationCreateManyInput[];
}
