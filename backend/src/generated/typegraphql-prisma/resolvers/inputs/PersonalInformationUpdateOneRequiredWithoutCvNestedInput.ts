import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonalInformationCreateOrConnectWithoutCvInput } from "../inputs/PersonalInformationCreateOrConnectWithoutCvInput";
import { PersonalInformationCreateWithoutCvInput } from "../inputs/PersonalInformationCreateWithoutCvInput";
import { PersonalInformationUpdateToOneWithWhereWithoutCvInput } from "../inputs/PersonalInformationUpdateToOneWithWhereWithoutCvInput";
import { PersonalInformationUpsertWithoutCvInput } from "../inputs/PersonalInformationUpsertWithoutCvInput";
import { PersonalInformationWhereUniqueInput } from "../inputs/PersonalInformationWhereUniqueInput";

@TypeGraphQL.InputType("PersonalInformationUpdateOneRequiredWithoutCvNestedInput", {})
export class PersonalInformationUpdateOneRequiredWithoutCvNestedInput {
  @TypeGraphQL.Field(_type => PersonalInformationCreateWithoutCvInput, {
    nullable: true
  })
  create?: PersonalInformationCreateWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateOrConnectWithoutCvInput, {
    nullable: true
  })
  connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpsertWithoutCvInput, {
    nullable: true
  })
  upsert?: PersonalInformationUpsertWithoutCvInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationWhereUniqueInput, {
    nullable: true
  })
  connect?: PersonalInformationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationUpdateToOneWithWhereWithoutCvInput, {
    nullable: true
  })
  update?: PersonalInformationUpdateToOneWithWhereWithoutCvInput | undefined;
}
