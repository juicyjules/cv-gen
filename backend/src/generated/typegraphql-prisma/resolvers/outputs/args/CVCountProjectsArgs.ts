import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ProjectWhereInput } from "../../inputs/ProjectWhereInput";

@TypeGraphQL.ArgsType()
export class CVCountProjectsArgs {
  @TypeGraphQL.Field(_type => ProjectWhereInput, {
    nullable: true
  })
  where?: ProjectWhereInput | undefined;
}
