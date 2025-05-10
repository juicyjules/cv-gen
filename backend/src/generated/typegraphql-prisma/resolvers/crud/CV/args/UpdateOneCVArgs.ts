import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVUpdateInput } from "../../../inputs/CVUpdateInput";
import { CVWhereUniqueInput } from "../../../inputs/CVWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCVArgs {
  @TypeGraphQL.Field(_type => CVUpdateInput, {
    nullable: false
  })
  data!: CVUpdateInput;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;
}
