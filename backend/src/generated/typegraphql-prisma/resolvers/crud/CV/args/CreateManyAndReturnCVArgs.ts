import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVCreateManyInput } from "../../../inputs/CVCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnCVArgs {
  @TypeGraphQL.Field(_type => [CVCreateManyInput], {
    nullable: false
  })
  data!: CVCreateManyInput[];
}
