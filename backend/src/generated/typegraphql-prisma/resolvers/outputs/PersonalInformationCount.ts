import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCountCvsArgs } from "./args/PersonalInformationCountCvsArgs";

@TypeGraphQL.ObjectType("PersonalInformationCount", {})
export class PersonalInformationCount {
  cvs!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    name: "cvs",
    nullable: false
  })
  getCvs(@TypeGraphQL.Root() root: PersonalInformationCount, @TypeGraphQL.Args() args: PersonalInformationCountCvsArgs): number {
    return root.cvs;
  }
}
