import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SkillWhereInput } from "../../inputs/SkillWhereInput";

@TypeGraphQL.ArgsType()
export class CVCountSkillsArgs {
  @TypeGraphQL.Field(_type => SkillWhereInput, {
    nullable: true
  })
  where?: SkillWhereInput | undefined;
}
