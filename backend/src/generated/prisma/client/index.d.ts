
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model CV
 * 
 */
export type CV = $Result.DefaultSelection<Prisma.$CVPayload>
/**
 * Model PersonalInformation
 * 
 */
export type PersonalInformation = $Result.DefaultSelection<Prisma.$PersonalInformationPayload>
/**
 * Model Summary
 * 
 */
export type Summary = $Result.DefaultSelection<Prisma.$SummaryPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Education
 * 
 */
export type Education = $Result.DefaultSelection<Prisma.$EducationPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CVS
 * const cVS = await prisma.cV.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CVS
   * const cVS = await prisma.cV.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.cV`: Exposes CRUD operations for the **CV** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CVS
    * const cVS = await prisma.cV.findMany()
    * ```
    */
  get cV(): Prisma.CVDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.personalInformation`: Exposes CRUD operations for the **PersonalInformation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PersonalInformations
    * const personalInformations = await prisma.personalInformation.findMany()
    * ```
    */
  get personalInformation(): Prisma.PersonalInformationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.summary`: Exposes CRUD operations for the **Summary** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Summaries
    * const summaries = await prisma.summary.findMany()
    * ```
    */
  get summary(): Prisma.SummaryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.education`: Exposes CRUD operations for the **Education** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Educations
    * const educations = await prisma.education.findMany()
    * ```
    */
  get education(): Prisma.EducationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.3.0
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    CV: 'CV',
    PersonalInformation: 'PersonalInformation',
    Summary: 'Summary',
    Experience: 'Experience',
    Education: 'Education',
    Skill: 'Skill',
    Project: 'Project'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "cV" | "personalInformation" | "summary" | "experience" | "education" | "skill" | "project"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      CV: {
        payload: Prisma.$CVPayload<ExtArgs>
        fields: Prisma.CVFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CVFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CVFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findFirst: {
            args: Prisma.CVFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CVFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          findMany: {
            args: Prisma.CVFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          create: {
            args: Prisma.CVCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          createMany: {
            args: Prisma.CVCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CVCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          delete: {
            args: Prisma.CVDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          update: {
            args: Prisma.CVUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          deleteMany: {
            args: Prisma.CVDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CVUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CVUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>[]
          }
          upsert: {
            args: Prisma.CVUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CVPayload>
          }
          aggregate: {
            args: Prisma.CVAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCV>
          }
          groupBy: {
            args: Prisma.CVGroupByArgs<ExtArgs>
            result: $Utils.Optional<CVGroupByOutputType>[]
          }
          count: {
            args: Prisma.CVCountArgs<ExtArgs>
            result: $Utils.Optional<CVCountAggregateOutputType> | number
          }
        }
      }
      PersonalInformation: {
        payload: Prisma.$PersonalInformationPayload<ExtArgs>
        fields: Prisma.PersonalInformationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PersonalInformationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PersonalInformationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          findFirst: {
            args: Prisma.PersonalInformationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PersonalInformationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          findMany: {
            args: Prisma.PersonalInformationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>[]
          }
          create: {
            args: Prisma.PersonalInformationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          createMany: {
            args: Prisma.PersonalInformationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PersonalInformationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>[]
          }
          delete: {
            args: Prisma.PersonalInformationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          update: {
            args: Prisma.PersonalInformationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          deleteMany: {
            args: Prisma.PersonalInformationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PersonalInformationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PersonalInformationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>[]
          }
          upsert: {
            args: Prisma.PersonalInformationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PersonalInformationPayload>
          }
          aggregate: {
            args: Prisma.PersonalInformationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePersonalInformation>
          }
          groupBy: {
            args: Prisma.PersonalInformationGroupByArgs<ExtArgs>
            result: $Utils.Optional<PersonalInformationGroupByOutputType>[]
          }
          count: {
            args: Prisma.PersonalInformationCountArgs<ExtArgs>
            result: $Utils.Optional<PersonalInformationCountAggregateOutputType> | number
          }
        }
      }
      Summary: {
        payload: Prisma.$SummaryPayload<ExtArgs>
        fields: Prisma.SummaryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SummaryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SummaryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findFirst: {
            args: Prisma.SummaryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SummaryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          findMany: {
            args: Prisma.SummaryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          create: {
            args: Prisma.SummaryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          createMany: {
            args: Prisma.SummaryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SummaryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          delete: {
            args: Prisma.SummaryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          update: {
            args: Prisma.SummaryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          deleteMany: {
            args: Prisma.SummaryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SummaryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SummaryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>[]
          }
          upsert: {
            args: Prisma.SummaryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SummaryPayload>
          }
          aggregate: {
            args: Prisma.SummaryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSummary>
          }
          groupBy: {
            args: Prisma.SummaryGroupByArgs<ExtArgs>
            result: $Utils.Optional<SummaryGroupByOutputType>[]
          }
          count: {
            args: Prisma.SummaryCountArgs<ExtArgs>
            result: $Utils.Optional<SummaryCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Education: {
        payload: Prisma.$EducationPayload<ExtArgs>
        fields: Prisma.EducationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EducationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EducationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findFirst: {
            args: Prisma.EducationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EducationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          findMany: {
            args: Prisma.EducationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          create: {
            args: Prisma.EducationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          createMany: {
            args: Prisma.EducationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EducationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          delete: {
            args: Prisma.EducationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          update: {
            args: Prisma.EducationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          deleteMany: {
            args: Prisma.EducationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EducationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EducationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>[]
          }
          upsert: {
            args: Prisma.EducationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EducationPayload>
          }
          aggregate: {
            args: Prisma.EducationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEducation>
          }
          groupBy: {
            args: Prisma.EducationGroupByArgs<ExtArgs>
            result: $Utils.Optional<EducationGroupByOutputType>[]
          }
          count: {
            args: Prisma.EducationCountArgs<ExtArgs>
            result: $Utils.Optional<EducationCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cV?: CVOmit
    personalInformation?: PersonalInformationOmit
    summary?: SummaryOmit
    experience?: ExperienceOmit
    education?: EducationOmit
    skill?: SkillOmit
    project?: ProjectOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CVCountOutputType
   */

  export type CVCountOutputType = {
    experience: number
    education: number
    skills: number
    projects: number
  }

  export type CVCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    experience?: boolean | CVCountOutputTypeCountExperienceArgs
    education?: boolean | CVCountOutputTypeCountEducationArgs
    skills?: boolean | CVCountOutputTypeCountSkillsArgs
    projects?: boolean | CVCountOutputTypeCountProjectsArgs
  }

  // Custom InputTypes
  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CVCountOutputType
     */
    select?: CVCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountExperienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountEducationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * CVCountOutputType without action
   */
  export type CVCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }


  /**
   * Count Type PersonalInformationCountOutputType
   */

  export type PersonalInformationCountOutputType = {
    cvs: number
  }

  export type PersonalInformationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | PersonalInformationCountOutputTypeCountCvsArgs
  }

  // Custom InputTypes
  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformationCountOutputType
     */
    select?: PersonalInformationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PersonalInformationCountOutputType without action
   */
  export type PersonalInformationCountOutputTypeCountCvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
  }


  /**
   * Models
   */

  /**
   * Model CV
   */

  export type AggregateCV = {
    _count: CVCountAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  export type CVMinAggregateOutputType = {
    id: string | null
    personalInformationId: string | null
    summaryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVMaxAggregateOutputType = {
    id: string | null
    personalInformationId: string | null
    summaryId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CVCountAggregateOutputType = {
    id: number
    personalInformationId: number
    summaryId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CVMinAggregateInputType = {
    id?: true
    personalInformationId?: true
    summaryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVMaxAggregateInputType = {
    id?: true
    personalInformationId?: true
    summaryId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CVCountAggregateInputType = {
    id?: true
    personalInformationId?: true
    summaryId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CVAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CV to aggregate.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CVS
    **/
    _count?: true | CVCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CVMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CVMaxAggregateInputType
  }

  export type GetCVAggregateType<T extends CVAggregateArgs> = {
        [P in keyof T & keyof AggregateCV]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCV[P]>
      : GetScalarType<T[P], AggregateCV[P]>
  }




  export type CVGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CVWhereInput
    orderBy?: CVOrderByWithAggregationInput | CVOrderByWithAggregationInput[]
    by: CVScalarFieldEnum[] | CVScalarFieldEnum
    having?: CVScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CVCountAggregateInputType | true
    _min?: CVMinAggregateInputType
    _max?: CVMaxAggregateInputType
  }

  export type CVGroupByOutputType = {
    id: string
    personalInformationId: string
    summaryId: string
    createdAt: Date
    updatedAt: Date
    _count: CVCountAggregateOutputType | null
    _min: CVMinAggregateOutputType | null
    _max: CVMaxAggregateOutputType | null
  }

  type GetCVGroupByPayload<T extends CVGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CVGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CVGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CVGroupByOutputType[P]>
            : GetScalarType<T[P], CVGroupByOutputType[P]>
        }
      >
    >


  export type CVSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personalInformationId?: boolean
    summaryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    experience?: boolean | CV$experienceArgs<ExtArgs>
    education?: boolean | CV$educationArgs<ExtArgs>
    skills?: boolean | CV$skillsArgs<ExtArgs>
    projects?: boolean | CV$projectsArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>

  export type CVSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personalInformationId?: boolean
    summaryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>

  export type CVSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    personalInformationId?: boolean
    summaryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cV"]>

  export type CVSelectScalar = {
    id?: boolean
    personalInformationId?: boolean
    summaryId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CVOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "personalInformationId" | "summaryId" | "createdAt" | "updatedAt", ExtArgs["result"]["cV"]>
  export type CVInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
    experience?: boolean | CV$experienceArgs<ExtArgs>
    education?: boolean | CV$educationArgs<ExtArgs>
    skills?: boolean | CV$skillsArgs<ExtArgs>
    projects?: boolean | CV$projectsArgs<ExtArgs>
    _count?: boolean | CVCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CVIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
  }
  export type CVIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    personalInformation?: boolean | PersonalInformationDefaultArgs<ExtArgs>
    summary?: boolean | SummaryDefaultArgs<ExtArgs>
  }

  export type $CVPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CV"
    objects: {
      personalInformation: Prisma.$PersonalInformationPayload<ExtArgs>
      summary: Prisma.$SummaryPayload<ExtArgs>
      experience: Prisma.$ExperiencePayload<ExtArgs>[]
      education: Prisma.$EducationPayload<ExtArgs>[]
      skills: Prisma.$SkillPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      personalInformationId: string
      summaryId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cV"]>
    composites: {}
  }

  type CVGetPayload<S extends boolean | null | undefined | CVDefaultArgs> = $Result.GetResult<Prisma.$CVPayload, S>

  type CVCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CVFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CVCountAggregateInputType | true
    }

  export interface CVDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CV'], meta: { name: 'CV' } }
    /**
     * Find zero or one CV that matches the filter.
     * @param {CVFindUniqueArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CVFindUniqueArgs>(args: SelectSubset<T, CVFindUniqueArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one CV that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CVFindUniqueOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CVFindUniqueOrThrowArgs>(args: SelectSubset<T, CVFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first CV that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CVFindFirstArgs>(args?: SelectSubset<T, CVFindFirstArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first CV that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindFirstOrThrowArgs} args - Arguments to find a CV
     * @example
     * // Get one CV
     * const cV = await prisma.cV.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CVFindFirstOrThrowArgs>(args?: SelectSubset<T, CVFindFirstOrThrowArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more CVS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CVS
     * const cVS = await prisma.cV.findMany()
     * 
     * // Get first 10 CVS
     * const cVS = await prisma.cV.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cVWithIdOnly = await prisma.cV.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CVFindManyArgs>(args?: SelectSubset<T, CVFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a CV.
     * @param {CVCreateArgs} args - Arguments to create a CV.
     * @example
     * // Create one CV
     * const CV = await prisma.cV.create({
     *   data: {
     *     // ... data to create a CV
     *   }
     * })
     * 
     */
    create<T extends CVCreateArgs>(args: SelectSubset<T, CVCreateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many CVS.
     * @param {CVCreateManyArgs} args - Arguments to create many CVS.
     * @example
     * // Create many CVS
     * const cV = await prisma.cV.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CVCreateManyArgs>(args?: SelectSubset<T, CVCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CVS and returns the data saved in the database.
     * @param {CVCreateManyAndReturnArgs} args - Arguments to create many CVS.
     * @example
     * // Create many CVS
     * const cV = await prisma.cV.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CVS and only return the `id`
     * const cVWithIdOnly = await prisma.cV.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CVCreateManyAndReturnArgs>(args?: SelectSubset<T, CVCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a CV.
     * @param {CVDeleteArgs} args - Arguments to delete one CV.
     * @example
     * // Delete one CV
     * const CV = await prisma.cV.delete({
     *   where: {
     *     // ... filter to delete one CV
     *   }
     * })
     * 
     */
    delete<T extends CVDeleteArgs>(args: SelectSubset<T, CVDeleteArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one CV.
     * @param {CVUpdateArgs} args - Arguments to update one CV.
     * @example
     * // Update one CV
     * const cV = await prisma.cV.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CVUpdateArgs>(args: SelectSubset<T, CVUpdateArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more CVS.
     * @param {CVDeleteManyArgs} args - Arguments to filter CVS to delete.
     * @example
     * // Delete a few CVS
     * const { count } = await prisma.cV.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CVDeleteManyArgs>(args?: SelectSubset<T, CVDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CVS
     * const cV = await prisma.cV.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CVUpdateManyArgs>(args: SelectSubset<T, CVUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CVS and returns the data updated in the database.
     * @param {CVUpdateManyAndReturnArgs} args - Arguments to update many CVS.
     * @example
     * // Update many CVS
     * const cV = await prisma.cV.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CVS and only return the `id`
     * const cVWithIdOnly = await prisma.cV.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CVUpdateManyAndReturnArgs>(args: SelectSubset<T, CVUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one CV.
     * @param {CVUpsertArgs} args - Arguments to update or create a CV.
     * @example
     * // Update or create a CV
     * const cV = await prisma.cV.upsert({
     *   create: {
     *     // ... data to create a CV
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CV we want to update
     *   }
     * })
     */
    upsert<T extends CVUpsertArgs>(args: SelectSubset<T, CVUpsertArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of CVS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVCountArgs} args - Arguments to filter CVS to count.
     * @example
     * // Count the number of CVS
     * const count = await prisma.cV.count({
     *   where: {
     *     // ... the filter for the CVS we want to count
     *   }
     * })
    **/
    count<T extends CVCountArgs>(
      args?: Subset<T, CVCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CVCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CVAggregateArgs>(args: Subset<T, CVAggregateArgs>): Prisma.PrismaPromise<GetCVAggregateType<T>>

    /**
     * Group by CV.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CVGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CVGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CVGroupByArgs['orderBy'] }
        : { orderBy?: CVGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CVGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCVGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CV model
   */
  readonly fields: CVFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CV.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CVClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    personalInformation<T extends PersonalInformationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformationDefaultArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    summary<T extends SummaryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SummaryDefaultArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    experience<T extends CV$experienceArgs<ExtArgs> = {}>(args?: Subset<T, CV$experienceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    education<T extends CV$educationArgs<ExtArgs> = {}>(args?: Subset<T, CV$educationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    skills<T extends CV$skillsArgs<ExtArgs> = {}>(args?: Subset<T, CV$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    projects<T extends CV$projectsArgs<ExtArgs> = {}>(args?: Subset<T, CV$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CV model
   */ 
  interface CVFieldRefs {
    readonly id: FieldRef<"CV", 'String'>
    readonly personalInformationId: FieldRef<"CV", 'String'>
    readonly summaryId: FieldRef<"CV", 'String'>
    readonly createdAt: FieldRef<"CV", 'DateTime'>
    readonly updatedAt: FieldRef<"CV", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CV findUnique
   */
  export type CVFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findUniqueOrThrow
   */
  export type CVFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV findFirst
   */
  export type CVFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findFirstOrThrow
   */
  export type CVFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CV to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CVS.
     */
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV findMany
   */
  export type CVFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter, which CVS to fetch.
     */
    where?: CVWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CVS to fetch.
     */
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CVS.
     */
    cursor?: CVWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CVS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CVS.
     */
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * CV create
   */
  export type CVCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to create a CV.
     */
    data: XOR<CVCreateInput, CVUncheckedCreateInput>
  }

  /**
   * CV createMany
   */
  export type CVCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CVS.
     */
    data: CVCreateManyInput | CVCreateManyInput[]
  }

  /**
   * CV createManyAndReturn
   */
  export type CVCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * The data used to create many CVS.
     */
    data: CVCreateManyInput | CVCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CV update
   */
  export type CVUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The data needed to update a CV.
     */
    data: XOR<CVUpdateInput, CVUncheckedUpdateInput>
    /**
     * Choose, which CV to update.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV updateMany
   */
  export type CVUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CVS.
     */
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyInput>
    /**
     * Filter which CVS to update
     */
    where?: CVWhereInput
    /**
     * Limit how many CVS to update.
     */
    limit?: number
  }

  /**
   * CV updateManyAndReturn
   */
  export type CVUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * The data used to update CVS.
     */
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyInput>
    /**
     * Filter which CVS to update
     */
    where?: CVWhereInput
    /**
     * Limit how many CVS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CV upsert
   */
  export type CVUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * The filter to search for the CV to update in case it exists.
     */
    where: CVWhereUniqueInput
    /**
     * In case the CV found by the `where` argument doesn't exist, create a new CV with this data.
     */
    create: XOR<CVCreateInput, CVUncheckedCreateInput>
    /**
     * In case the CV was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CVUpdateInput, CVUncheckedUpdateInput>
  }

  /**
   * CV delete
   */
  export type CVDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    /**
     * Filter which CV to delete.
     */
    where: CVWhereUniqueInput
  }

  /**
   * CV deleteMany
   */
  export type CVDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CVS to delete
     */
    where?: CVWhereInput
    /**
     * Limit how many CVS to delete.
     */
    limit?: number
  }

  /**
   * CV.experience
   */
  export type CV$experienceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    cursor?: ExperienceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * CV.education
   */
  export type CV$educationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    cursor?: EducationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * CV.skills
   */
  export type CV$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * CV.projects
   */
  export type CV$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * CV without action
   */
  export type CVDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
  }


  /**
   * Model PersonalInformation
   */

  export type AggregatePersonalInformation = {
    _count: PersonalInformationCountAggregateOutputType | null
    _min: PersonalInformationMinAggregateOutputType | null
    _max: PersonalInformationMaxAggregateOutputType | null
  }

  export type PersonalInformationMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    location: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    personalWebsite: string | null
  }

  export type PersonalInformationMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    phone: string | null
    location: string | null
    linkedinUrl: string | null
    githubUrl: string | null
    personalWebsite: string | null
  }

  export type PersonalInformationCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    phone: number
    location: number
    linkedinUrl: number
    githubUrl: number
    personalWebsite: number
    _all: number
  }


  export type PersonalInformationMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    linkedinUrl?: true
    githubUrl?: true
    personalWebsite?: true
  }

  export type PersonalInformationMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    linkedinUrl?: true
    githubUrl?: true
    personalWebsite?: true
  }

  export type PersonalInformationCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    phone?: true
    location?: true
    linkedinUrl?: true
    githubUrl?: true
    personalWebsite?: true
    _all?: true
  }

  export type PersonalInformationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInformation to aggregate.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PersonalInformations
    **/
    _count?: true | PersonalInformationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PersonalInformationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PersonalInformationMaxAggregateInputType
  }

  export type GetPersonalInformationAggregateType<T extends PersonalInformationAggregateArgs> = {
        [P in keyof T & keyof AggregatePersonalInformation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePersonalInformation[P]>
      : GetScalarType<T[P], AggregatePersonalInformation[P]>
  }




  export type PersonalInformationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PersonalInformationWhereInput
    orderBy?: PersonalInformationOrderByWithAggregationInput | PersonalInformationOrderByWithAggregationInput[]
    by: PersonalInformationScalarFieldEnum[] | PersonalInformationScalarFieldEnum
    having?: PersonalInformationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PersonalInformationCountAggregateInputType | true
    _min?: PersonalInformationMinAggregateInputType
    _max?: PersonalInformationMaxAggregateInputType
  }

  export type PersonalInformationGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl: string | null
    githubUrl: string | null
    personalWebsite: string | null
    _count: PersonalInformationCountAggregateOutputType | null
    _min: PersonalInformationMinAggregateOutputType | null
    _max: PersonalInformationMaxAggregateOutputType | null
  }

  type GetPersonalInformationGroupByPayload<T extends PersonalInformationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PersonalInformationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PersonalInformationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PersonalInformationGroupByOutputType[P]>
            : GetScalarType<T[P], PersonalInformationGroupByOutputType[P]>
        }
      >
    >


  export type PersonalInformationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    personalWebsite?: boolean
    cvs?: boolean | PersonalInformation$cvsArgs<ExtArgs>
    _count?: boolean | PersonalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["personalInformation"]>

  export type PersonalInformationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    personalWebsite?: boolean
  }, ExtArgs["result"]["personalInformation"]>

  export type PersonalInformationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    personalWebsite?: boolean
  }, ExtArgs["result"]["personalInformation"]>

  export type PersonalInformationSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    linkedinUrl?: boolean
    githubUrl?: boolean
    personalWebsite?: boolean
  }

  export type PersonalInformationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "phone" | "location" | "linkedinUrl" | "githubUrl" | "personalWebsite", ExtArgs["result"]["personalInformation"]>
  export type PersonalInformationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cvs?: boolean | PersonalInformation$cvsArgs<ExtArgs>
    _count?: boolean | PersonalInformationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PersonalInformationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PersonalInformationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PersonalInformationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PersonalInformation"
    objects: {
      cvs: Prisma.$CVPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      phone: string
      location: string
      linkedinUrl: string | null
      githubUrl: string | null
      personalWebsite: string | null
    }, ExtArgs["result"]["personalInformation"]>
    composites: {}
  }

  type PersonalInformationGetPayload<S extends boolean | null | undefined | PersonalInformationDefaultArgs> = $Result.GetResult<Prisma.$PersonalInformationPayload, S>

  type PersonalInformationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PersonalInformationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PersonalInformationCountAggregateInputType | true
    }

  export interface PersonalInformationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PersonalInformation'], meta: { name: 'PersonalInformation' } }
    /**
     * Find zero or one PersonalInformation that matches the filter.
     * @param {PersonalInformationFindUniqueArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PersonalInformationFindUniqueArgs>(args: SelectSubset<T, PersonalInformationFindUniqueArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one PersonalInformation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PersonalInformationFindUniqueOrThrowArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PersonalInformationFindUniqueOrThrowArgs>(args: SelectSubset<T, PersonalInformationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first PersonalInformation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindFirstArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PersonalInformationFindFirstArgs>(args?: SelectSubset<T, PersonalInformationFindFirstArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first PersonalInformation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindFirstOrThrowArgs} args - Arguments to find a PersonalInformation
     * @example
     * // Get one PersonalInformation
     * const personalInformation = await prisma.personalInformation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PersonalInformationFindFirstOrThrowArgs>(args?: SelectSubset<T, PersonalInformationFindFirstOrThrowArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more PersonalInformations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PersonalInformations
     * const personalInformations = await prisma.personalInformation.findMany()
     * 
     * // Get first 10 PersonalInformations
     * const personalInformations = await prisma.personalInformation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const personalInformationWithIdOnly = await prisma.personalInformation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PersonalInformationFindManyArgs>(args?: SelectSubset<T, PersonalInformationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a PersonalInformation.
     * @param {PersonalInformationCreateArgs} args - Arguments to create a PersonalInformation.
     * @example
     * // Create one PersonalInformation
     * const PersonalInformation = await prisma.personalInformation.create({
     *   data: {
     *     // ... data to create a PersonalInformation
     *   }
     * })
     * 
     */
    create<T extends PersonalInformationCreateArgs>(args: SelectSubset<T, PersonalInformationCreateArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many PersonalInformations.
     * @param {PersonalInformationCreateManyArgs} args - Arguments to create many PersonalInformations.
     * @example
     * // Create many PersonalInformations
     * const personalInformation = await prisma.personalInformation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PersonalInformationCreateManyArgs>(args?: SelectSubset<T, PersonalInformationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PersonalInformations and returns the data saved in the database.
     * @param {PersonalInformationCreateManyAndReturnArgs} args - Arguments to create many PersonalInformations.
     * @example
     * // Create many PersonalInformations
     * const personalInformation = await prisma.personalInformation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PersonalInformations and only return the `id`
     * const personalInformationWithIdOnly = await prisma.personalInformation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PersonalInformationCreateManyAndReturnArgs>(args?: SelectSubset<T, PersonalInformationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a PersonalInformation.
     * @param {PersonalInformationDeleteArgs} args - Arguments to delete one PersonalInformation.
     * @example
     * // Delete one PersonalInformation
     * const PersonalInformation = await prisma.personalInformation.delete({
     *   where: {
     *     // ... filter to delete one PersonalInformation
     *   }
     * })
     * 
     */
    delete<T extends PersonalInformationDeleteArgs>(args: SelectSubset<T, PersonalInformationDeleteArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one PersonalInformation.
     * @param {PersonalInformationUpdateArgs} args - Arguments to update one PersonalInformation.
     * @example
     * // Update one PersonalInformation
     * const personalInformation = await prisma.personalInformation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PersonalInformationUpdateArgs>(args: SelectSubset<T, PersonalInformationUpdateArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more PersonalInformations.
     * @param {PersonalInformationDeleteManyArgs} args - Arguments to filter PersonalInformations to delete.
     * @example
     * // Delete a few PersonalInformations
     * const { count } = await prisma.personalInformation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PersonalInformationDeleteManyArgs>(args?: SelectSubset<T, PersonalInformationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PersonalInformations
     * const personalInformation = await prisma.personalInformation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PersonalInformationUpdateManyArgs>(args: SelectSubset<T, PersonalInformationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PersonalInformations and returns the data updated in the database.
     * @param {PersonalInformationUpdateManyAndReturnArgs} args - Arguments to update many PersonalInformations.
     * @example
     * // Update many PersonalInformations
     * const personalInformation = await prisma.personalInformation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PersonalInformations and only return the `id`
     * const personalInformationWithIdOnly = await prisma.personalInformation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PersonalInformationUpdateManyAndReturnArgs>(args: SelectSubset<T, PersonalInformationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one PersonalInformation.
     * @param {PersonalInformationUpsertArgs} args - Arguments to update or create a PersonalInformation.
     * @example
     * // Update or create a PersonalInformation
     * const personalInformation = await prisma.personalInformation.upsert({
     *   create: {
     *     // ... data to create a PersonalInformation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PersonalInformation we want to update
     *   }
     * })
     */
    upsert<T extends PersonalInformationUpsertArgs>(args: SelectSubset<T, PersonalInformationUpsertArgs<ExtArgs>>): Prisma__PersonalInformationClient<$Result.GetResult<Prisma.$PersonalInformationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of PersonalInformations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationCountArgs} args - Arguments to filter PersonalInformations to count.
     * @example
     * // Count the number of PersonalInformations
     * const count = await prisma.personalInformation.count({
     *   where: {
     *     // ... the filter for the PersonalInformations we want to count
     *   }
     * })
    **/
    count<T extends PersonalInformationCountArgs>(
      args?: Subset<T, PersonalInformationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PersonalInformationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PersonalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PersonalInformationAggregateArgs>(args: Subset<T, PersonalInformationAggregateArgs>): Prisma.PrismaPromise<GetPersonalInformationAggregateType<T>>

    /**
     * Group by PersonalInformation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PersonalInformationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PersonalInformationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PersonalInformationGroupByArgs['orderBy'] }
        : { orderBy?: PersonalInformationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PersonalInformationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPersonalInformationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PersonalInformation model
   */
  readonly fields: PersonalInformationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PersonalInformation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PersonalInformationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cvs<T extends PersonalInformation$cvsArgs<ExtArgs> = {}>(args?: Subset<T, PersonalInformation$cvsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PersonalInformation model
   */ 
  interface PersonalInformationFieldRefs {
    readonly id: FieldRef<"PersonalInformation", 'String'>
    readonly firstName: FieldRef<"PersonalInformation", 'String'>
    readonly lastName: FieldRef<"PersonalInformation", 'String'>
    readonly email: FieldRef<"PersonalInformation", 'String'>
    readonly phone: FieldRef<"PersonalInformation", 'String'>
    readonly location: FieldRef<"PersonalInformation", 'String'>
    readonly linkedinUrl: FieldRef<"PersonalInformation", 'String'>
    readonly githubUrl: FieldRef<"PersonalInformation", 'String'>
    readonly personalWebsite: FieldRef<"PersonalInformation", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PersonalInformation findUnique
   */
  export type PersonalInformationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where: PersonalInformationWhereUniqueInput
  }

  /**
   * PersonalInformation findUniqueOrThrow
   */
  export type PersonalInformationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where: PersonalInformationWhereUniqueInput
  }

  /**
   * PersonalInformation findFirst
   */
  export type PersonalInformationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInformations.
     */
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }

  /**
   * PersonalInformation findFirstOrThrow
   */
  export type PersonalInformationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformation to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PersonalInformations.
     */
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }

  /**
   * PersonalInformation findMany
   */
  export type PersonalInformationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter, which PersonalInformations to fetch.
     */
    where?: PersonalInformationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PersonalInformations to fetch.
     */
    orderBy?: PersonalInformationOrderByWithRelationInput | PersonalInformationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PersonalInformations.
     */
    cursor?: PersonalInformationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PersonalInformations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PersonalInformations.
     */
    skip?: number
    distinct?: PersonalInformationScalarFieldEnum | PersonalInformationScalarFieldEnum[]
  }

  /**
   * PersonalInformation create
   */
  export type PersonalInformationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The data needed to create a PersonalInformation.
     */
    data: XOR<PersonalInformationCreateInput, PersonalInformationUncheckedCreateInput>
  }

  /**
   * PersonalInformation createMany
   */
  export type PersonalInformationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PersonalInformations.
     */
    data: PersonalInformationCreateManyInput | PersonalInformationCreateManyInput[]
  }

  /**
   * PersonalInformation createManyAndReturn
   */
  export type PersonalInformationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * The data used to create many PersonalInformations.
     */
    data: PersonalInformationCreateManyInput | PersonalInformationCreateManyInput[]
  }

  /**
   * PersonalInformation update
   */
  export type PersonalInformationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The data needed to update a PersonalInformation.
     */
    data: XOR<PersonalInformationUpdateInput, PersonalInformationUncheckedUpdateInput>
    /**
     * Choose, which PersonalInformation to update.
     */
    where: PersonalInformationWhereUniqueInput
  }

  /**
   * PersonalInformation updateMany
   */
  export type PersonalInformationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PersonalInformations.
     */
    data: XOR<PersonalInformationUpdateManyMutationInput, PersonalInformationUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInformations to update
     */
    where?: PersonalInformationWhereInput
    /**
     * Limit how many PersonalInformations to update.
     */
    limit?: number
  }

  /**
   * PersonalInformation updateManyAndReturn
   */
  export type PersonalInformationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * The data used to update PersonalInformations.
     */
    data: XOR<PersonalInformationUpdateManyMutationInput, PersonalInformationUncheckedUpdateManyInput>
    /**
     * Filter which PersonalInformations to update
     */
    where?: PersonalInformationWhereInput
    /**
     * Limit how many PersonalInformations to update.
     */
    limit?: number
  }

  /**
   * PersonalInformation upsert
   */
  export type PersonalInformationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * The filter to search for the PersonalInformation to update in case it exists.
     */
    where: PersonalInformationWhereUniqueInput
    /**
     * In case the PersonalInformation found by the `where` argument doesn't exist, create a new PersonalInformation with this data.
     */
    create: XOR<PersonalInformationCreateInput, PersonalInformationUncheckedCreateInput>
    /**
     * In case the PersonalInformation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PersonalInformationUpdateInput, PersonalInformationUncheckedUpdateInput>
  }

  /**
   * PersonalInformation delete
   */
  export type PersonalInformationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
    /**
     * Filter which PersonalInformation to delete.
     */
    where: PersonalInformationWhereUniqueInput
  }

  /**
   * PersonalInformation deleteMany
   */
  export type PersonalInformationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PersonalInformations to delete
     */
    where?: PersonalInformationWhereInput
    /**
     * Limit how many PersonalInformations to delete.
     */
    limit?: number
  }

  /**
   * PersonalInformation.cvs
   */
  export type PersonalInformation$cvsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    where?: CVWhereInput
    orderBy?: CVOrderByWithRelationInput | CVOrderByWithRelationInput[]
    cursor?: CVWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CVScalarFieldEnum | CVScalarFieldEnum[]
  }

  /**
   * PersonalInformation without action
   */
  export type PersonalInformationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PersonalInformation
     */
    select?: PersonalInformationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PersonalInformation
     */
    omit?: PersonalInformationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PersonalInformationInclude<ExtArgs> | null
  }


  /**
   * Model Summary
   */

  export type AggregateSummary = {
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  export type SummaryMinAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type SummaryMaxAggregateOutputType = {
    id: string | null
    text: string | null
  }

  export type SummaryCountAggregateOutputType = {
    id: number
    text: number
    _all: number
  }


  export type SummaryMinAggregateInputType = {
    id?: true
    text?: true
  }

  export type SummaryMaxAggregateInputType = {
    id?: true
    text?: true
  }

  export type SummaryCountAggregateInputType = {
    id?: true
    text?: true
    _all?: true
  }

  export type SummaryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summary to aggregate.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Summaries
    **/
    _count?: true | SummaryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SummaryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SummaryMaxAggregateInputType
  }

  export type GetSummaryAggregateType<T extends SummaryAggregateArgs> = {
        [P in keyof T & keyof AggregateSummary]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSummary[P]>
      : GetScalarType<T[P], AggregateSummary[P]>
  }




  export type SummaryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SummaryWhereInput
    orderBy?: SummaryOrderByWithAggregationInput | SummaryOrderByWithAggregationInput[]
    by: SummaryScalarFieldEnum[] | SummaryScalarFieldEnum
    having?: SummaryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SummaryCountAggregateInputType | true
    _min?: SummaryMinAggregateInputType
    _max?: SummaryMaxAggregateInputType
  }

  export type SummaryGroupByOutputType = {
    id: string
    text: string
    _count: SummaryCountAggregateOutputType | null
    _min: SummaryMinAggregateOutputType | null
    _max: SummaryMaxAggregateOutputType | null
  }

  type GetSummaryGroupByPayload<T extends SummaryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SummaryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SummaryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SummaryGroupByOutputType[P]>
            : GetScalarType<T[P], SummaryGroupByOutputType[P]>
        }
      >
    >


  export type SummarySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
    CV?: boolean | Summary$CVArgs<ExtArgs>
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    text?: boolean
  }, ExtArgs["result"]["summary"]>

  export type SummarySelectScalar = {
    id?: boolean
    text?: boolean
  }

  export type SummaryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "text", ExtArgs["result"]["summary"]>
  export type SummaryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | Summary$CVArgs<ExtArgs>
  }
  export type SummaryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SummaryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SummaryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Summary"
    objects: {
      CV: Prisma.$CVPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      text: string
    }, ExtArgs["result"]["summary"]>
    composites: {}
  }

  type SummaryGetPayload<S extends boolean | null | undefined | SummaryDefaultArgs> = $Result.GetResult<Prisma.$SummaryPayload, S>

  type SummaryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SummaryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SummaryCountAggregateInputType | true
    }

  export interface SummaryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Summary'], meta: { name: 'Summary' } }
    /**
     * Find zero or one Summary that matches the filter.
     * @param {SummaryFindUniqueArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SummaryFindUniqueArgs>(args: SelectSubset<T, SummaryFindUniqueArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Summary that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SummaryFindUniqueOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SummaryFindUniqueOrThrowArgs>(args: SelectSubset<T, SummaryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Summary that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SummaryFindFirstArgs>(args?: SelectSubset<T, SummaryFindFirstArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Summary that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindFirstOrThrowArgs} args - Arguments to find a Summary
     * @example
     * // Get one Summary
     * const summary = await prisma.summary.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SummaryFindFirstOrThrowArgs>(args?: SelectSubset<T, SummaryFindFirstOrThrowArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Summaries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Summaries
     * const summaries = await prisma.summary.findMany()
     * 
     * // Get first 10 Summaries
     * const summaries = await prisma.summary.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const summaryWithIdOnly = await prisma.summary.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SummaryFindManyArgs>(args?: SelectSubset<T, SummaryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Summary.
     * @param {SummaryCreateArgs} args - Arguments to create a Summary.
     * @example
     * // Create one Summary
     * const Summary = await prisma.summary.create({
     *   data: {
     *     // ... data to create a Summary
     *   }
     * })
     * 
     */
    create<T extends SummaryCreateArgs>(args: SelectSubset<T, SummaryCreateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Summaries.
     * @param {SummaryCreateManyArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SummaryCreateManyArgs>(args?: SelectSubset<T, SummaryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Summaries and returns the data saved in the database.
     * @param {SummaryCreateManyAndReturnArgs} args - Arguments to create many Summaries.
     * @example
     * // Create many Summaries
     * const summary = await prisma.summary.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SummaryCreateManyAndReturnArgs>(args?: SelectSubset<T, SummaryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Summary.
     * @param {SummaryDeleteArgs} args - Arguments to delete one Summary.
     * @example
     * // Delete one Summary
     * const Summary = await prisma.summary.delete({
     *   where: {
     *     // ... filter to delete one Summary
     *   }
     * })
     * 
     */
    delete<T extends SummaryDeleteArgs>(args: SelectSubset<T, SummaryDeleteArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Summary.
     * @param {SummaryUpdateArgs} args - Arguments to update one Summary.
     * @example
     * // Update one Summary
     * const summary = await prisma.summary.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SummaryUpdateArgs>(args: SelectSubset<T, SummaryUpdateArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Summaries.
     * @param {SummaryDeleteManyArgs} args - Arguments to filter Summaries to delete.
     * @example
     * // Delete a few Summaries
     * const { count } = await prisma.summary.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SummaryDeleteManyArgs>(args?: SelectSubset<T, SummaryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SummaryUpdateManyArgs>(args: SelectSubset<T, SummaryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Summaries and returns the data updated in the database.
     * @param {SummaryUpdateManyAndReturnArgs} args - Arguments to update many Summaries.
     * @example
     * // Update many Summaries
     * const summary = await prisma.summary.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Summaries and only return the `id`
     * const summaryWithIdOnly = await prisma.summary.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SummaryUpdateManyAndReturnArgs>(args: SelectSubset<T, SummaryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Summary.
     * @param {SummaryUpsertArgs} args - Arguments to update or create a Summary.
     * @example
     * // Update or create a Summary
     * const summary = await prisma.summary.upsert({
     *   create: {
     *     // ... data to create a Summary
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Summary we want to update
     *   }
     * })
     */
    upsert<T extends SummaryUpsertArgs>(args: SelectSubset<T, SummaryUpsertArgs<ExtArgs>>): Prisma__SummaryClient<$Result.GetResult<Prisma.$SummaryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Summaries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryCountArgs} args - Arguments to filter Summaries to count.
     * @example
     * // Count the number of Summaries
     * const count = await prisma.summary.count({
     *   where: {
     *     // ... the filter for the Summaries we want to count
     *   }
     * })
    **/
    count<T extends SummaryCountArgs>(
      args?: Subset<T, SummaryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SummaryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SummaryAggregateArgs>(args: Subset<T, SummaryAggregateArgs>): Prisma.PrismaPromise<GetSummaryAggregateType<T>>

    /**
     * Group by Summary.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SummaryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SummaryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SummaryGroupByArgs['orderBy'] }
        : { orderBy?: SummaryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SummaryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSummaryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Summary model
   */
  readonly fields: SummaryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Summary.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SummaryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CV<T extends Summary$CVArgs<ExtArgs> = {}>(args?: Subset<T, Summary$CVArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | null, null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Summary model
   */ 
  interface SummaryFieldRefs {
    readonly id: FieldRef<"Summary", 'String'>
    readonly text: FieldRef<"Summary", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Summary findUnique
   */
  export type SummaryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findUniqueOrThrow
   */
  export type SummaryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary findFirst
   */
  export type SummaryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findFirstOrThrow
   */
  export type SummaryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summary to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Summaries.
     */
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary findMany
   */
  export type SummaryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter, which Summaries to fetch.
     */
    where?: SummaryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Summaries to fetch.
     */
    orderBy?: SummaryOrderByWithRelationInput | SummaryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Summaries.
     */
    cursor?: SummaryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Summaries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Summaries.
     */
    skip?: number
    distinct?: SummaryScalarFieldEnum | SummaryScalarFieldEnum[]
  }

  /**
   * Summary create
   */
  export type SummaryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to create a Summary.
     */
    data: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
  }

  /**
   * Summary createMany
   */
  export type SummaryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
  }

  /**
   * Summary createManyAndReturn
   */
  export type SummaryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * The data used to create many Summaries.
     */
    data: SummaryCreateManyInput | SummaryCreateManyInput[]
  }

  /**
   * Summary update
   */
  export type SummaryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The data needed to update a Summary.
     */
    data: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
    /**
     * Choose, which Summary to update.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary updateMany
   */
  export type SummaryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to update.
     */
    limit?: number
  }

  /**
   * Summary updateManyAndReturn
   */
  export type SummaryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * The data used to update Summaries.
     */
    data: XOR<SummaryUpdateManyMutationInput, SummaryUncheckedUpdateManyInput>
    /**
     * Filter which Summaries to update
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to update.
     */
    limit?: number
  }

  /**
   * Summary upsert
   */
  export type SummaryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * The filter to search for the Summary to update in case it exists.
     */
    where: SummaryWhereUniqueInput
    /**
     * In case the Summary found by the `where` argument doesn't exist, create a new Summary with this data.
     */
    create: XOR<SummaryCreateInput, SummaryUncheckedCreateInput>
    /**
     * In case the Summary was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SummaryUpdateInput, SummaryUncheckedUpdateInput>
  }

  /**
   * Summary delete
   */
  export type SummaryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
    /**
     * Filter which Summary to delete.
     */
    where: SummaryWhereUniqueInput
  }

  /**
   * Summary deleteMany
   */
  export type SummaryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Summaries to delete
     */
    where?: SummaryWhereInput
    /**
     * Limit how many Summaries to delete.
     */
    limit?: number
  }

  /**
   * Summary.CV
   */
  export type Summary$CVArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CV
     */
    select?: CVSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CV
     */
    omit?: CVOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CVInclude<ExtArgs> | null
    where?: CVWhereInput
  }

  /**
   * Summary without action
   */
  export type SummaryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Summary
     */
    select?: SummarySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Summary
     */
    omit?: SummaryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SummaryInclude<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    jobTitle: string | null
    company: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cvId: string | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    jobTitle: string | null
    company: string | null
    location: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cvId: string | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    jobTitle: number
    company: number
    location: number
    startDate: number
    endDate: number
    description: number
    cvId: number
    _all: number
  }


  export type ExperienceMinAggregateInputType = {
    id?: true
    jobTitle?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    jobTitle?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    jobTitle?: true
    company?: true
    location?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    jobTitle: string
    company: string
    location: string | null
    startDate: Date
    endDate: Date | null
    description: string
    cvId: string
    _count: ExperienceCountAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    jobTitle?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    jobTitle?: boolean
    company?: boolean
    location?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "jobTitle" | "company" | "location" | "startDate" | "endDate" | "description" | "cvId", ExtArgs["result"]["experience"]>
  export type ExperienceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type ExperienceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {
      CV: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      jobTitle: string
      company: string
      location: string | null
      startDate: Date
      endDate: Date | null
      description: string
      cvId: string
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CV<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Experience model
   */ 
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly jobTitle: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly startDate: FieldRef<"Experience", 'DateTime'>
    readonly endDate: FieldRef<"Experience", 'DateTime'>
    readonly description: FieldRef<"Experience", 'String'>
    readonly cvId: FieldRef<"Experience", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExperienceInclude<ExtArgs> | null
  }


  /**
   * Model Education
   */

  export type AggregateEducation = {
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  export type EducationMinAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    major: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cvId: string | null
  }

  export type EducationMaxAggregateOutputType = {
    id: string | null
    institution: string | null
    degree: string | null
    major: string | null
    startDate: Date | null
    endDate: Date | null
    description: string | null
    cvId: string | null
  }

  export type EducationCountAggregateOutputType = {
    id: number
    institution: number
    degree: number
    major: number
    startDate: number
    endDate: number
    description: number
    cvId: number
    _all: number
  }


  export type EducationMinAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    major?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
  }

  export type EducationMaxAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    major?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
  }

  export type EducationCountAggregateInputType = {
    id?: true
    institution?: true
    degree?: true
    major?: true
    startDate?: true
    endDate?: true
    description?: true
    cvId?: true
    _all?: true
  }

  export type EducationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Education to aggregate.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Educations
    **/
    _count?: true | EducationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EducationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EducationMaxAggregateInputType
  }

  export type GetEducationAggregateType<T extends EducationAggregateArgs> = {
        [P in keyof T & keyof AggregateEducation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEducation[P]>
      : GetScalarType<T[P], AggregateEducation[P]>
  }




  export type EducationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EducationWhereInput
    orderBy?: EducationOrderByWithAggregationInput | EducationOrderByWithAggregationInput[]
    by: EducationScalarFieldEnum[] | EducationScalarFieldEnum
    having?: EducationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EducationCountAggregateInputType | true
    _min?: EducationMinAggregateInputType
    _max?: EducationMaxAggregateInputType
  }

  export type EducationGroupByOutputType = {
    id: string
    institution: string
    degree: string
    major: string | null
    startDate: Date
    endDate: Date | null
    description: string | null
    cvId: string
    _count: EducationCountAggregateOutputType | null
    _min: EducationMinAggregateOutputType | null
    _max: EducationMaxAggregateOutputType | null
  }

  type GetEducationGroupByPayload<T extends EducationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EducationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EducationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EducationGroupByOutputType[P]>
            : GetScalarType<T[P], EducationGroupByOutputType[P]>
        }
      >
    >


  export type EducationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    major?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    major?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    institution?: boolean
    degree?: boolean
    major?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["education"]>

  export type EducationSelectScalar = {
    id?: boolean
    institution?: boolean
    degree?: boolean
    major?: boolean
    startDate?: boolean
    endDate?: boolean
    description?: boolean
    cvId?: boolean
  }

  export type EducationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "institution" | "degree" | "major" | "startDate" | "endDate" | "description" | "cvId", ExtArgs["result"]["education"]>
  export type EducationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type EducationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type EducationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $EducationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Education"
    objects: {
      CV: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      institution: string
      degree: string
      major: string | null
      startDate: Date
      endDate: Date | null
      description: string | null
      cvId: string
    }, ExtArgs["result"]["education"]>
    composites: {}
  }

  type EducationGetPayload<S extends boolean | null | undefined | EducationDefaultArgs> = $Result.GetResult<Prisma.$EducationPayload, S>

  type EducationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EducationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EducationCountAggregateInputType | true
    }

  export interface EducationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Education'], meta: { name: 'Education' } }
    /**
     * Find zero or one Education that matches the filter.
     * @param {EducationFindUniqueArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EducationFindUniqueArgs>(args: SelectSubset<T, EducationFindUniqueArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Education that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EducationFindUniqueOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EducationFindUniqueOrThrowArgs>(args: SelectSubset<T, EducationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Education that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EducationFindFirstArgs>(args?: SelectSubset<T, EducationFindFirstArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Education that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindFirstOrThrowArgs} args - Arguments to find a Education
     * @example
     * // Get one Education
     * const education = await prisma.education.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EducationFindFirstOrThrowArgs>(args?: SelectSubset<T, EducationFindFirstOrThrowArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Educations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Educations
     * const educations = await prisma.education.findMany()
     * 
     * // Get first 10 Educations
     * const educations = await prisma.education.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const educationWithIdOnly = await prisma.education.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EducationFindManyArgs>(args?: SelectSubset<T, EducationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Education.
     * @param {EducationCreateArgs} args - Arguments to create a Education.
     * @example
     * // Create one Education
     * const Education = await prisma.education.create({
     *   data: {
     *     // ... data to create a Education
     *   }
     * })
     * 
     */
    create<T extends EducationCreateArgs>(args: SelectSubset<T, EducationCreateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Educations.
     * @param {EducationCreateManyArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EducationCreateManyArgs>(args?: SelectSubset<T, EducationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Educations and returns the data saved in the database.
     * @param {EducationCreateManyAndReturnArgs} args - Arguments to create many Educations.
     * @example
     * // Create many Educations
     * const education = await prisma.education.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EducationCreateManyAndReturnArgs>(args?: SelectSubset<T, EducationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Education.
     * @param {EducationDeleteArgs} args - Arguments to delete one Education.
     * @example
     * // Delete one Education
     * const Education = await prisma.education.delete({
     *   where: {
     *     // ... filter to delete one Education
     *   }
     * })
     * 
     */
    delete<T extends EducationDeleteArgs>(args: SelectSubset<T, EducationDeleteArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Education.
     * @param {EducationUpdateArgs} args - Arguments to update one Education.
     * @example
     * // Update one Education
     * const education = await prisma.education.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EducationUpdateArgs>(args: SelectSubset<T, EducationUpdateArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Educations.
     * @param {EducationDeleteManyArgs} args - Arguments to filter Educations to delete.
     * @example
     * // Delete a few Educations
     * const { count } = await prisma.education.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EducationDeleteManyArgs>(args?: SelectSubset<T, EducationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EducationUpdateManyArgs>(args: SelectSubset<T, EducationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Educations and returns the data updated in the database.
     * @param {EducationUpdateManyAndReturnArgs} args - Arguments to update many Educations.
     * @example
     * // Update many Educations
     * const education = await prisma.education.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Educations and only return the `id`
     * const educationWithIdOnly = await prisma.education.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EducationUpdateManyAndReturnArgs>(args: SelectSubset<T, EducationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Education.
     * @param {EducationUpsertArgs} args - Arguments to update or create a Education.
     * @example
     * // Update or create a Education
     * const education = await prisma.education.upsert({
     *   create: {
     *     // ... data to create a Education
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Education we want to update
     *   }
     * })
     */
    upsert<T extends EducationUpsertArgs>(args: SelectSubset<T, EducationUpsertArgs<ExtArgs>>): Prisma__EducationClient<$Result.GetResult<Prisma.$EducationPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Educations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationCountArgs} args - Arguments to filter Educations to count.
     * @example
     * // Count the number of Educations
     * const count = await prisma.education.count({
     *   where: {
     *     // ... the filter for the Educations we want to count
     *   }
     * })
    **/
    count<T extends EducationCountArgs>(
      args?: Subset<T, EducationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EducationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EducationAggregateArgs>(args: Subset<T, EducationAggregateArgs>): Prisma.PrismaPromise<GetEducationAggregateType<T>>

    /**
     * Group by Education.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EducationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EducationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EducationGroupByArgs['orderBy'] }
        : { orderBy?: EducationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EducationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEducationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Education model
   */
  readonly fields: EducationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Education.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EducationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CV<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Education model
   */ 
  interface EducationFieldRefs {
    readonly id: FieldRef<"Education", 'String'>
    readonly institution: FieldRef<"Education", 'String'>
    readonly degree: FieldRef<"Education", 'String'>
    readonly major: FieldRef<"Education", 'String'>
    readonly startDate: FieldRef<"Education", 'DateTime'>
    readonly endDate: FieldRef<"Education", 'DateTime'>
    readonly description: FieldRef<"Education", 'String'>
    readonly cvId: FieldRef<"Education", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Education findUnique
   */
  export type EducationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findUniqueOrThrow
   */
  export type EducationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education findFirst
   */
  export type EducationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findFirstOrThrow
   */
  export type EducationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Education to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Educations.
     */
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education findMany
   */
  export type EducationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter, which Educations to fetch.
     */
    where?: EducationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Educations to fetch.
     */
    orderBy?: EducationOrderByWithRelationInput | EducationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Educations.
     */
    cursor?: EducationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Educations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Educations.
     */
    skip?: number
    distinct?: EducationScalarFieldEnum | EducationScalarFieldEnum[]
  }

  /**
   * Education create
   */
  export type EducationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to create a Education.
     */
    data: XOR<EducationCreateInput, EducationUncheckedCreateInput>
  }

  /**
   * Education createMany
   */
  export type EducationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
  }

  /**
   * Education createManyAndReturn
   */
  export type EducationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to create many Educations.
     */
    data: EducationCreateManyInput | EducationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education update
   */
  export type EducationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The data needed to update a Education.
     */
    data: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
    /**
     * Choose, which Education to update.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education updateMany
   */
  export type EducationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
  }

  /**
   * Education updateManyAndReturn
   */
  export type EducationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * The data used to update Educations.
     */
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyInput>
    /**
     * Filter which Educations to update
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Education upsert
   */
  export type EducationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * The filter to search for the Education to update in case it exists.
     */
    where: EducationWhereUniqueInput
    /**
     * In case the Education found by the `where` argument doesn't exist, create a new Education with this data.
     */
    create: XOR<EducationCreateInput, EducationUncheckedCreateInput>
    /**
     * In case the Education was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EducationUpdateInput, EducationUncheckedUpdateInput>
  }

  /**
   * Education delete
   */
  export type EducationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
    /**
     * Filter which Education to delete.
     */
    where: EducationWhereUniqueInput
  }

  /**
   * Education deleteMany
   */
  export type EducationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Educations to delete
     */
    where?: EducationWhereInput
    /**
     * Limit how many Educations to delete.
     */
    limit?: number
  }

  /**
   * Education without action
   */
  export type EducationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Education
     */
    select?: EducationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Education
     */
    omit?: EducationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EducationInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: string | null
    cvId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: string | null
    cvId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    level: number
    cvId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    cvId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    cvId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    cvId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    level: string | null
    cvId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    cvId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "cvId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      CV: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: string | null
      cvId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CV<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */ 
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly level: FieldRef<"Skill", 'String'>
    readonly cvId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    technologies: string | null
    liveUrl: string | null
    githubUrl: string | null
    cvId: string | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    technologies: string | null
    liveUrl: string | null
    githubUrl: string | null
    cvId: string | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    name: number
    description: number
    technologies: number
    liveUrl: number
    githubUrl: number
    cvId: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    technologies?: true
    liveUrl?: true
    githubUrl?: true
    cvId?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    technologies?: true
    liveUrl?: true
    githubUrl?: true
    cvId?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    technologies?: true
    liveUrl?: true
    githubUrl?: true
    cvId?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    name: string
    description: string
    technologies: string
    liveUrl: string | null
    githubUrl: string | null
    cvId: string
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    technologies?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    technologies?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    technologies?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    cvId?: boolean
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    technologies?: boolean
    liveUrl?: boolean
    githubUrl?: boolean
    cvId?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "technologies" | "liveUrl" | "githubUrl" | "cvId", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    CV?: boolean | CVDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      CV: Prisma.$CVPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      technologies: string
      liveUrl: string | null
      githubUrl: string | null
      cvId: string
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    CV<T extends CVDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CVDefaultArgs<ExtArgs>>): Prisma__CVClient<$Result.GetResult<Prisma.$CVPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */ 
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly name: FieldRef<"Project", 'String'>
    readonly description: FieldRef<"Project", 'String'>
    readonly technologies: FieldRef<"Project", 'String'>
    readonly liveUrl: FieldRef<"Project", 'String'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly cvId: FieldRef<"Project", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CVScalarFieldEnum: {
    id: 'id',
    personalInformationId: 'personalInformationId',
    summaryId: 'summaryId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CVScalarFieldEnum = (typeof CVScalarFieldEnum)[keyof typeof CVScalarFieldEnum]


  export const PersonalInformationScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    location: 'location',
    linkedinUrl: 'linkedinUrl',
    githubUrl: 'githubUrl',
    personalWebsite: 'personalWebsite'
  };

  export type PersonalInformationScalarFieldEnum = (typeof PersonalInformationScalarFieldEnum)[keyof typeof PersonalInformationScalarFieldEnum]


  export const SummaryScalarFieldEnum: {
    id: 'id',
    text: 'text'
  };

  export type SummaryScalarFieldEnum = (typeof SummaryScalarFieldEnum)[keyof typeof SummaryScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    jobTitle: 'jobTitle',
    company: 'company',
    location: 'location',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    cvId: 'cvId'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const EducationScalarFieldEnum: {
    id: 'id',
    institution: 'institution',
    degree: 'degree',
    major: 'major',
    startDate: 'startDate',
    endDate: 'endDate',
    description: 'description',
    cvId: 'cvId'
  };

  export type EducationScalarFieldEnum = (typeof EducationScalarFieldEnum)[keyof typeof EducationScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    cvId: 'cvId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    technologies: 'technologies',
    liveUrl: 'liveUrl',
    githubUrl: 'githubUrl',
    cvId: 'cvId'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type CVWhereInput = {
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    id?: StringFilter<"CV"> | string
    personalInformationId?: StringFilter<"CV"> | string
    summaryId?: StringFilter<"CV"> | string
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
    personalInformation?: XOR<PersonalInformationScalarRelationFilter, PersonalInformationWhereInput>
    summary?: XOR<SummaryScalarRelationFilter, SummaryWhereInput>
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    skills?: SkillListRelationFilter
    projects?: ProjectListRelationFilter
  }

  export type CVOrderByWithRelationInput = {
    id?: SortOrder
    personalInformationId?: SortOrder
    summaryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    personalInformation?: PersonalInformationOrderByWithRelationInput
    summary?: SummaryOrderByWithRelationInput
    experience?: ExperienceOrderByRelationAggregateInput
    education?: EducationOrderByRelationAggregateInput
    skills?: SkillOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
  }

  export type CVWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    personalInformationId?: string
    summaryId?: string
    AND?: CVWhereInput | CVWhereInput[]
    OR?: CVWhereInput[]
    NOT?: CVWhereInput | CVWhereInput[]
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
    personalInformation?: XOR<PersonalInformationScalarRelationFilter, PersonalInformationWhereInput>
    summary?: XOR<SummaryScalarRelationFilter, SummaryWhereInput>
    experience?: ExperienceListRelationFilter
    education?: EducationListRelationFilter
    skills?: SkillListRelationFilter
    projects?: ProjectListRelationFilter
  }, "id" | "personalInformationId" | "summaryId">

  export type CVOrderByWithAggregationInput = {
    id?: SortOrder
    personalInformationId?: SortOrder
    summaryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CVCountOrderByAggregateInput
    _max?: CVMaxOrderByAggregateInput
    _min?: CVMinOrderByAggregateInput
  }

  export type CVScalarWhereWithAggregatesInput = {
    AND?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    OR?: CVScalarWhereWithAggregatesInput[]
    NOT?: CVScalarWhereWithAggregatesInput | CVScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CV"> | string
    personalInformationId?: StringWithAggregatesFilter<"CV"> | string
    summaryId?: StringWithAggregatesFilter<"CV"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CV"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CV"> | Date | string
  }

  export type PersonalInformationWhereInput = {
    AND?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    OR?: PersonalInformationWhereInput[]
    NOT?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    id?: StringFilter<"PersonalInformation"> | string
    firstName?: StringFilter<"PersonalInformation"> | string
    lastName?: StringFilter<"PersonalInformation"> | string
    email?: StringFilter<"PersonalInformation"> | string
    phone?: StringFilter<"PersonalInformation"> | string
    location?: StringFilter<"PersonalInformation"> | string
    linkedinUrl?: StringNullableFilter<"PersonalInformation"> | string | null
    githubUrl?: StringNullableFilter<"PersonalInformation"> | string | null
    personalWebsite?: StringNullableFilter<"PersonalInformation"> | string | null
    cvs?: CVListRelationFilter
  }

  export type PersonalInformationOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    personalWebsite?: SortOrderInput | SortOrder
    cvs?: CVOrderByRelationAggregateInput
  }

  export type PersonalInformationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    OR?: PersonalInformationWhereInput[]
    NOT?: PersonalInformationWhereInput | PersonalInformationWhereInput[]
    firstName?: StringFilter<"PersonalInformation"> | string
    lastName?: StringFilter<"PersonalInformation"> | string
    email?: StringFilter<"PersonalInformation"> | string
    phone?: StringFilter<"PersonalInformation"> | string
    location?: StringFilter<"PersonalInformation"> | string
    linkedinUrl?: StringNullableFilter<"PersonalInformation"> | string | null
    githubUrl?: StringNullableFilter<"PersonalInformation"> | string | null
    personalWebsite?: StringNullableFilter<"PersonalInformation"> | string | null
    cvs?: CVListRelationFilter
  }, "id">

  export type PersonalInformationOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    personalWebsite?: SortOrderInput | SortOrder
    _count?: PersonalInformationCountOrderByAggregateInput
    _max?: PersonalInformationMaxOrderByAggregateInput
    _min?: PersonalInformationMinOrderByAggregateInput
  }

  export type PersonalInformationScalarWhereWithAggregatesInput = {
    AND?: PersonalInformationScalarWhereWithAggregatesInput | PersonalInformationScalarWhereWithAggregatesInput[]
    OR?: PersonalInformationScalarWhereWithAggregatesInput[]
    NOT?: PersonalInformationScalarWhereWithAggregatesInput | PersonalInformationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PersonalInformation"> | string
    firstName?: StringWithAggregatesFilter<"PersonalInformation"> | string
    lastName?: StringWithAggregatesFilter<"PersonalInformation"> | string
    email?: StringWithAggregatesFilter<"PersonalInformation"> | string
    phone?: StringWithAggregatesFilter<"PersonalInformation"> | string
    location?: StringWithAggregatesFilter<"PersonalInformation"> | string
    linkedinUrl?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
    personalWebsite?: StringNullableWithAggregatesFilter<"PersonalInformation"> | string | null
  }

  export type SummaryWhereInput = {
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    id?: StringFilter<"Summary"> | string
    text?: StringFilter<"Summary"> | string
    CV?: XOR<CVNullableScalarRelationFilter, CVWhereInput> | null
  }

  export type SummaryOrderByWithRelationInput = {
    id?: SortOrder
    text?: SortOrder
    CV?: CVOrderByWithRelationInput
  }

  export type SummaryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SummaryWhereInput | SummaryWhereInput[]
    OR?: SummaryWhereInput[]
    NOT?: SummaryWhereInput | SummaryWhereInput[]
    text?: StringFilter<"Summary"> | string
    CV?: XOR<CVNullableScalarRelationFilter, CVWhereInput> | null
  }, "id">

  export type SummaryOrderByWithAggregationInput = {
    id?: SortOrder
    text?: SortOrder
    _count?: SummaryCountOrderByAggregateInput
    _max?: SummaryMaxOrderByAggregateInput
    _min?: SummaryMinOrderByAggregateInput
  }

  export type SummaryScalarWhereWithAggregatesInput = {
    AND?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    OR?: SummaryScalarWhereWithAggregatesInput[]
    NOT?: SummaryScalarWhereWithAggregatesInput | SummaryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Summary"> | string
    text?: StringWithAggregatesFilter<"Summary"> | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    jobTitle?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    cvId?: StringFilter<"Experience"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    cvId?: SortOrder
    CV?: CVOrderByWithRelationInput
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    jobTitle?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    cvId?: StringFilter<"Experience"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrder
    cvId?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    jobTitle?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    location?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    description?: StringWithAggregatesFilter<"Experience"> | string
    cvId?: StringWithAggregatesFilter<"Experience"> | string
  }

  export type EducationWhereInput = {
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    description?: StringNullableFilter<"Education"> | string | null
    cvId?: StringFilter<"Education"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }

  export type EducationOrderByWithRelationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    major?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    cvId?: SortOrder
    CV?: CVOrderByWithRelationInput
  }

  export type EducationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EducationWhereInput | EducationWhereInput[]
    OR?: EducationWhereInput[]
    NOT?: EducationWhereInput | EducationWhereInput[]
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    description?: StringNullableFilter<"Education"> | string | null
    cvId?: StringFilter<"Education"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }, "id">

  export type EducationOrderByWithAggregationInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    major?: SortOrderInput | SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    cvId?: SortOrder
    _count?: EducationCountOrderByAggregateInput
    _max?: EducationMaxOrderByAggregateInput
    _min?: EducationMinOrderByAggregateInput
  }

  export type EducationScalarWhereWithAggregatesInput = {
    AND?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    OR?: EducationScalarWhereWithAggregatesInput[]
    NOT?: EducationScalarWhereWithAggregatesInput | EducationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Education"> | string
    institution?: StringWithAggregatesFilter<"Education"> | string
    degree?: StringWithAggregatesFilter<"Education"> | string
    major?: StringNullableWithAggregatesFilter<"Education"> | string | null
    startDate?: DateTimeWithAggregatesFilter<"Education"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Education"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"Education"> | string | null
    cvId?: StringWithAggregatesFilter<"Education"> | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: StringNullableFilter<"Skill"> | string | null
    cvId?: StringFilter<"Skill"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrderInput | SortOrder
    cvId?: SortOrder
    CV?: CVOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    level?: StringNullableFilter<"Skill"> | string | null
    cvId?: StringFilter<"Skill"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrderInput | SortOrder
    cvId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    level?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    cvId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    cvId?: StringFilter<"Project"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    cvId?: SortOrder
    CV?: CVOrderByWithRelationInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    cvId?: StringFilter<"Project"> | string
    CV?: XOR<CVScalarRelationFilter, CVWhereInput>
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    liveUrl?: SortOrderInput | SortOrder
    githubUrl?: SortOrderInput | SortOrder
    cvId?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    name?: StringWithAggregatesFilter<"Project"> | string
    description?: StringWithAggregatesFilter<"Project"> | string
    technologies?: StringWithAggregatesFilter<"Project"> | string
    liveUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    githubUrl?: StringNullableWithAggregatesFilter<"Project"> | string | null
    cvId?: StringWithAggregatesFilter<"Project"> | string
  }

  export type CVCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    summary: SummaryCreateNestedOneWithoutCVInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVCreateManyInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CVUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PersonalInformationCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string | null
    githubUrl?: string | null
    personalWebsite?: string | null
    cvs?: CVCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string | null
    githubUrl?: string | null
    personalWebsite?: string | null
    cvs?: CVUncheckedCreateNestedManyWithoutPersonalInformationInput
  }

  export type PersonalInformationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    cvs?: CVUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
    cvs?: CVUncheckedUpdateManyWithoutPersonalInformationNestedInput
  }

  export type PersonalInformationCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string | null
    githubUrl?: string | null
    personalWebsite?: string | null
  }

  export type PersonalInformationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalInformationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryCreateInput = {
    id?: string
    text: string
    CV?: CVCreateNestedOneWithoutSummaryInput
  }

  export type SummaryUncheckedCreateInput = {
    id?: string
    text: string
    CV?: CVUncheckedCreateNestedOneWithoutSummaryInput
  }

  export type SummaryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    CV?: CVUpdateOneWithoutSummaryNestedInput
  }

  export type SummaryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    CV?: CVUncheckedUpdateOneWithoutSummaryNestedInput
  }

  export type SummaryCreateManyInput = {
    id?: string
    text: string
  }

  export type SummaryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SummaryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    CV: CVCreateNestedOneWithoutExperienceInput
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    cvId: string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    CV?: CVUpdateOneRequiredWithoutExperienceNestedInput
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
    cvId: string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    CV: CVCreateNestedOneWithoutEducationInput
  }

  export type EducationUncheckedCreateInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    cvId: string
  }

  export type EducationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    CV?: CVUpdateOneRequiredWithoutEducationNestedInput
  }

  export type EducationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type EducationCreateManyInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
    cvId: string
  }

  export type EducationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    level?: string | null
    CV: CVCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    level?: string | null
    cvId: string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    CV?: CVUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    level?: string | null
    cvId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
    CV: CVCreateNestedOneWithoutProjectsInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
    cvId: string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    CV?: CVUpdateOneRequiredWithoutProjectsNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
    cvId: string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    cvId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type PersonalInformationScalarRelationFilter = {
    is?: PersonalInformationWhereInput
    isNot?: PersonalInformationWhereInput
  }

  export type SummaryScalarRelationFilter = {
    is?: SummaryWhereInput
    isNot?: SummaryWhereInput
  }

  export type ExperienceListRelationFilter = {
    every?: ExperienceWhereInput
    some?: ExperienceWhereInput
    none?: ExperienceWhereInput
  }

  export type EducationListRelationFilter = {
    every?: EducationWhereInput
    some?: EducationWhereInput
    none?: EducationWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ExperienceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EducationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CVCountOrderByAggregateInput = {
    id?: SortOrder
    personalInformationId?: SortOrder
    summaryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVMaxOrderByAggregateInput = {
    id?: SortOrder
    personalInformationId?: SortOrder
    summaryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CVMinOrderByAggregateInput = {
    id?: SortOrder
    personalInformationId?: SortOrder
    summaryId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type CVListRelationFilter = {
    every?: CVWhereInput
    some?: CVWhereInput
    none?: CVWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CVOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PersonalInformationCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    personalWebsite?: SortOrder
  }

  export type PersonalInformationMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    personalWebsite?: SortOrder
  }

  export type PersonalInformationMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    linkedinUrl?: SortOrder
    githubUrl?: SortOrder
    personalWebsite?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CVNullableScalarRelationFilter = {
    is?: CVWhereInput | null
    isNot?: CVWhereInput | null
  }

  export type SummaryCountOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type SummaryMaxOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type SummaryMinOrderByAggregateInput = {
    id?: SortOrder
    text?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CVScalarRelationFilter = {
    is?: CVWhereInput
    isNot?: CVWhereInput
  }

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    jobTitle?: SortOrder
    company?: SortOrder
    location?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EducationCountOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type EducationMaxOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type EducationMinOrderByAggregateInput = {
    id?: SortOrder
    institution?: SortOrder
    degree?: SortOrder
    major?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    description?: SortOrder
    cvId?: SortOrder
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    cvId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    cvId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    cvId?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    cvId?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    cvId?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    technologies?: SortOrder
    liveUrl?: SortOrder
    githubUrl?: SortOrder
    cvId?: SortOrder
  }

  export type PersonalInformationCreateNestedOneWithoutCvsInput = {
    create?: XOR<PersonalInformationCreateWithoutCvsInput, PersonalInformationUncheckedCreateWithoutCvsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvsInput
    connect?: PersonalInformationWhereUniqueInput
  }

  export type SummaryCreateNestedOneWithoutCVInput = {
    create?: XOR<SummaryCreateWithoutCVInput, SummaryUncheckedCreateWithoutCVInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutCVInput
    connect?: SummaryWhereUniqueInput
  }

  export type ExperienceCreateNestedManyWithoutCVInput = {
    create?: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput> | ExperienceCreateWithoutCVInput[] | ExperienceUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput | ExperienceCreateOrConnectWithoutCVInput[]
    createMany?: ExperienceCreateManyCVInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationCreateNestedManyWithoutCVInput = {
    create?: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput> | EducationCreateWithoutCVInput[] | EducationUncheckedCreateWithoutCVInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCVInput | EducationCreateOrConnectWithoutCVInput[]
    createMany?: EducationCreateManyCVInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type SkillCreateNestedManyWithoutCVInput = {
    create?: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput> | SkillCreateWithoutCVInput[] | SkillUncheckedCreateWithoutCVInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCVInput | SkillCreateOrConnectWithoutCVInput[]
    createMany?: SkillCreateManyCVInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutCVInput = {
    create?: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput> | ProjectCreateWithoutCVInput[] | ProjectUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | ProjectCreateOrConnectWithoutCVInput[]
    createMany?: ProjectCreateManyCVInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ExperienceUncheckedCreateNestedManyWithoutCVInput = {
    create?: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput> | ExperienceCreateWithoutCVInput[] | ExperienceUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput | ExperienceCreateOrConnectWithoutCVInput[]
    createMany?: ExperienceCreateManyCVInputEnvelope
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
  }

  export type EducationUncheckedCreateNestedManyWithoutCVInput = {
    create?: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput> | EducationCreateWithoutCVInput[] | EducationUncheckedCreateWithoutCVInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCVInput | EducationCreateOrConnectWithoutCVInput[]
    createMany?: EducationCreateManyCVInputEnvelope
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutCVInput = {
    create?: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput> | SkillCreateWithoutCVInput[] | SkillUncheckedCreateWithoutCVInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCVInput | SkillCreateOrConnectWithoutCVInput[]
    createMany?: SkillCreateManyCVInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutCVInput = {
    create?: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput> | ProjectCreateWithoutCVInput[] | ProjectUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | ProjectCreateOrConnectWithoutCVInput[]
    createMany?: ProjectCreateManyCVInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PersonalInformationUpdateOneRequiredWithoutCvsNestedInput = {
    create?: XOR<PersonalInformationCreateWithoutCvsInput, PersonalInformationUncheckedCreateWithoutCvsInput>
    connectOrCreate?: PersonalInformationCreateOrConnectWithoutCvsInput
    upsert?: PersonalInformationUpsertWithoutCvsInput
    connect?: PersonalInformationWhereUniqueInput
    update?: XOR<XOR<PersonalInformationUpdateToOneWithWhereWithoutCvsInput, PersonalInformationUpdateWithoutCvsInput>, PersonalInformationUncheckedUpdateWithoutCvsInput>
  }

  export type SummaryUpdateOneRequiredWithoutCVNestedInput = {
    create?: XOR<SummaryCreateWithoutCVInput, SummaryUncheckedCreateWithoutCVInput>
    connectOrCreate?: SummaryCreateOrConnectWithoutCVInput
    upsert?: SummaryUpsertWithoutCVInput
    connect?: SummaryWhereUniqueInput
    update?: XOR<XOR<SummaryUpdateToOneWithWhereWithoutCVInput, SummaryUpdateWithoutCVInput>, SummaryUncheckedUpdateWithoutCVInput>
  }

  export type ExperienceUpdateManyWithoutCVNestedInput = {
    create?: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput> | ExperienceCreateWithoutCVInput[] | ExperienceUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput | ExperienceCreateOrConnectWithoutCVInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCVInput | ExperienceUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: ExperienceCreateManyCVInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCVInput | ExperienceUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCVInput | ExperienceUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUpdateManyWithoutCVNestedInput = {
    create?: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput> | EducationCreateWithoutCVInput[] | EducationUncheckedCreateWithoutCVInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCVInput | EducationCreateOrConnectWithoutCVInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCVInput | EducationUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: EducationCreateManyCVInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCVInput | EducationUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCVInput | EducationUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type SkillUpdateManyWithoutCVNestedInput = {
    create?: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput> | SkillCreateWithoutCVInput[] | SkillUncheckedCreateWithoutCVInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCVInput | SkillCreateOrConnectWithoutCVInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCVInput | SkillUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: SkillCreateManyCVInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCVInput | SkillUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCVInput | SkillUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutCVNestedInput = {
    create?: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput> | ProjectCreateWithoutCVInput[] | ProjectUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | ProjectCreateOrConnectWithoutCVInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCVInput | ProjectUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: ProjectCreateManyCVInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCVInput | ProjectUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCVInput | ProjectUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ExperienceUncheckedUpdateManyWithoutCVNestedInput = {
    create?: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput> | ExperienceCreateWithoutCVInput[] | ExperienceUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ExperienceCreateOrConnectWithoutCVInput | ExperienceCreateOrConnectWithoutCVInput[]
    upsert?: ExperienceUpsertWithWhereUniqueWithoutCVInput | ExperienceUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: ExperienceCreateManyCVInputEnvelope
    set?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    disconnect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    delete?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    connect?: ExperienceWhereUniqueInput | ExperienceWhereUniqueInput[]
    update?: ExperienceUpdateWithWhereUniqueWithoutCVInput | ExperienceUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: ExperienceUpdateManyWithWhereWithoutCVInput | ExperienceUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
  }

  export type EducationUncheckedUpdateManyWithoutCVNestedInput = {
    create?: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput> | EducationCreateWithoutCVInput[] | EducationUncheckedCreateWithoutCVInput[]
    connectOrCreate?: EducationCreateOrConnectWithoutCVInput | EducationCreateOrConnectWithoutCVInput[]
    upsert?: EducationUpsertWithWhereUniqueWithoutCVInput | EducationUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: EducationCreateManyCVInputEnvelope
    set?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    disconnect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    delete?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    connect?: EducationWhereUniqueInput | EducationWhereUniqueInput[]
    update?: EducationUpdateWithWhereUniqueWithoutCVInput | EducationUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: EducationUpdateManyWithWhereWithoutCVInput | EducationUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: EducationScalarWhereInput | EducationScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutCVNestedInput = {
    create?: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput> | SkillCreateWithoutCVInput[] | SkillUncheckedCreateWithoutCVInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutCVInput | SkillCreateOrConnectWithoutCVInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutCVInput | SkillUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: SkillCreateManyCVInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutCVInput | SkillUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutCVInput | SkillUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutCVNestedInput = {
    create?: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput> | ProjectCreateWithoutCVInput[] | ProjectUncheckedCreateWithoutCVInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutCVInput | ProjectCreateOrConnectWithoutCVInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutCVInput | ProjectUpsertWithWhereUniqueWithoutCVInput[]
    createMany?: ProjectCreateManyCVInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutCVInput | ProjectUpdateWithWhereUniqueWithoutCVInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutCVInput | ProjectUpdateManyWithWhereWithoutCVInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type CVCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput> | CVCreateWithoutPersonalInformationInput[] | CVUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | CVCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: CVCreateManyPersonalInformationInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type CVUncheckedCreateNestedManyWithoutPersonalInformationInput = {
    create?: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput> | CVCreateWithoutPersonalInformationInput[] | CVUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | CVCreateOrConnectWithoutPersonalInformationInput[]
    createMany?: CVCreateManyPersonalInformationInputEnvelope
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type CVUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput> | CVCreateWithoutPersonalInformationInput[] | CVUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | CVCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutPersonalInformationInput | CVUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: CVCreateManyPersonalInformationInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutPersonalInformationInput | CVUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: CVUpdateManyWithWhereWithoutPersonalInformationInput | CVUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type CVUncheckedUpdateManyWithoutPersonalInformationNestedInput = {
    create?: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput> | CVCreateWithoutPersonalInformationInput[] | CVUncheckedCreateWithoutPersonalInformationInput[]
    connectOrCreate?: CVCreateOrConnectWithoutPersonalInformationInput | CVCreateOrConnectWithoutPersonalInformationInput[]
    upsert?: CVUpsertWithWhereUniqueWithoutPersonalInformationInput | CVUpsertWithWhereUniqueWithoutPersonalInformationInput[]
    createMany?: CVCreateManyPersonalInformationInputEnvelope
    set?: CVWhereUniqueInput | CVWhereUniqueInput[]
    disconnect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    delete?: CVWhereUniqueInput | CVWhereUniqueInput[]
    connect?: CVWhereUniqueInput | CVWhereUniqueInput[]
    update?: CVUpdateWithWhereUniqueWithoutPersonalInformationInput | CVUpdateWithWhereUniqueWithoutPersonalInformationInput[]
    updateMany?: CVUpdateManyWithWhereWithoutPersonalInformationInput | CVUpdateManyWithWhereWithoutPersonalInformationInput[]
    deleteMany?: CVScalarWhereInput | CVScalarWhereInput[]
  }

  export type CVCreateNestedOneWithoutSummaryInput = {
    create?: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: CVCreateOrConnectWithoutSummaryInput
    connect?: CVWhereUniqueInput
  }

  export type CVUncheckedCreateNestedOneWithoutSummaryInput = {
    create?: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: CVCreateOrConnectWithoutSummaryInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneWithoutSummaryNestedInput = {
    create?: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: CVCreateOrConnectWithoutSummaryInput
    upsert?: CVUpsertWithoutSummaryInput
    disconnect?: CVWhereInput | boolean
    delete?: CVWhereInput | boolean
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutSummaryInput, CVUpdateWithoutSummaryInput>, CVUncheckedUpdateWithoutSummaryInput>
  }

  export type CVUncheckedUpdateOneWithoutSummaryNestedInput = {
    create?: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
    connectOrCreate?: CVCreateOrConnectWithoutSummaryInput
    upsert?: CVUpsertWithoutSummaryInput
    disconnect?: CVWhereInput | boolean
    delete?: CVWhereInput | boolean
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutSummaryInput, CVUpdateWithoutSummaryInput>, CVUncheckedUpdateWithoutSummaryInput>
  }

  export type CVCreateNestedOneWithoutExperienceInput = {
    create?: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CVCreateOrConnectWithoutExperienceInput
    connect?: CVWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CVUpdateOneRequiredWithoutExperienceNestedInput = {
    create?: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    connectOrCreate?: CVCreateOrConnectWithoutExperienceInput
    upsert?: CVUpsertWithoutExperienceInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutExperienceInput, CVUpdateWithoutExperienceInput>, CVUncheckedUpdateWithoutExperienceInput>
  }

  export type CVCreateNestedOneWithoutEducationInput = {
    create?: XOR<CVCreateWithoutEducationInput, CVUncheckedCreateWithoutEducationInput>
    connectOrCreate?: CVCreateOrConnectWithoutEducationInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutEducationNestedInput = {
    create?: XOR<CVCreateWithoutEducationInput, CVUncheckedCreateWithoutEducationInput>
    connectOrCreate?: CVCreateOrConnectWithoutEducationInput
    upsert?: CVUpsertWithoutEducationInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutEducationInput, CVUpdateWithoutEducationInput>, CVUncheckedUpdateWithoutEducationInput>
  }

  export type CVCreateNestedOneWithoutSkillsInput = {
    create?: XOR<CVCreateWithoutSkillsInput, CVUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: CVCreateOrConnectWithoutSkillsInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<CVCreateWithoutSkillsInput, CVUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: CVCreateOrConnectWithoutSkillsInput
    upsert?: CVUpsertWithoutSkillsInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutSkillsInput, CVUpdateWithoutSkillsInput>, CVUncheckedUpdateWithoutSkillsInput>
  }

  export type CVCreateNestedOneWithoutProjectsInput = {
    create?: XOR<CVCreateWithoutProjectsInput, CVUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CVCreateOrConnectWithoutProjectsInput
    connect?: CVWhereUniqueInput
  }

  export type CVUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<CVCreateWithoutProjectsInput, CVUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: CVCreateOrConnectWithoutProjectsInput
    upsert?: CVUpsertWithoutProjectsInput
    connect?: CVWhereUniqueInput
    update?: XOR<XOR<CVUpdateToOneWithWhereWithoutProjectsInput, CVUpdateWithoutProjectsInput>, CVUncheckedUpdateWithoutProjectsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PersonalInformationCreateWithoutCvsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string | null
    githubUrl?: string | null
    personalWebsite?: string | null
  }

  export type PersonalInformationUncheckedCreateWithoutCvsInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    phone: string
    location: string
    linkedinUrl?: string | null
    githubUrl?: string | null
    personalWebsite?: string | null
  }

  export type PersonalInformationCreateOrConnectWithoutCvsInput = {
    where: PersonalInformationWhereUniqueInput
    create: XOR<PersonalInformationCreateWithoutCvsInput, PersonalInformationUncheckedCreateWithoutCvsInput>
  }

  export type SummaryCreateWithoutCVInput = {
    id?: string
    text: string
  }

  export type SummaryUncheckedCreateWithoutCVInput = {
    id?: string
    text: string
  }

  export type SummaryCreateOrConnectWithoutCVInput = {
    where: SummaryWhereUniqueInput
    create: XOR<SummaryCreateWithoutCVInput, SummaryUncheckedCreateWithoutCVInput>
  }

  export type ExperienceCreateWithoutCVInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type ExperienceUncheckedCreateWithoutCVInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type ExperienceCreateOrConnectWithoutCVInput = {
    where: ExperienceWhereUniqueInput
    create: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput>
  }

  export type ExperienceCreateManyCVInputEnvelope = {
    data: ExperienceCreateManyCVInput | ExperienceCreateManyCVInput[]
  }

  export type EducationCreateWithoutCVInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type EducationUncheckedCreateWithoutCVInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type EducationCreateOrConnectWithoutCVInput = {
    where: EducationWhereUniqueInput
    create: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput>
  }

  export type EducationCreateManyCVInputEnvelope = {
    data: EducationCreateManyCVInput | EducationCreateManyCVInput[]
  }

  export type SkillCreateWithoutCVInput = {
    id?: string
    name: string
    level?: string | null
  }

  export type SkillUncheckedCreateWithoutCVInput = {
    id?: string
    name: string
    level?: string | null
  }

  export type SkillCreateOrConnectWithoutCVInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput>
  }

  export type SkillCreateManyCVInputEnvelope = {
    data: SkillCreateManyCVInput | SkillCreateManyCVInput[]
  }

  export type ProjectCreateWithoutCVInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
  }

  export type ProjectUncheckedCreateWithoutCVInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
  }

  export type ProjectCreateOrConnectWithoutCVInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput>
  }

  export type ProjectCreateManyCVInputEnvelope = {
    data: ProjectCreateManyCVInput | ProjectCreateManyCVInput[]
  }

  export type PersonalInformationUpsertWithoutCvsInput = {
    update: XOR<PersonalInformationUpdateWithoutCvsInput, PersonalInformationUncheckedUpdateWithoutCvsInput>
    create: XOR<PersonalInformationCreateWithoutCvsInput, PersonalInformationUncheckedCreateWithoutCvsInput>
    where?: PersonalInformationWhereInput
  }

  export type PersonalInformationUpdateToOneWithWhereWithoutCvsInput = {
    where?: PersonalInformationWhereInput
    data: XOR<PersonalInformationUpdateWithoutCvsInput, PersonalInformationUncheckedUpdateWithoutCvsInput>
  }

  export type PersonalInformationUpdateWithoutCvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PersonalInformationUncheckedUpdateWithoutCvsInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    linkedinUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
    personalWebsite?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SummaryUpsertWithoutCVInput = {
    update: XOR<SummaryUpdateWithoutCVInput, SummaryUncheckedUpdateWithoutCVInput>
    create: XOR<SummaryCreateWithoutCVInput, SummaryUncheckedCreateWithoutCVInput>
    where?: SummaryWhereInput
  }

  export type SummaryUpdateToOneWithWhereWithoutCVInput = {
    where?: SummaryWhereInput
    data: XOR<SummaryUpdateWithoutCVInput, SummaryUncheckedUpdateWithoutCVInput>
  }

  export type SummaryUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type SummaryUncheckedUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUpsertWithWhereUniqueWithoutCVInput = {
    where: ExperienceWhereUniqueInput
    update: XOR<ExperienceUpdateWithoutCVInput, ExperienceUncheckedUpdateWithoutCVInput>
    create: XOR<ExperienceCreateWithoutCVInput, ExperienceUncheckedCreateWithoutCVInput>
  }

  export type ExperienceUpdateWithWhereUniqueWithoutCVInput = {
    where: ExperienceWhereUniqueInput
    data: XOR<ExperienceUpdateWithoutCVInput, ExperienceUncheckedUpdateWithoutCVInput>
  }

  export type ExperienceUpdateManyWithWhereWithoutCVInput = {
    where: ExperienceScalarWhereInput
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyWithoutCVInput>
  }

  export type ExperienceScalarWhereInput = {
    AND?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    OR?: ExperienceScalarWhereInput[]
    NOT?: ExperienceScalarWhereInput | ExperienceScalarWhereInput[]
    id?: StringFilter<"Experience"> | string
    jobTitle?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    startDate?: DateTimeFilter<"Experience"> | Date | string
    endDate?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description?: StringFilter<"Experience"> | string
    cvId?: StringFilter<"Experience"> | string
  }

  export type EducationUpsertWithWhereUniqueWithoutCVInput = {
    where: EducationWhereUniqueInput
    update: XOR<EducationUpdateWithoutCVInput, EducationUncheckedUpdateWithoutCVInput>
    create: XOR<EducationCreateWithoutCVInput, EducationUncheckedCreateWithoutCVInput>
  }

  export type EducationUpdateWithWhereUniqueWithoutCVInput = {
    where: EducationWhereUniqueInput
    data: XOR<EducationUpdateWithoutCVInput, EducationUncheckedUpdateWithoutCVInput>
  }

  export type EducationUpdateManyWithWhereWithoutCVInput = {
    where: EducationScalarWhereInput
    data: XOR<EducationUpdateManyMutationInput, EducationUncheckedUpdateManyWithoutCVInput>
  }

  export type EducationScalarWhereInput = {
    AND?: EducationScalarWhereInput | EducationScalarWhereInput[]
    OR?: EducationScalarWhereInput[]
    NOT?: EducationScalarWhereInput | EducationScalarWhereInput[]
    id?: StringFilter<"Education"> | string
    institution?: StringFilter<"Education"> | string
    degree?: StringFilter<"Education"> | string
    major?: StringNullableFilter<"Education"> | string | null
    startDate?: DateTimeFilter<"Education"> | Date | string
    endDate?: DateTimeNullableFilter<"Education"> | Date | string | null
    description?: StringNullableFilter<"Education"> | string | null
    cvId?: StringFilter<"Education"> | string
  }

  export type SkillUpsertWithWhereUniqueWithoutCVInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutCVInput, SkillUncheckedUpdateWithoutCVInput>
    create: XOR<SkillCreateWithoutCVInput, SkillUncheckedCreateWithoutCVInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutCVInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutCVInput, SkillUncheckedUpdateWithoutCVInput>
  }

  export type SkillUpdateManyWithWhereWithoutCVInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutCVInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: StringNullableFilter<"Skill"> | string | null
    cvId?: StringFilter<"Skill"> | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutCVInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutCVInput, ProjectUncheckedUpdateWithoutCVInput>
    create: XOR<ProjectCreateWithoutCVInput, ProjectUncheckedCreateWithoutCVInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutCVInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutCVInput, ProjectUncheckedUpdateWithoutCVInput>
  }

  export type ProjectUpdateManyWithWhereWithoutCVInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutCVInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    name?: StringFilter<"Project"> | string
    description?: StringFilter<"Project"> | string
    technologies?: StringFilter<"Project"> | string
    liveUrl?: StringNullableFilter<"Project"> | string | null
    githubUrl?: StringNullableFilter<"Project"> | string | null
    cvId?: StringFilter<"Project"> | string
  }

  export type CVCreateWithoutPersonalInformationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    summary: SummaryCreateNestedOneWithoutCVInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutPersonalInformationInput = {
    id?: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutPersonalInformationInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput>
  }

  export type CVCreateManyPersonalInformationInputEnvelope = {
    data: CVCreateManyPersonalInformationInput | CVCreateManyPersonalInformationInput[]
  }

  export type CVUpsertWithWhereUniqueWithoutPersonalInformationInput = {
    where: CVWhereUniqueInput
    update: XOR<CVUpdateWithoutPersonalInformationInput, CVUncheckedUpdateWithoutPersonalInformationInput>
    create: XOR<CVCreateWithoutPersonalInformationInput, CVUncheckedCreateWithoutPersonalInformationInput>
  }

  export type CVUpdateWithWhereUniqueWithoutPersonalInformationInput = {
    where: CVWhereUniqueInput
    data: XOR<CVUpdateWithoutPersonalInformationInput, CVUncheckedUpdateWithoutPersonalInformationInput>
  }

  export type CVUpdateManyWithWhereWithoutPersonalInformationInput = {
    where: CVScalarWhereInput
    data: XOR<CVUpdateManyMutationInput, CVUncheckedUpdateManyWithoutPersonalInformationInput>
  }

  export type CVScalarWhereInput = {
    AND?: CVScalarWhereInput | CVScalarWhereInput[]
    OR?: CVScalarWhereInput[]
    NOT?: CVScalarWhereInput | CVScalarWhereInput[]
    id?: StringFilter<"CV"> | string
    personalInformationId?: StringFilter<"CV"> | string
    summaryId?: StringFilter<"CV"> | string
    createdAt?: DateTimeFilter<"CV"> | Date | string
    updatedAt?: DateTimeFilter<"CV"> | Date | string
  }

  export type CVCreateWithoutSummaryInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutSummaryInput = {
    id?: string
    personalInformationId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutSummaryInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
  }

  export type CVUpsertWithoutSummaryInput = {
    update: XOR<CVUpdateWithoutSummaryInput, CVUncheckedUpdateWithoutSummaryInput>
    create: XOR<CVCreateWithoutSummaryInput, CVUncheckedCreateWithoutSummaryInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutSummaryInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutSummaryInput, CVUncheckedUpdateWithoutSummaryInput>
  }

  export type CVUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutSummaryInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVCreateWithoutExperienceInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    summary: SummaryCreateNestedOneWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutExperienceInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutExperienceInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
  }

  export type CVUpsertWithoutExperienceInput = {
    update: XOR<CVUpdateWithoutExperienceInput, CVUncheckedUpdateWithoutExperienceInput>
    create: XOR<CVCreateWithoutExperienceInput, CVUncheckedCreateWithoutExperienceInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutExperienceInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutExperienceInput, CVUncheckedUpdateWithoutExperienceInput>
  }

  export type CVUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutExperienceInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVCreateWithoutEducationInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    summary: SummaryCreateNestedOneWithoutCVInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutEducationInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutEducationInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutEducationInput, CVUncheckedCreateWithoutEducationInput>
  }

  export type CVUpsertWithoutEducationInput = {
    update: XOR<CVUpdateWithoutEducationInput, CVUncheckedUpdateWithoutEducationInput>
    create: XOR<CVCreateWithoutEducationInput, CVUncheckedCreateWithoutEducationInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutEducationInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutEducationInput, CVUncheckedUpdateWithoutEducationInput>
  }

  export type CVUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutEducationInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVCreateWithoutSkillsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    summary: SummaryCreateNestedOneWithoutCVInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    projects?: ProjectCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutSkillsInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    projects?: ProjectUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutSkillsInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutSkillsInput, CVUncheckedCreateWithoutSkillsInput>
  }

  export type CVUpsertWithoutSkillsInput = {
    update: XOR<CVUpdateWithoutSkillsInput, CVUncheckedUpdateWithoutSkillsInput>
    create: XOR<CVCreateWithoutSkillsInput, CVUncheckedCreateWithoutSkillsInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutSkillsInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutSkillsInput, CVUncheckedUpdateWithoutSkillsInput>
  }

  export type CVUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVCreateWithoutProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    personalInformation: PersonalInformationCreateNestedOneWithoutCvsInput
    summary: SummaryCreateNestedOneWithoutCVInput
    experience?: ExperienceCreateNestedManyWithoutCVInput
    education?: EducationCreateNestedManyWithoutCVInput
    skills?: SkillCreateNestedManyWithoutCVInput
  }

  export type CVUncheckedCreateWithoutProjectsInput = {
    id?: string
    personalInformationId: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    experience?: ExperienceUncheckedCreateNestedManyWithoutCVInput
    education?: EducationUncheckedCreateNestedManyWithoutCVInput
    skills?: SkillUncheckedCreateNestedManyWithoutCVInput
  }

  export type CVCreateOrConnectWithoutProjectsInput = {
    where: CVWhereUniqueInput
    create: XOR<CVCreateWithoutProjectsInput, CVUncheckedCreateWithoutProjectsInput>
  }

  export type CVUpsertWithoutProjectsInput = {
    update: XOR<CVUpdateWithoutProjectsInput, CVUncheckedUpdateWithoutProjectsInput>
    create: XOR<CVCreateWithoutProjectsInput, CVUncheckedCreateWithoutProjectsInput>
    where?: CVWhereInput
  }

  export type CVUpdateToOneWithWhereWithoutProjectsInput = {
    where?: CVWhereInput
    data: XOR<CVUpdateWithoutProjectsInput, CVUncheckedUpdateWithoutProjectsInput>
  }

  export type CVUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    personalInformation?: PersonalInformationUpdateOneRequiredWithoutCvsNestedInput
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    personalInformationId?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
  }

  export type ExperienceCreateManyCVInput = {
    id?: string
    jobTitle: string
    company: string
    location?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description: string
  }

  export type EducationCreateManyCVInput = {
    id?: string
    institution: string
    degree: string
    major?: string | null
    startDate: Date | string
    endDate?: Date | string | null
    description?: string | null
  }

  export type SkillCreateManyCVInput = {
    id?: string
    name: string
    level?: string | null
  }

  export type ProjectCreateManyCVInput = {
    id?: string
    name: string
    description: string
    technologies: string
    liveUrl?: string | null
    githubUrl?: string | null
  }

  export type ExperienceUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ExperienceUncheckedUpdateManyWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: StringFieldUpdateOperationsInput | string
  }

  export type EducationUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EducationUncheckedUpdateManyWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    institution?: StringFieldUpdateOperationsInput | string
    degree?: StringFieldUpdateOperationsInput | string
    major?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillUncheckedUpdateManyWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProjectUncheckedUpdateManyWithoutCVInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    technologies?: StringFieldUpdateOperationsInput | string
    liveUrl?: NullableStringFieldUpdateOperationsInput | string | null
    githubUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CVCreateManyPersonalInformationInput = {
    id?: string
    summaryId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CVUpdateWithoutPersonalInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: SummaryUpdateOneRequiredWithoutCVNestedInput
    experience?: ExperienceUpdateManyWithoutCVNestedInput
    education?: EducationUpdateManyWithoutCVNestedInput
    skills?: SkillUpdateManyWithoutCVNestedInput
    projects?: ProjectUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateWithoutPersonalInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    experience?: ExperienceUncheckedUpdateManyWithoutCVNestedInput
    education?: EducationUncheckedUpdateManyWithoutCVNestedInput
    skills?: SkillUncheckedUpdateManyWithoutCVNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutCVNestedInput
  }

  export type CVUncheckedUpdateManyWithoutPersonalInformationInput = {
    id?: StringFieldUpdateOperationsInput | string
    summaryId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}