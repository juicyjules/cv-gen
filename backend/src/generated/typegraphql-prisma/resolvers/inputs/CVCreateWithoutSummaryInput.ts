import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { EducationCreateNestedManyWithoutCVInput } from "../inputs/EducationCreateNestedManyWithoutCVInput";
import { ExperienceCreateNestedManyWithoutCVInput } from "../inputs/ExperienceCreateNestedManyWithoutCVInput";
import { PersonalInformationCreateNestedOneWithoutCvsInput } from "../inputs/PersonalInformationCreateNestedOneWithoutCvsInput";
import { ProjectCreateNestedManyWithoutCVInput } from "../inputs/ProjectCreateNestedManyWithoutCVInput";
import { SkillCreateNestedManyWithoutCVInput } from "../inputs/SkillCreateNestedManyWithoutCVInput";

@TypeGraphQL.InputType("CVCreateWithoutSummaryInput", {})
export class CVCreateWithoutSummaryInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => PersonalInformationCreateNestedOneWithoutCvsInput, {
    nullable: false
  })
  personalInformation!: PersonalInformationCreateNestedOneWithoutCvsInput;

  @TypeGraphQL.Field(_type => ExperienceCreateNestedManyWithoutCVInput, {
    nullable: true
  })
  experience?: ExperienceCreateNestedManyWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => EducationCreateNestedManyWithoutCVInput, {
    nullable: true
  })
  education?: EducationCreateNestedManyWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => SkillCreateNestedManyWithoutCVInput, {
    nullable: true
  })
  skills?: SkillCreateNestedManyWithoutCVInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedManyWithoutCVInput, {
    nullable: true
  })
  projects?: ProjectCreateNestedManyWithoutCVInput | undefined;
}
