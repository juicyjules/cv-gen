import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateManyCVInputEnvelope } from "../inputs/EducationCreateManyCVInputEnvelope";
import { EducationCreateOrConnectWithoutCVInput } from "../inputs/EducationCreateOrConnectWithoutCVInput";
import { EducationCreateWithoutCVInput } from "../inputs/EducationCreateWithoutCVInput";
import { EducationWhereUniqueInput } from "../inputs/EducationWhereUniqueInput";

@TypeGraphQL.InputType("EducationCreateNestedManyWithoutCVInput", {})
export class EducationCreateNestedManyWithoutCVInput {
  @TypeGraphQL.Field(_type => [EducationCreateWithoutCVInput], {
    nullable: true
  })
  create?: EducationCreateWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => [EducationCreateOrConnectWithoutCVInput], {
    nullable: true
  })
  connectOrCreate?: EducationCreateOrConnectWithoutCVInput[] | undefined;

  @TypeGraphQL.Field(_type => EducationCreateManyCVInputEnvelope, {
    nullable: true
  })
  createMany?: EducationCreateManyCVInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [EducationWhereUniqueInput], {
    nullable: true
  })
  connect?: EducationWhereUniqueInput[] | undefined;
}
