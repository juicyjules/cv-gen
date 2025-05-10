import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationOrderByWithAggregationInput } from "../../../inputs/PersonalInformationOrderByWithAggregationInput";
import { PersonalInformationScalarWhereWithAggregatesInput } from "../../../inputs/PersonalInformationScalarWhereWithAggregatesInput";
import { PersonalInformationWhereInput } from "../../../inputs/PersonalInformationWhereInput";
import { PersonalInformationScalarFieldEnum } from "../../../../enums/PersonalInformationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PersonalInformationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PersonalInformationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PersonalInformationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "firstName" | "lastName" | "email" | "phone" | "location" | "linkedinUrl" | "githubUrl" | "personalWebsite">;

  @TypeGraphQL.Field(_type => PersonalInformationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PersonalInformationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
