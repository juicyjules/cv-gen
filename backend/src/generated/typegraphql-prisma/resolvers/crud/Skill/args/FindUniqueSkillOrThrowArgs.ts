import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillWhereUniqueInput } from "../../../inputs/SkillWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueSkillOrThrowArgs {
  @TypeGraphQL.Field(_type => SkillWhereUniqueInput, {
    nullable: false
  })
  where!: SkillWhereUniqueInput;
}
