import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVCreateInput } from "../../../inputs/CVCreateInput";
import { CVUpdateInput } from "../../../inputs/CVUpdateInput";
import { CVWhereUniqueInput } from "../../../inputs/CVWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCVArgs {
  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: false
  })
  where!: CVWhereUniqueInput;

  @TypeGraphQL.Field(_type => CVCreateInput, {
    nullable: false
  })
  create!: CVCreateInput;

  @TypeGraphQL.Field(_type => CVUpdateInput, {
    nullable: false
  })
  update!: CVUpdateInput;
}
