import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationWhereUniqueInput } from "../../../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePersonalInformationOrThrowArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;
}
