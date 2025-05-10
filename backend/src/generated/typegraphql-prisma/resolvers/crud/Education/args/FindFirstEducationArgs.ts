import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationOrderByWithRelationInput } from "../../../inputs/EducationOrderByWithRelationInput";
import { EducationWhereInput } from "../../../inputs/EducationWhereInput";
import { EducationWhereUniqueInput } from "../../../inputs/EducationWhereUniqueInput";
import { EducationScalarFieldEnum } from "../../../../enums/EducationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstEducationArgs {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [EducationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: EducationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: true
  })
  cursor?: EducationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [EducationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "institution" | "degree" | "major" | "startDate" | "endDate" | "description" | "cvId"> | undefined;
}
