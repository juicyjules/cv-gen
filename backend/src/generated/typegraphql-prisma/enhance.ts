import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  CV: crudResolvers.CVCrudResolver,
  PersonalInformation: crudResolvers.PersonalInformationCrudResolver,
  Summary: crudResolvers.SummaryCrudResolver,
  Experience: crudResolvers.ExperienceCrudResolver,
  Education: crudResolvers.EducationCrudResolver,
  Skill: crudResolvers.SkillCrudResolver,
  Project: crudResolvers.ProjectCrudResolver
};
const actionResolversMap = {
  CV: {
    aggregateCV: actionResolvers.AggregateCVResolver,
    createManyCV: actionResolvers.CreateManyCVResolver,
    createManyAndReturnCV: actionResolvers.CreateManyAndReturnCVResolver,
    createOneCV: actionResolvers.CreateOneCVResolver,
    deleteManyCV: actionResolvers.DeleteManyCVResolver,
    deleteOneCV: actionResolvers.DeleteOneCVResolver,
    findFirstCV: actionResolvers.FindFirstCVResolver,
    findFirstCVOrThrow: actionResolvers.FindFirstCVOrThrowResolver,
    cVS: actionResolvers.FindManyCVResolver,
    cV: actionResolvers.FindUniqueCVResolver,
    getCV: actionResolvers.FindUniqueCVOrThrowResolver,
    groupByCV: actionResolvers.GroupByCVResolver,
    updateManyCV: actionResolvers.UpdateManyCVResolver,
    updateOneCV: actionResolvers.UpdateOneCVResolver,
    upsertOneCV: actionResolvers.UpsertOneCVResolver
  },
  PersonalInformation: {
    aggregatePersonalInformation: actionResolvers.AggregatePersonalInformationResolver,
    createManyPersonalInformation: actionResolvers.CreateManyPersonalInformationResolver,
    createManyAndReturnPersonalInformation: actionResolvers.CreateManyAndReturnPersonalInformationResolver,
    createOnePersonalInformation: actionResolvers.CreateOnePersonalInformationResolver,
    deleteManyPersonalInformation: actionResolvers.DeleteManyPersonalInformationResolver,
    deleteOnePersonalInformation: actionResolvers.DeleteOnePersonalInformationResolver,
    findFirstPersonalInformation: actionResolvers.FindFirstPersonalInformationResolver,
    findFirstPersonalInformationOrThrow: actionResolvers.FindFirstPersonalInformationOrThrowResolver,
    personalInformations: actionResolvers.FindManyPersonalInformationResolver,
    personalInformation: actionResolvers.FindUniquePersonalInformationResolver,
    getPersonalInformation: actionResolvers.FindUniquePersonalInformationOrThrowResolver,
    groupByPersonalInformation: actionResolvers.GroupByPersonalInformationResolver,
    updateManyPersonalInformation: actionResolvers.UpdateManyPersonalInformationResolver,
    updateOnePersonalInformation: actionResolvers.UpdateOnePersonalInformationResolver,
    upsertOnePersonalInformation: actionResolvers.UpsertOnePersonalInformationResolver
  },
  Summary: {
    aggregateSummary: actionResolvers.AggregateSummaryResolver,
    createManySummary: actionResolvers.CreateManySummaryResolver,
    createManyAndReturnSummary: actionResolvers.CreateManyAndReturnSummaryResolver,
    createOneSummary: actionResolvers.CreateOneSummaryResolver,
    deleteManySummary: actionResolvers.DeleteManySummaryResolver,
    deleteOneSummary: actionResolvers.DeleteOneSummaryResolver,
    findFirstSummary: actionResolvers.FindFirstSummaryResolver,
    findFirstSummaryOrThrow: actionResolvers.FindFirstSummaryOrThrowResolver,
    summaries: actionResolvers.FindManySummaryResolver,
    summary: actionResolvers.FindUniqueSummaryResolver,
    getSummary: actionResolvers.FindUniqueSummaryOrThrowResolver,
    groupBySummary: actionResolvers.GroupBySummaryResolver,
    updateManySummary: actionResolvers.UpdateManySummaryResolver,
    updateOneSummary: actionResolvers.UpdateOneSummaryResolver,
    upsertOneSummary: actionResolvers.UpsertOneSummaryResolver
  },
  Experience: {
    aggregateExperience: actionResolvers.AggregateExperienceResolver,
    createManyExperience: actionResolvers.CreateManyExperienceResolver,
    createManyAndReturnExperience: actionResolvers.CreateManyAndReturnExperienceResolver,
    createOneExperience: actionResolvers.CreateOneExperienceResolver,
    deleteManyExperience: actionResolvers.DeleteManyExperienceResolver,
    deleteOneExperience: actionResolvers.DeleteOneExperienceResolver,
    findFirstExperience: actionResolvers.FindFirstExperienceResolver,
    findFirstExperienceOrThrow: actionResolvers.FindFirstExperienceOrThrowResolver,
    experiences: actionResolvers.FindManyExperienceResolver,
    experience: actionResolvers.FindUniqueExperienceResolver,
    getExperience: actionResolvers.FindUniqueExperienceOrThrowResolver,
    groupByExperience: actionResolvers.GroupByExperienceResolver,
    updateManyExperience: actionResolvers.UpdateManyExperienceResolver,
    updateOneExperience: actionResolvers.UpdateOneExperienceResolver,
    upsertOneExperience: actionResolvers.UpsertOneExperienceResolver
  },
  Education: {
    aggregateEducation: actionResolvers.AggregateEducationResolver,
    createManyEducation: actionResolvers.CreateManyEducationResolver,
    createManyAndReturnEducation: actionResolvers.CreateManyAndReturnEducationResolver,
    createOneEducation: actionResolvers.CreateOneEducationResolver,
    deleteManyEducation: actionResolvers.DeleteManyEducationResolver,
    deleteOneEducation: actionResolvers.DeleteOneEducationResolver,
    findFirstEducation: actionResolvers.FindFirstEducationResolver,
    findFirstEducationOrThrow: actionResolvers.FindFirstEducationOrThrowResolver,
    educations: actionResolvers.FindManyEducationResolver,
    education: actionResolvers.FindUniqueEducationResolver,
    getEducation: actionResolvers.FindUniqueEducationOrThrowResolver,
    groupByEducation: actionResolvers.GroupByEducationResolver,
    updateManyEducation: actionResolvers.UpdateManyEducationResolver,
    updateOneEducation: actionResolvers.UpdateOneEducationResolver,
    upsertOneEducation: actionResolvers.UpsertOneEducationResolver
  },
  Skill: {
    aggregateSkill: actionResolvers.AggregateSkillResolver,
    createManySkill: actionResolvers.CreateManySkillResolver,
    createManyAndReturnSkill: actionResolvers.CreateManyAndReturnSkillResolver,
    createOneSkill: actionResolvers.CreateOneSkillResolver,
    deleteManySkill: actionResolvers.DeleteManySkillResolver,
    deleteOneSkill: actionResolvers.DeleteOneSkillResolver,
    findFirstSkill: actionResolvers.FindFirstSkillResolver,
    findFirstSkillOrThrow: actionResolvers.FindFirstSkillOrThrowResolver,
    skills: actionResolvers.FindManySkillResolver,
    skill: actionResolvers.FindUniqueSkillResolver,
    getSkill: actionResolvers.FindUniqueSkillOrThrowResolver,
    groupBySkill: actionResolvers.GroupBySkillResolver,
    updateManySkill: actionResolvers.UpdateManySkillResolver,
    updateOneSkill: actionResolvers.UpdateOneSkillResolver,
    upsertOneSkill: actionResolvers.UpsertOneSkillResolver
  },
  Project: {
    aggregateProject: actionResolvers.AggregateProjectResolver,
    createManyProject: actionResolvers.CreateManyProjectResolver,
    createManyAndReturnProject: actionResolvers.CreateManyAndReturnProjectResolver,
    createOneProject: actionResolvers.CreateOneProjectResolver,
    deleteManyProject: actionResolvers.DeleteManyProjectResolver,
    deleteOneProject: actionResolvers.DeleteOneProjectResolver,
    findFirstProject: actionResolvers.FindFirstProjectResolver,
    findFirstProjectOrThrow: actionResolvers.FindFirstProjectOrThrowResolver,
    projects: actionResolvers.FindManyProjectResolver,
    project: actionResolvers.FindUniqueProjectResolver,
    getProject: actionResolvers.FindUniqueProjectOrThrowResolver,
    groupByProject: actionResolvers.GroupByProjectResolver,
    updateManyProject: actionResolvers.UpdateManyProjectResolver,
    updateOneProject: actionResolvers.UpdateOneProjectResolver,
    upsertOneProject: actionResolvers.UpsertOneProjectResolver
  }
};
const crudResolversInfo = {
  CV: ["aggregateCV", "createManyCV", "createManyAndReturnCV", "createOneCV", "deleteManyCV", "deleteOneCV", "findFirstCV", "findFirstCVOrThrow", "cVS", "cV", "getCV", "groupByCV", "updateManyCV", "updateOneCV", "upsertOneCV"],
  PersonalInformation: ["aggregatePersonalInformation", "createManyPersonalInformation", "createManyAndReturnPersonalInformation", "createOnePersonalInformation", "deleteManyPersonalInformation", "deleteOnePersonalInformation", "findFirstPersonalInformation", "findFirstPersonalInformationOrThrow", "personalInformations", "personalInformation", "getPersonalInformation", "groupByPersonalInformation", "updateManyPersonalInformation", "updateOnePersonalInformation", "upsertOnePersonalInformation"],
  Summary: ["aggregateSummary", "createManySummary", "createManyAndReturnSummary", "createOneSummary", "deleteManySummary", "deleteOneSummary", "findFirstSummary", "findFirstSummaryOrThrow", "summaries", "summary", "getSummary", "groupBySummary", "updateManySummary", "updateOneSummary", "upsertOneSummary"],
  Experience: ["aggregateExperience", "createManyExperience", "createManyAndReturnExperience", "createOneExperience", "deleteManyExperience", "deleteOneExperience", "findFirstExperience", "findFirstExperienceOrThrow", "experiences", "experience", "getExperience", "groupByExperience", "updateManyExperience", "updateOneExperience", "upsertOneExperience"],
  Education: ["aggregateEducation", "createManyEducation", "createManyAndReturnEducation", "createOneEducation", "deleteManyEducation", "deleteOneEducation", "findFirstEducation", "findFirstEducationOrThrow", "educations", "education", "getEducation", "groupByEducation", "updateManyEducation", "updateOneEducation", "upsertOneEducation"],
  Skill: ["aggregateSkill", "createManySkill", "createManyAndReturnSkill", "createOneSkill", "deleteManySkill", "deleteOneSkill", "findFirstSkill", "findFirstSkillOrThrow", "skills", "skill", "getSkill", "groupBySkill", "updateManySkill", "updateOneSkill", "upsertOneSkill"],
  Project: ["aggregateProject", "createManyProject", "createManyAndReturnProject", "createOneProject", "deleteManyProject", "deleteOneProject", "findFirstProject", "findFirstProjectOrThrow", "projects", "project", "getProject", "groupByProject", "updateManyProject", "updateOneProject", "upsertOneProject"]
};
const argsInfo = {
  AggregateCVArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCVArgs: ["data"],
  CreateManyAndReturnCVArgs: ["data"],
  CreateOneCVArgs: ["data"],
  DeleteManyCVArgs: ["where"],
  DeleteOneCVArgs: ["where"],
  FindFirstCVArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCVOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCVArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCVArgs: ["where"],
  FindUniqueCVOrThrowArgs: ["where"],
  GroupByCVArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCVArgs: ["data", "where"],
  UpdateOneCVArgs: ["data", "where"],
  UpsertOneCVArgs: ["where", "create", "update"],
  AggregatePersonalInformationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPersonalInformationArgs: ["data"],
  CreateManyAndReturnPersonalInformationArgs: ["data"],
  CreateOnePersonalInformationArgs: ["data"],
  DeleteManyPersonalInformationArgs: ["where"],
  DeleteOnePersonalInformationArgs: ["where"],
  FindFirstPersonalInformationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPersonalInformationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonalInformationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePersonalInformationArgs: ["where"],
  FindUniquePersonalInformationOrThrowArgs: ["where"],
  GroupByPersonalInformationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPersonalInformationArgs: ["data", "where"],
  UpdateOnePersonalInformationArgs: ["data", "where"],
  UpsertOnePersonalInformationArgs: ["where", "create", "update"],
  AggregateSummaryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySummaryArgs: ["data"],
  CreateManyAndReturnSummaryArgs: ["data"],
  CreateOneSummaryArgs: ["data"],
  DeleteManySummaryArgs: ["where"],
  DeleteOneSummaryArgs: ["where"],
  FindFirstSummaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSummaryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySummaryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSummaryArgs: ["where"],
  FindUniqueSummaryOrThrowArgs: ["where"],
  GroupBySummaryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySummaryArgs: ["data", "where"],
  UpdateOneSummaryArgs: ["data", "where"],
  UpsertOneSummaryArgs: ["where", "create", "update"],
  AggregateExperienceArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyExperienceArgs: ["data"],
  CreateManyAndReturnExperienceArgs: ["data"],
  CreateOneExperienceArgs: ["data"],
  DeleteManyExperienceArgs: ["where"],
  DeleteOneExperienceArgs: ["where"],
  FindFirstExperienceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstExperienceOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyExperienceArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueExperienceArgs: ["where"],
  FindUniqueExperienceOrThrowArgs: ["where"],
  GroupByExperienceArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyExperienceArgs: ["data", "where"],
  UpdateOneExperienceArgs: ["data", "where"],
  UpsertOneExperienceArgs: ["where", "create", "update"],
  AggregateEducationArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyEducationArgs: ["data"],
  CreateManyAndReturnEducationArgs: ["data"],
  CreateOneEducationArgs: ["data"],
  DeleteManyEducationArgs: ["where"],
  DeleteOneEducationArgs: ["where"],
  FindFirstEducationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstEducationOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyEducationArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueEducationArgs: ["where"],
  FindUniqueEducationOrThrowArgs: ["where"],
  GroupByEducationArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyEducationArgs: ["data", "where"],
  UpdateOneEducationArgs: ["data", "where"],
  UpsertOneEducationArgs: ["where", "create", "update"],
  AggregateSkillArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManySkillArgs: ["data"],
  CreateManyAndReturnSkillArgs: ["data"],
  CreateOneSkillArgs: ["data"],
  DeleteManySkillArgs: ["where"],
  DeleteOneSkillArgs: ["where"],
  FindFirstSkillArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstSkillOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManySkillArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueSkillArgs: ["where"],
  FindUniqueSkillOrThrowArgs: ["where"],
  GroupBySkillArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManySkillArgs: ["data", "where"],
  UpdateOneSkillArgs: ["data", "where"],
  UpsertOneSkillArgs: ["where", "create", "update"],
  AggregateProjectArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyProjectArgs: ["data"],
  CreateManyAndReturnProjectArgs: ["data"],
  CreateOneProjectArgs: ["data"],
  DeleteManyProjectArgs: ["where"],
  DeleteOneProjectArgs: ["where"],
  FindFirstProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstProjectOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyProjectArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueProjectArgs: ["where"],
  FindUniqueProjectOrThrowArgs: ["where"],
  GroupByProjectArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyProjectArgs: ["data", "where"],
  UpdateOneProjectArgs: ["data", "where"],
  UpsertOneProjectArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "createManyAndReturn", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  CV: relationResolvers.CVRelationsResolver,
  PersonalInformation: relationResolvers.PersonalInformationRelationsResolver,
  Summary: relationResolvers.SummaryRelationsResolver,
  Experience: relationResolvers.ExperienceRelationsResolver,
  Education: relationResolvers.EducationRelationsResolver,
  Skill: relationResolvers.SkillRelationsResolver,
  Project: relationResolvers.ProjectRelationsResolver
};
const relationResolversInfo = {
  CV: ["personalInformation", "summary", "experience", "education", "skills", "projects"],
  PersonalInformation: ["cv"],
  Summary: ["cv"],
  Experience: ["CV"],
  Education: ["CV"],
  Skill: ["CV"],
  Project: ["CV"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  CV: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  PersonalInformation: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  Summary: ["id", "text", "summaryId"],
  Experience: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  Education: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  Skill: ["id", "name", "level", "cvId"],
  Project: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateCV: ["_count", "_min", "_max"],
  CVGroupBy: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "_count", "_min", "_max"],
  AggregatePersonalInformation: ["_count", "_min", "_max"],
  PersonalInformationGroupBy: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "_count", "_min", "_max"],
  AggregateSummary: ["_count", "_min", "_max"],
  SummaryGroupBy: ["id", "text", "summaryId", "_count", "_min", "_max"],
  AggregateExperience: ["_count", "_min", "_max"],
  ExperienceGroupBy: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "_count", "_min", "_max"],
  AggregateEducation: ["_count", "_min", "_max"],
  EducationGroupBy: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "_count", "_min", "_max"],
  AggregateSkill: ["_count", "_min", "_max"],
  SkillGroupBy: ["id", "name", "level", "cvId", "_count", "_min", "_max"],
  AggregateProject: ["_count", "_min", "_max"],
  ProjectGroupBy: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "_count", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  CVCountAggregate: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "_all"],
  CVMinAggregate: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVMaxAggregate: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  PersonalInformationCountAggregate: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "_all"],
  PersonalInformationMinAggregate: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  PersonalInformationMaxAggregate: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  SummaryCountAggregate: ["id", "text", "summaryId", "_all"],
  SummaryMinAggregate: ["id", "text", "summaryId"],
  SummaryMaxAggregate: ["id", "text", "summaryId"],
  ExperienceCount: ["CV"],
  ExperienceCountAggregate: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "_all"],
  ExperienceMinAggregate: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  ExperienceMaxAggregate: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  EducationCount: ["CV"],
  EducationCountAggregate: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "_all"],
  EducationMinAggregate: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  EducationMaxAggregate: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  SkillCount: ["CV"],
  SkillCountAggregate: ["id", "name", "level", "cvId", "_all"],
  SkillMinAggregate: ["id", "name", "level", "cvId"],
  SkillMaxAggregate: ["id", "name", "level", "cvId"],
  ProjectCount: ["CV"],
  ProjectCountAggregate: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "_all"],
  ProjectMinAggregate: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  ProjectMaxAggregate: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  CreateManyAndReturnCV: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CreateManyAndReturnPersonalInformation: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  CreateManyAndReturnSummary: ["id", "text", "summaryId"],
  CreateManyAndReturnExperience: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  CreateManyAndReturnEducation: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  CreateManyAndReturnSkill: ["id", "name", "level", "cvId"],
  CreateManyAndReturnProject: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  CVWhereInput: ["AND", "OR", "NOT", "id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CVOrderByWithRelationInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CVWhereUniqueInput: ["id", "personalInformationId", "summaryId", "AND", "OR", "NOT", "createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CVOrderByWithAggregationInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt", "_count", "_max", "_min"],
  CVScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  PersonalInformationWhereInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "cv"],
  PersonalInformationOrderByWithRelationInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "cv"],
  PersonalInformationWhereUniqueInput: ["id", "personalInformationId", "AND", "OR", "NOT", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "cv"],
  PersonalInformationOrderByWithAggregationInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "_count", "_max", "_min"],
  PersonalInformationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  SummaryWhereInput: ["AND", "OR", "NOT", "id", "text", "summaryId", "cv"],
  SummaryOrderByWithRelationInput: ["id", "text", "summaryId", "cv"],
  SummaryWhereUniqueInput: ["id", "summaryId", "AND", "OR", "NOT", "text", "cv"],
  SummaryOrderByWithAggregationInput: ["id", "text", "summaryId", "_count", "_max", "_min"],
  SummaryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "text", "summaryId"],
  ExperienceWhereInput: ["AND", "OR", "NOT", "id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "CV"],
  ExperienceOrderByWithRelationInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "CV"],
  ExperienceWhereUniqueInput: ["id", "AND", "OR", "NOT", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "CV"],
  ExperienceOrderByWithAggregationInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "_count", "_max", "_min"],
  ExperienceScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  EducationWhereInput: ["AND", "OR", "NOT", "id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "CV"],
  EducationOrderByWithRelationInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "CV"],
  EducationWhereUniqueInput: ["id", "AND", "OR", "NOT", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "CV"],
  EducationOrderByWithAggregationInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "_count", "_max", "_min"],
  EducationScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  SkillWhereInput: ["AND", "OR", "NOT", "id", "name", "level", "cvId", "CV"],
  SkillOrderByWithRelationInput: ["id", "name", "level", "cvId", "CV"],
  SkillWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "level", "cvId", "CV"],
  SkillOrderByWithAggregationInput: ["id", "name", "level", "cvId", "_count", "_max", "_min"],
  SkillScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "level", "cvId"],
  ProjectWhereInput: ["AND", "OR", "NOT", "id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "CV"],
  ProjectOrderByWithRelationInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "CV"],
  ProjectWhereUniqueInput: ["id", "AND", "OR", "NOT", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "CV"],
  ProjectOrderByWithAggregationInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "_count", "_max", "_min"],
  ProjectScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  CVCreateInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CVUpdateInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills", "projects"],
  CVCreateManyInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVUpdateManyMutationInput: ["createdAt", "updatedAt"],
  PersonalInformationCreateInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "cv"],
  PersonalInformationUpdateInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId", "cv"],
  PersonalInformationCreateManyInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  PersonalInformationUpdateManyMutationInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  SummaryCreateInput: ["id", "text", "summaryId", "cv"],
  SummaryUpdateInput: ["id", "text", "summaryId", "cv"],
  SummaryCreateManyInput: ["id", "text", "summaryId"],
  SummaryUpdateManyMutationInput: ["id", "text", "summaryId"],
  ExperienceCreateInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "CV"],
  ExperienceUpdateInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId", "CV"],
  ExperienceCreateManyInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  ExperienceUpdateManyMutationInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  EducationCreateInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "CV"],
  EducationUpdateInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId", "CV"],
  EducationCreateManyInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  EducationUpdateManyMutationInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  SkillCreateInput: ["id", "name", "level", "cvId", "CV"],
  SkillUpdateInput: ["id", "name", "level", "cvId", "CV"],
  SkillCreateManyInput: ["id", "name", "level", "cvId"],
  SkillUpdateManyMutationInput: ["id", "name", "level", "cvId"],
  ProjectCreateInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "CV"],
  ProjectUpdateInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId", "CV"],
  ProjectCreateManyInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  ProjectUpdateManyMutationInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  PersonalInformationRelationFilter: ["is", "isNot"],
  SummaryRelationFilter: ["is", "isNot"],
  ExperienceNullableRelationFilter: ["is", "isNot"],
  EducationNullableRelationFilter: ["is", "isNot"],
  SkillNullableRelationFilter: ["is", "isNot"],
  ProjectNullableRelationFilter: ["is", "isNot"],
  CVCountOrderByAggregateInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVMaxOrderByAggregateInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVMinOrderByAggregateInput: ["id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  CVNullableRelationFilter: ["is", "isNot"],
  SortOrderInput: ["sort", "nulls"],
  PersonalInformationCountOrderByAggregateInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  PersonalInformationMaxOrderByAggregateInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  PersonalInformationMinOrderByAggregateInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  SummaryCountOrderByAggregateInput: ["id", "text", "summaryId"],
  SummaryMaxOrderByAggregateInput: ["id", "text", "summaryId"],
  SummaryMinOrderByAggregateInput: ["id", "text", "summaryId"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  CVListRelationFilter: ["every", "some", "none"],
  CVOrderByRelationAggregateInput: ["_count"],
  ExperienceCountOrderByAggregateInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  ExperienceMaxOrderByAggregateInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  ExperienceMinOrderByAggregateInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EducationCountOrderByAggregateInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  EducationMaxOrderByAggregateInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  EducationMinOrderByAggregateInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  SkillCountOrderByAggregateInput: ["id", "name", "level", "cvId"],
  SkillMaxOrderByAggregateInput: ["id", "name", "level", "cvId"],
  SkillMinOrderByAggregateInput: ["id", "name", "level", "cvId"],
  ProjectCountOrderByAggregateInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  ProjectMaxOrderByAggregateInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  ProjectMinOrderByAggregateInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  PersonalInformationCreateNestedOneWithoutCvInput: ["create", "connectOrCreate", "connect"],
  SummaryCreateNestedOneWithoutCvInput: ["create", "connectOrCreate", "connect"],
  ExperienceCreateNestedOneWithoutCVInput: ["create", "connectOrCreate", "connect"],
  EducationCreateNestedOneWithoutCVInput: ["create", "connectOrCreate", "connect"],
  SkillCreateNestedOneWithoutCVInput: ["create", "connectOrCreate", "connect"],
  ProjectCreateNestedOneWithoutCVInput: ["create", "connectOrCreate", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  PersonalInformationUpdateOneRequiredWithoutCvNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  SummaryUpdateOneRequiredWithoutCvNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ExperienceUpdateOneWithoutCVNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  EducationUpdateOneWithoutCVNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  SkillUpdateOneWithoutCVNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  ProjectUpdateOneWithoutCVNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  StringFieldUpdateOperationsInput: ["set"],
  CVCreateNestedOneWithoutPersonalInformationInput: ["create", "connectOrCreate", "connect"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  CVUpdateOneWithoutPersonalInformationNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CVCreateNestedOneWithoutSummaryInput: ["create", "connectOrCreate", "connect"],
  CVUpdateOneWithoutSummaryNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  CVCreateNestedManyWithoutExperienceInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  CVUpdateManyWithoutExperienceNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CVCreateNestedManyWithoutEducationInput: ["create", "connectOrCreate", "createMany", "connect"],
  CVUpdateManyWithoutEducationNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CVCreateNestedManyWithoutSkillsInput: ["create", "connectOrCreate", "createMany", "connect"],
  CVUpdateManyWithoutSkillsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  CVCreateNestedManyWithoutProjectsInput: ["create", "connectOrCreate", "createMany", "connect"],
  CVUpdateManyWithoutProjectsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  PersonalInformationCreateWithoutCvInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  PersonalInformationCreateOrConnectWithoutCvInput: ["where", "create"],
  SummaryCreateWithoutCvInput: ["id", "text", "summaryId"],
  SummaryCreateOrConnectWithoutCvInput: ["where", "create"],
  ExperienceCreateWithoutCVInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  ExperienceCreateOrConnectWithoutCVInput: ["where", "create"],
  EducationCreateWithoutCVInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  EducationCreateOrConnectWithoutCVInput: ["where", "create"],
  SkillCreateWithoutCVInput: ["id", "name", "level", "cvId"],
  SkillCreateOrConnectWithoutCVInput: ["where", "create"],
  ProjectCreateWithoutCVInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  ProjectCreateOrConnectWithoutCVInput: ["where", "create"],
  PersonalInformationUpsertWithoutCvInput: ["update", "create", "where"],
  PersonalInformationUpdateToOneWithWhereWithoutCvInput: ["where", "data"],
  PersonalInformationUpdateWithoutCvInput: ["id", "firstName", "lastName", "email", "phone", "location", "linkedinUrl", "githubUrl", "personalWebsite", "personalInformationId"],
  SummaryUpsertWithoutCvInput: ["update", "create", "where"],
  SummaryUpdateToOneWithWhereWithoutCvInput: ["where", "data"],
  SummaryUpdateWithoutCvInput: ["id", "text", "summaryId"],
  ExperienceUpsertWithoutCVInput: ["update", "create", "where"],
  ExperienceUpdateToOneWithWhereWithoutCVInput: ["where", "data"],
  ExperienceUpdateWithoutCVInput: ["id", "jobTitle", "company", "location", "startDate", "endDate", "description", "cvId"],
  EducationUpsertWithoutCVInput: ["update", "create", "where"],
  EducationUpdateToOneWithWhereWithoutCVInput: ["where", "data"],
  EducationUpdateWithoutCVInput: ["id", "institution", "degree", "major", "startDate", "endDate", "description", "cvId"],
  SkillUpsertWithoutCVInput: ["update", "create", "where"],
  SkillUpdateToOneWithWhereWithoutCVInput: ["where", "data"],
  SkillUpdateWithoutCVInput: ["id", "name", "level", "cvId"],
  ProjectUpsertWithoutCVInput: ["update", "create", "where"],
  ProjectUpdateToOneWithWhereWithoutCVInput: ["where", "data"],
  ProjectUpdateWithoutCVInput: ["id", "name", "description", "technologies", "liveUrl", "githubUrl", "cvId"],
  CVCreateWithoutPersonalInformationInput: ["createdAt", "updatedAt", "summary", "experience", "education", "skills", "projects"],
  CVCreateOrConnectWithoutPersonalInformationInput: ["where", "create"],
  CVUpsertWithoutPersonalInformationInput: ["update", "create", "where"],
  CVUpdateToOneWithWhereWithoutPersonalInformationInput: ["where", "data"],
  CVUpdateWithoutPersonalInformationInput: ["createdAt", "updatedAt", "summary", "experience", "education", "skills", "projects"],
  CVCreateWithoutSummaryInput: ["createdAt", "updatedAt", "personalInformation", "experience", "education", "skills", "projects"],
  CVCreateOrConnectWithoutSummaryInput: ["where", "create"],
  CVUpsertWithoutSummaryInput: ["update", "create", "where"],
  CVUpdateToOneWithWhereWithoutSummaryInput: ["where", "data"],
  CVUpdateWithoutSummaryInput: ["createdAt", "updatedAt", "personalInformation", "experience", "education", "skills", "projects"],
  CVCreateWithoutExperienceInput: ["createdAt", "updatedAt", "personalInformation", "summary", "education", "skills", "projects"],
  CVCreateOrConnectWithoutExperienceInput: ["where", "create"],
  CVCreateManyExperienceInputEnvelope: ["data"],
  CVUpsertWithWhereUniqueWithoutExperienceInput: ["where", "update", "create"],
  CVUpdateWithWhereUniqueWithoutExperienceInput: ["where", "data"],
  CVUpdateManyWithWhereWithoutExperienceInput: ["where", "data"],
  CVScalarWhereInput: ["AND", "OR", "NOT", "id", "personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVCreateWithoutEducationInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "skills", "projects"],
  CVCreateOrConnectWithoutEducationInput: ["where", "create"],
  CVCreateManyEducationInputEnvelope: ["data"],
  CVUpsertWithWhereUniqueWithoutEducationInput: ["where", "update", "create"],
  CVUpdateWithWhereUniqueWithoutEducationInput: ["where", "data"],
  CVUpdateManyWithWhereWithoutEducationInput: ["where", "data"],
  CVCreateWithoutSkillsInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "projects"],
  CVCreateOrConnectWithoutSkillsInput: ["where", "create"],
  CVCreateManySkillsInputEnvelope: ["data"],
  CVUpsertWithWhereUniqueWithoutSkillsInput: ["where", "update", "create"],
  CVUpdateWithWhereUniqueWithoutSkillsInput: ["where", "data"],
  CVUpdateManyWithWhereWithoutSkillsInput: ["where", "data"],
  CVCreateWithoutProjectsInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills"],
  CVCreateOrConnectWithoutProjectsInput: ["where", "create"],
  CVCreateManyProjectsInputEnvelope: ["data"],
  CVUpsertWithWhereUniqueWithoutProjectsInput: ["where", "update", "create"],
  CVUpdateWithWhereUniqueWithoutProjectsInput: ["where", "data"],
  CVUpdateManyWithWhereWithoutProjectsInput: ["where", "data"],
  CVCreateManyExperienceInput: ["personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVUpdateWithoutExperienceInput: ["createdAt", "updatedAt", "personalInformation", "summary", "education", "skills", "projects"],
  CVCreateManyEducationInput: ["personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVUpdateWithoutEducationInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "skills", "projects"],
  CVCreateManySkillsInput: ["personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVUpdateWithoutSkillsInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "projects"],
  CVCreateManyProjectsInput: ["personalInformationId", "summaryId", "createdAt", "updatedAt"],
  CVUpdateWithoutProjectsInput: ["createdAt", "updatedAt", "personalInformation", "summary", "experience", "education", "skills"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

