import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVWhereUniqueInput } from "../../../inputs/CVWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCVOrThrowArgs {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;
}
