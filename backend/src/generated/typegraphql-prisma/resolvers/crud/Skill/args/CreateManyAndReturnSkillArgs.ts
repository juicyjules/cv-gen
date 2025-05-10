import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillCreateManyInput } from "../../../inputs/SkillCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnSkillArgs {
  @TypeGraphQL.Field(_type => [SkillCreateManyInput], {
    nullable: false
  })
  data!: SkillCreateManyInput[];
}
