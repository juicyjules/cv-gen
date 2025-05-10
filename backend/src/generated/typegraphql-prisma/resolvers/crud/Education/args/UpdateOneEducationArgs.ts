import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationUpdateInput } from "../../../inputs/EducationUpdateInput";
import { EducationWhereUniqueInput } from "../../../inputs/EducationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEducationArgs {
  @TypeGraphQL.Field(_type => EducationUpdateInput, {
    nullable: false
  })
  data!: EducationUpdateInput;

  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;
}
