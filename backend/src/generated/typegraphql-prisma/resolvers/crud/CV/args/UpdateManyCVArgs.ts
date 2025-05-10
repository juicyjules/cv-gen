import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVUpdateManyMutationInput } from "../../../inputs/CVUpdateManyMutationInput";
import { CVWhereInput } from "../../../inputs/CVWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCVArgs {
  @TypeGraphQL.Field(_type => CVUpdateManyMutationInput, {
    nullable: false
  })
  data!: CVUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;
}
