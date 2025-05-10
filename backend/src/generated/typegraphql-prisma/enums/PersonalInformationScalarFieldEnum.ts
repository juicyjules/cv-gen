import * as TypeGraphQL from "type-graphql";

export enum PersonalInformationScalarFieldEnum {
  id = "id",
  firstName = "firstName",
  lastName = "lastName",
  email = "email",
  phone = "phone",
  location = "location",
  linkedinUrl = "linkedinUrl",
  githubUrl = "githubUrl",
  personalWebsite = "personalWebsite",
  personalInformationId = "personalInformationId"
}
TypeGraphQL.registerEnumType(PersonalInformationScalarFieldEnum, {
  name: "PersonalInformationScalarFieldEnum",
  description: undefined,
});
