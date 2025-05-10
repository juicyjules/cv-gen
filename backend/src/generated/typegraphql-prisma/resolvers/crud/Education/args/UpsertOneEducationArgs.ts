import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationCreateInput } from "../../../inputs/EducationCreateInput";
import { EducationUpdateInput } from "../../../inputs/EducationUpdateInput";
import { EducationWhereUniqueInput } from "../../../inputs/EducationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneEducationArgs {
  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;

  @TypeGraphQL.Field(_type => EducationCreateInput, {
    nullable: false
  })
  create!: EducationCreateInput;

  @TypeGraphQL.Field(_type => EducationUpdateInput, {
    nullable: false
  })
  update!: EducationUpdateInput;
}
