import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EducationWhereInput } from "../../../inputs/EducationWhereInput";

@TypeGraphQL.ArgsType()
export class CVEducationArgs {
  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  where?: EducationWhereInput | undefined;
}
