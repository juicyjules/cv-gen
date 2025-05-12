import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateOrConnectWithoutCvsInput } from "../inputs/PersonalInformationCreateOrConnectWithoutCvsInput";
import { PersonalInformationCreateWithoutCvsInput } from "../inputs/PersonalInformationCreateWithoutCvsInput";
import { PersonalInformationUpdateToOneWithWhereWithoutCvsInput } from "../inputs/PersonalInformationUpdateToOneWithWhereWithoutCvsInput";
import { PersonalInformationUpsertWithoutCvsInput } from "../inputs/PersonalInformationUpsertWithoutCvsInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationUpdateOneRequiredWithoutCvsNestedInput", {})
export class PersonalInformationUpdateOneRequiredWithoutCvsNestedInput {
  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvsInput, {
    nullable: true
  })
  create?: PersonalInformationCreateWithoutCvsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateOrConnectWithoutCvsInput, {
    nullable: true
  })
  connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpsertWithoutCvsInput, {
    nullable: true
  })
  upsert?: PersonalInformationUpsertWithoutCvsInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonalInformationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateToOneWithWhereWithoutCvsInput, {
    nullable: true
  })
  update?: PersonalInformationUpdateToOneWithWhereWithoutCvsInput | undefined;
}
