import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillUpdateInput } from "../../../inputs/SkillUpdateInput";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneSkillArgs {
  @TypeGraphQL.Field(_type => SkillUpdateInput, {
    nullable: false
  })
  data!: SkillUpdateInput;

  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: false
  })
  where!: SkillWhereUniqueInput;
}
