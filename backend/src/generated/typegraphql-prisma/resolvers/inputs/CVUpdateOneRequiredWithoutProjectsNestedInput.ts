import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutProjectsInput } from "../inputs/CVCreateOrConnectWithoutProjectsInput";
import { CVCreateWithoutProjectsInput } from "../inputs/CVCreateWithoutProjectsInput";
import { CVUpdateToOneWithWhereWithoutProjectsInput } from "../inputs/CVUpdateToOneWithWhereWithoutProjectsInput";
import { CVUpsertWithoutProjectsInput } from "../inputs/CVUpsertWithoutProjectsInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneRequiredWithoutProjectsNestedInput", {})
export class CVUpdateOneRequiredWithoutProjectsNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutProjectsInput, {
    nullable: true
  })
  create?: CVCreateWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutProjectsInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutProjectsInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutProjectsInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutProjectsInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutProjectsInput | undefined;
}
