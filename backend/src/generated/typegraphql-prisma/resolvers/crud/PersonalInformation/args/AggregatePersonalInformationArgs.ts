import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PersonalInformationOrderByWithRelationInput } from "../../../inputs/PersonalInformationOrderByWithRelationInput";
import { PersonalInformationWhereInput } from "../../../inputs/PersonalInformationWhereInput";
import { PersonalInformationWhereUniqueInput } from "../../../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePersonalInformationArgs {
  @TypeGraphQL.Field(_type => PersonalInformationWhereInput, {
    nullable: true
  })
  where?: PersonalInformationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PersonalInformationOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: PersonalInformationOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  cursor?: PersonalInformationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
