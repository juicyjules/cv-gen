import * as TypeGraphQL from "type-graphql";

export enum SummaryScalarFieldEnum {
  id = "id",
  text = "text",
  summaryId = "summaryId"
}
TypeGraphQL.registerEnumType(SummaryScalarFieldEnum, {
  name: "SummaryScalarFieldEnum",
  description: undefined,
});
