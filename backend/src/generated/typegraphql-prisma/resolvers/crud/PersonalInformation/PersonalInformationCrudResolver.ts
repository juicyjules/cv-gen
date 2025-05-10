import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePersonalInformationArgs } from "./args/AggregatePersonalInformationArgs";
import { CreateManyAndReturnPersonalInformationArgs } from "./args/CreateManyAndReturnPersonalInformationArgs";
import { CreateManyPersonalInformationArgs } from "./args/CreateManyPersonalInformationArgs";
import { CreateOnePersonalInformationArgs } from "./args/CreateOnePersonalInformationArgs";
import { DeleteManyPersonalInformationArgs } from "./args/DeleteManyPersonalInformationArgs";
import { DeleteOnePersonalInformationArgs } from "./args/DeleteOnePersonalInformationArgs";
import { FindFirstPersonalInformationArgs } from "./args/FindFirstPersonalInformationArgs";
import { FindFirstPersonalInformationOrThrowArgs } from "./args/FindFirstPersonalInformationOrThrowArgs";
import { FindManyPersonalInformationArgs } from "./args/FindManyPersonalInformationArgs";
import { FindUniquePersonalInformationArgs } from "./args/FindUniquePersonalInformationArgs";
import { FindUniquePersonalInformationOrThrowArgs } from "./args/FindUniquePersonalInformationOrThrowArgs";
import { GroupByPersonalInformationArgs } from "./args/GroupByPersonalInformationArgs";
import { UpdateManyPersonalInformationArgs } from "./args/UpdateManyPersonalInformationArgs";
import { UpdateOnePersonalInformationArgs } from "./args/UpdateOnePersonalInformationArgs";
import { UpsertOnePersonalInformationArgs } from "./args/UpsertOnePersonalInformationArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";
import { PersonalInformation } from "../../../models/PersonalInformation";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregatePersonalInformation } from "../../outputs/AggregatePersonalInformation";
import { CreateManyAndReturnPersonalInformation } from "../../outputs/CreateManyAndReturnPersonalInformation";
import { PersonalInformationGroupBy } from "../../outputs/PersonalInformationGroupBy";

@TypeGraphQL.Resolver(_of => PersonalInformation)
export class PersonalInformationCrudResolver {
  @TypeGraphQL.Query(_returns => AggregatePersonalInformation, {
    nullable: false
  })
  async aggregatePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePersonalInformationArgs): Promise<AggregatePersonalInformation> {
    return getPrismaFromContext(ctx).personalInformation.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async createManyPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyPersonalInformationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.createMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => [CreateManyAndReturnPersonalInformation], {
    nullable: false
  })
  async createManyAndReturnPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateManyAndReturnPersonalInformationArgs): Promise<CreateManyAndReturnPersonalInformation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.createManyAndReturn({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PersonalInformation, {
    nullable: false
  })
  async createOnePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePersonalInformationArgs): Promise<PersonalInformation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteManyPersonalInformationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.deleteMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PersonalInformation, {
    nullable: true
  })
  async deleteOnePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOnePersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async findFirstPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async findFirstPersonalInformationOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPersonalInformationOrThrowArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PersonalInformation], {
    nullable: false
  })
  async personalInformations(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPersonalInformationArgs): Promise<PersonalInformation[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async personalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => PersonalInformation, {
    nullable: true
  })
  async getPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePersonalInformationOrThrowArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Query(_returns => [PersonalInformationGroupBy], {
    nullable: false
  })
  async groupByPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByPersonalInformationArgs): Promise<PersonalInformationGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyPersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateManyPersonalInformationArgs): Promise<AffectedRowsOutput> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.updateMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PersonalInformation, {
    nullable: true
  })
  async updateOnePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOnePersonalInformationArgs): Promise<PersonalInformation | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.Mutation(_returns => PersonalInformation, {
    nullable: false
  })
  async upsertOnePersonalInformation(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOnePersonalInformationArgs): Promise<PersonalInformation> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).personalInformation.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
