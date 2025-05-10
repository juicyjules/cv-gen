import * as TypeGraphQL from "type-graphql";

export enum ExperienceScalarFieldEnum {
  id = "id",
  jobTitle = "jobTitle",
  company = "company",
  location = "location",
  startDate = "startDate",
  endDate = "endDate",
  description = "description",
  cvId = "cvId"
}
TypeGraphQL.registerEnumType(ExperienceScalarFieldEnum, {
  name: "ExperienceScalarFieldEnum",
  description: undefined,
});
