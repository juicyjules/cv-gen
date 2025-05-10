import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationCreateInput } from "../../../inputs/EducationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneEducationArgs {
  @TypeGraphQL.Field(_type => EducationCreateInput, {
    nullable: false
  })
  data!: EducationCreateInput;
}
