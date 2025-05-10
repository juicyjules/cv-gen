import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationUpdateInput } from "../../../inputs/PersonalInformationUpdateInput";
import { PersonalInformationWhereUniqueInput } from "../../../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationUpdateInput, {
    nullable: false
  })
  data!: PersonalInformationUpdateInput;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;
}
