import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationCreateInput } from "../../../inputs/PersonalInformationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationCreateInput, {
    nullable: false
  })
  data!: PersonalInformationCreateInput;
}
