import * as TypeGraphQL from "type-graphql";

export enum SkillScalarFieldEnum {
  id = "id",
  name = "name",
  level = "level",
  cvId = "cvId"
}
TypeGraphQL.registerEnumType(SkillScalarFieldEnum, {
  name: "SkillScalarFieldEnum",
  description: undefined,
});
