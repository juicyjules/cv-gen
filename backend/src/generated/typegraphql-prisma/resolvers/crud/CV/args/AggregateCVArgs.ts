import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVOrderByWithRelationInput } from "../../../inputs/CVOrderByWithRelationInput";
import { CVWhereInput } from "../../../inputs/CVWhereInput";
import { CVWhereUniqueInput } from "../../../inputs/CVWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateCVArgs {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CVOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: CVOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  cursor?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
