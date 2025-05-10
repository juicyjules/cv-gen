import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CVOrderByWithAggregationInput } from "../../../inputs/CVOrderByWithAggregationInput";
import { CVScalarWhereWithAggregatesInput } from "../../../inputs/CVScalarWhereWithAggregatesInput";
import { CVWhereInput } from "../../../inputs/CVWhereInput";
import { CVScalarFieldEnum } from "../../../../enums/CVScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByCVArgs {
  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  where?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => [CVOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: CVOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [CVScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "personalInformationId" | "summaryId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => CVScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: CVScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
