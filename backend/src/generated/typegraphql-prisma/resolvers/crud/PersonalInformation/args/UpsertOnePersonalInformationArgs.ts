import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationCreateInput } from "../../../inputs/PersonalInformationCreateInput";
import { PersonalInformationUpdateInput } from "../../../inputs/PersonalInformationUpdateInput";
import { PersonalInformationWhereUniqueInput } from "../../../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: false
  })
  where!: PersonalInformationWhereUniqueInput;

  @TypeGraphQL.Field(_type => PersonalInformationCreateInput, {
    nullable: false
  })
  create!: PersonalInformationCreateInput;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateInput, {
    nullable: false
  })
  update!: PersonalInformationUpdateInput;
}
