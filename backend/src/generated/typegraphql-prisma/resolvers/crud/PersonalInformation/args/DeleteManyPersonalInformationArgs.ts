import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationWhereInput } from "../../../inputs/PersonalInformationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;
}
