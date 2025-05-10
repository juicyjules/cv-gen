import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillCreateInput } from "../../../inputs/SkillCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillCreateInput, {
    nullable: false
  })
  data!: SkillCreateInput;
}
