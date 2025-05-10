import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationWhereUniqueInput } from "../../../inputs/EducationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueEducationOrThrowArgs {
  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: false
  })
  where!: EducationWhereUniqueInput;
}
