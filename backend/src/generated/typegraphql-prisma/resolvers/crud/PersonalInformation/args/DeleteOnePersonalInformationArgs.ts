import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationWhereUniqueInput } from "../../../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;
}
