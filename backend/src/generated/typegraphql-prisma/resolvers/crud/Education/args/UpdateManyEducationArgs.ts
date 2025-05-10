import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationUpdateManyMutationInput } from "../../../inputs/EducationUpdateManyMutationInput";
import { EducationWhereInput } from "../../../inputs/EducationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyEducationArgs {
  @TypeGraphQL.Field(_type => EducationUpdateManyMutationInput, {
    nullable: false
  })
  data!: EducationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;
}
