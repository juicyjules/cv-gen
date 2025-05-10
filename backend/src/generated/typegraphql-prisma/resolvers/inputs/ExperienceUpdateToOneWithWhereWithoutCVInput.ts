import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ExperienceUpdateWithoutCVInput } from "../inputs/ExperienceUpdateWithoutCVInput";
import { ExperienceWhereInput } from "../inputs/ExperienceWhereInput";

@TypeGraphQL.InputType("ExperienceUpdateToOneWithWhereWithoutCVInput", {})
export class ExperienceUpdateToOneWithWhereWithoutCVInput {
  @TypeGraphQL.Field(_type => ExperienceWhereInput, {
    nullable: true
  })
  where?: ExperienceWhereInput | undefined;

  @TypeGraphQL.Field(_type => ExperienceUpdateWithoutCVInput, {
    nullable: false
  })
  data!: ExperienceUpdateWithoutCVInput;
}
