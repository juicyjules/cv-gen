import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationOrderByWithAggregationInput } from "../../../inputs/EducationOrderByWithAggregationInput";
import { EducationScalarWhereWithAggregatesInput } from "../../../inputs/EducationScalarWhereWithAggregatesInput";
import { EducationWhereInput } from "../../../inputs/EducationWhereInput";
import { EducationScalarFieldEnum } from "../../../../enums/EducationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByEducationArgs {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: EducationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "institution" | "degree" | "major" | "startDate" | "endDate" | "description" | "cvId">;

  @TypeGraphQL.Field(_type => EducationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: EducationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
