import * as TypeGraphQL from "type-graphql";

export enum CVScalarFieldEnum {
  id = "id",
  personalInformationId = "personalInformationId",
  summaryId = "summaryId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(CVScalarFieldEnum, {
  name: "CVScalarFieldEnum",
  description: undefined,
});
