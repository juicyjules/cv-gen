import * as TypeGraphQL from "type-graphql";

export enum ProjectScalarFieldEnum {
  id = "id",
  name = "name",
  description = "description",
  technologies = "technologies",
  liveUrl = "liveUrl",
  githubUrl = "githubUrl",
  cvId = "cvId"
}
TypeGraphQL.registerEnumType(ProjectScalarFieldEnum, {
  name: "ProjectScalarFieldEnum",
  description: undefined,
});
