import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutPersonalInformationInput } from "../inputs/CVCreateOrConnectWithoutPersonalInformationInput";
import { CVCreateWithoutPersonalInformationInput } from "../inputs/CVCreateWithoutPersonalInformationInput";
import { CVUpdateToOneWithWhereWithoutPersonalInformationInput } from "../inputs/CVUpdateToOneWithWhereWithoutPersonalInformationInput";
import { CVUpsertWithoutPersonalInformationInput } from "../inputs/CVUpsertWithoutPersonalInformationInput";
import { CVWhereInput } from "../inputs/CVWhereInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneWithoutPersonalInformationNestedInput", {})
export class CVUpdateOneWithoutPersonalInformationNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutPersonalInformationInput, {
    nullable: true
  })
  create?: CVCreateWithoutPersonalInformationInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutPersonalInformationInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutPersonalInformationInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutPersonalInformationInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  disconnect?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereInput, {
    nullable: true
  })
  delete?: CVWhereInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutPersonalInformationInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutPersonalInformationInput | undefined;
}
