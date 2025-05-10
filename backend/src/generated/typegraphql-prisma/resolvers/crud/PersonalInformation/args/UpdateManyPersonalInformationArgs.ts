import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationUpdateManyMutationInput } from "../../../inputs/PersonalInformationUpdateManyMutationInput";
import { PersonalInformationWhereInput } from "../../../inputs/PersonalInformationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationUpdateManyMutationInput, {
    nullable: false
  })
  data!: PersonalInformationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;
}
