import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ExperienceOrderByWithRelationInput } from "../../../inputs/ExperienceOrderByWithRelationInput";
import { ExperienceWhereInput } from "../../../inputs/ExperienceWhereInput";
import { ExperienceWhereUniqueInput } from "../../../inputs/ExperienceWhereUniqueInput";
import { ExperienceScalarFieldEnum } from "../../../../enums/ExperienceScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class CVExperienceArgs {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ExperienceOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ExperienceOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ExperienceWhereUniqueInput, {
    nullable: true
  })
  cursor?: ExperienceWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ExperienceScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "jobTitle" | "company" | "location" | "startDate" | "endDate" | "description" | "cvId"> | undefined;
}
