import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateOrConnectWithoutCVInput } from "../inputs/EducationCreateOrConnectWithoutCVInput";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationUpdateToOneWithWhereWithoutCVInput } from "../inputs/EducationUpdateToOneWithWhereWithoutCVInput";
import { EducationUpsertWithoutCVInput } from "../inputs/EducationUpsertWithoutCVInput";
import { EducationWhereInput } from "../inputs/EducationWhereInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationUpdateOneWithoutCVNestedInput", {})
export class EducationUpdateOneWithoutCVNestedInput {
  @TypeGraphQL.Field(_type => EducationCreateWithoutCVInput, {
    nullable: true
  })
  create?: EducationCreateWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => EducationCreateOrConnectWithoutCVInput, {
    nullable: true
  })
  connectOrCreate?: EducationCreateOrConnectWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => EducationUpsertWithoutCVInput, {
    nullable: true
  })
  upsert?: EducationUpsertWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  disconnect?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereInput, {
    nullable: true
  })
  delete?: EducationWhereInput | undefined;

  @TypeGraphQL.Field(_type => EducationWhereUniqueInput, {
    nullable: true
  })
  connect?: EducationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => EducationUpdateToOneWithWhereWithoutCVInput, {
    nullable: true
  })
  update?: EducationUpdateToOneWithWhereWithoutCVInput | undefined;
}
