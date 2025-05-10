import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVWhereInput } from "../../../inputs/CVWhereInput";

@TypeGraphQL.ArgsType()
export class PersonalInformationCvArgs {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
