import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVCreateInput } from "../../../inputs/CVCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCVArgs {
  @TypeGraphQL.Field(_type => CVCreateInput, {
    nullable: false
  })
  data!: CVCreateInput;
}
