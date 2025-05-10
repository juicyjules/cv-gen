import * as TypeGraphQL from "type-graphql";

export enum EducationScalarFieldEnum {
  id = "id",
  institution = "institution",
  degree = "degree",
  major = "major",
  startDate = "startDate",
  endDate = "endDate",
  description = "description",
  cvId = "cvId"
}
TypeGraphQL.registerEnumType(EducationScalarFieldEnum, {
  name: "EducationScalarFieldEnum",
  description: undefined,
});
