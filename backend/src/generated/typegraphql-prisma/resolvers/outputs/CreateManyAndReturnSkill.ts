import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CV } from "../../models/CV";

@TypeGraphQL.ObjectType("CreateManyAndReturnSkill", {})
export class CreateManyAndReturnSkill {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  level!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  cvId!: string;

  @TypeGraphQL.Field(_type => CV, {
    nullable: false
  })
  CV!: CV;
}
