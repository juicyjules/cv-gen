import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CVCreateOrConnectWithoutExperienceInput } from "../inputs/CVCreateOrConnectWithoutExperienceInput";
import { CVCreateWithoutExperienceInput } from "../inputs/CVCreateWithoutExperienceInput";
import { CVUpdateToOneWithWhereWithoutExperienceInput } from "../inputs/CVUpdateToOneWithWhereWithoutExperienceInput";
import { CVUpsertWithoutExperienceInput } from "../inputs/CVUpsertWithoutExperienceInput";
import { CVWhereUniqueInput } from "../inputs/CVWhereUniqueInput";

@TypeGraphQL.InputType("CVUpdateOneRequiredWithoutExperienceNestedInput", {})
export class CVUpdateOneRequiredWithoutExperienceNestedInput {
  @TypeGraphQL.Field(_type => CVCreateWithoutExperienceInput, {
    nullable: true
  })
  create?: CVCreateWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => CVCreateOrConnectWithoutExperienceInput, {
    nullable: true
  })
  connectOrCreate?: CVCreateOrConnectWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => CVUpsertWithoutExperienceInput, {
    nullable: true
  })
  upsert?: CVUpsertWithoutExperienceInput | undefined;

  @TypeGraphQL.Field(_type => CVWhereUniqueInput, {
    nullable: true
  })
  connect?: CVWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => CVUpdateToOneWithWhereWithoutExperienceInput, {
    nullable: true
  })
  update?: CVUpdateToOneWithWhereWithoutExperienceInput | undefined;
}
