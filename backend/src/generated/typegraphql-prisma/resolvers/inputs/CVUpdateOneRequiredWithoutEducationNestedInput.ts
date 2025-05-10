import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutEducationInput } from "../inputs/CVCreateOrConnectWithoutEducationInput";
import { CVCreateWithoutEducationInput } from "../inputs/CVCreateWithoutEducationInput";
import { CVUpdateToOneWithWhereWithoutEducationInput } from "../inputs/CVUpdateToOneWithWhereWithoutEducationInput";
import { CVUpsertWithoutEducationInput } from "../inputs/CVUpsertWithoutEducationInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneRequiredWithoutEducationNestedInput", {})
export class CVUpdateOneRequiredWithoutEducationNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutEducationInput, {
    nullable: true
  })
  create?: CVCreateWithoutEducationInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutEducationInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutEducationInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutEducationInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutEducationInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutEducationInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutEducationInput | undefined;
}
