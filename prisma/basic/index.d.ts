
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  loginId: string
  loginPw: string | null
  username: string
  loginType: LoginType
  userType: UserType
  nickname: string
  phone: string
  isDisable: boolean
}

/**
 * Model Notice
 * 
 */
export type Notice = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  userId: number
}

/**
 * Model Board
 * 
 */
export type Board = {
  id: number
  createdAt: Date
  title: string
  content: string | null
  link: string | null
  startDay: Date
  endDay: Date
  isDisable: boolean
  userId: number
  boardType: BoardType
}

/**
 * Model BoardImage
 * 
 */
export type BoardImage = {
  id: number
  createdAt: Date
  url: string
  width: number
  height: number
  size: number
  isThumb: boolean
  boardId: number
}

/**
 * Model BoardReply
 * 
 */
export type BoardReply = {
  id: number
  createdAt: Date
  updatedAt: Date | null
  content: string
  isDisable: boolean
  userId: number
  boardId: number
  boardReplyId: number | null
  boardType: BoardType
}


/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export const LoginType: {
  LOCAL: 'LOCAL',
  ADMIN: 'ADMIN'
};

export type LoginType = (typeof LoginType)[keyof typeof LoginType]


export const UserType: {
  GENERAL: 'GENERAL',
  BUSINESS: 'BUSINESS',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const BoardType: {
  BTALK: 'BTALK',
  BINFORM: 'BINFORM',
  BQUESTION: 'BQUESTION'
};

export type BoardType = (typeof BoardType)[keyof typeof BoardType]


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.notice`: Exposes CRUD operations for the **Notice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notices
    * const notices = await prisma.notice.findMany()
    * ```
    */
  get notice(): Prisma.NoticeDelegate<GlobalReject>;

  /**
   * `prisma.board`: Exposes CRUD operations for the **Board** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Boards
    * const boards = await prisma.board.findMany()
    * ```
    */
  get board(): Prisma.BoardDelegate<GlobalReject>;

  /**
   * `prisma.boardImage`: Exposes CRUD operations for the **BoardImage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardImages
    * const boardImages = await prisma.boardImage.findMany()
    * ```
    */
  get boardImage(): Prisma.BoardImageDelegate<GlobalReject>;

  /**
   * `prisma.boardReply`: Exposes CRUD operations for the **BoardReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BoardReplies
    * const boardReplies = await prisma.boardReply.findMany()
    * ```
    */
  get boardReply(): Prisma.BoardReplyDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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
   * Prisma Client JS version: 3.15.2
   * Query Engine version: 461d6a05159055555eb7dfb337c9fb271cbd4d7e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: 'DbNull'

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: 'JsonNull'

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: 'AnyNull'

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    User: 'User',
    Notice: 'Notice',
    Board: 'Board',
    BoardImage: 'BoardImage',
    BoardReply: 'BoardReply'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Board: number
    BoardReply: number
    Notice: number
  }

  export type UserCountOutputTypeSelect = {
    Board?: boolean
    BoardReply?: boolean
    Notice?: boolean
  }

  export type UserCountOutputTypeGetPayload<
    S extends boolean | null | undefined | UserCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? UserCountOutputType
    : S extends undefined
    ? never
    : S extends UserCountOutputTypeArgs
    ?'include' extends U
    ? UserCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
    : UserCountOutputType
  : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     * 
    **/
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardCountOutputType
   */


  export type BoardCountOutputType = {
    BoardImage: number
    BoardReply: number
  }

  export type BoardCountOutputTypeSelect = {
    BoardImage?: boolean
    BoardReply?: boolean
  }

  export type BoardCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BoardCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BoardCountOutputType
    : S extends undefined
    ? never
    : S extends BoardCountOutputTypeArgs
    ?'include' extends U
    ? BoardCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BoardCountOutputType ? BoardCountOutputType[P] : never
  } 
    : BoardCountOutputType
  : BoardCountOutputType




  // Custom InputTypes

  /**
   * BoardCountOutputType without action
   */
  export type BoardCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardCountOutputType
     * 
    **/
    select?: BoardCountOutputTypeSelect | null
  }



  /**
   * Count Type BoardReplyCountOutputType
   */


  export type BoardReplyCountOutputType = {
    BoardNestedReply: number
  }

  export type BoardReplyCountOutputTypeSelect = {
    BoardNestedReply?: boolean
  }

  export type BoardReplyCountOutputTypeGetPayload<
    S extends boolean | null | undefined | BoardReplyCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? BoardReplyCountOutputType
    : S extends undefined
    ? never
    : S extends BoardReplyCountOutputTypeArgs
    ?'include' extends U
    ? BoardReplyCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof BoardReplyCountOutputType ? BoardReplyCountOutputType[P] : never
  } 
    : BoardReplyCountOutputType
  : BoardReplyCountOutputType




  // Custom InputTypes

  /**
   * BoardReplyCountOutputType without action
   */
  export type BoardReplyCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the BoardReplyCountOutputType
     * 
    **/
    select?: BoardReplyCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    phone: string | null
    isDisable: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    loginId: string | null
    loginPw: string | null
    username: string | null
    loginType: LoginType | null
    userType: UserType | null
    nickname: string | null
    phone: string | null
    isDisable: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    loginId: number
    loginPw: number
    username: number
    loginType: number
    userType: number
    nickname: number
    phone: number
    isDisable: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    loginId?: true
    loginPw?: true
    username?: true
    loginType?: true
    userType?: true
    nickname?: true
    phone?: true
    isDisable?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: Array<UserScalarFieldEnum>
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    loginId: string
    loginPw: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone: string
    isDisable: boolean
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    loginId?: boolean
    loginPw?: boolean
    username?: boolean
    loginType?: boolean
    userType?: boolean
    nickname?: boolean
    phone?: boolean
    isDisable?: boolean
    Board?: boolean | BoardFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    Notice?: boolean | NoticeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserInclude = {
    Board?: boolean | BoardFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    Notice?: boolean | NoticeFindManyArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<
    S extends boolean | null | undefined | UserArgs,
    U = keyof S
      > = S extends true
        ? User
    : S extends undefined
    ? never
    : S extends UserArgs | UserFindManyArgs
    ?'include' extends U
    ? User  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Board' ? Array < BoardGetPayload<S['include'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'Notice' ? Array < NoticeGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Board' ? Array < BoardGetPayload<S['select'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'Notice' ? Array < NoticeGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
    : User
  : User


  type UserCountArgs = Merge<
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }
  >

  export interface UserDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>> : CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<User>>, PrismaPromise<Array<UserGetPayload<T>>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): CheckSelect<T, Prisma__UserClient<User>, Prisma__UserClient<UserGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Board<T extends BoardFindManyArgs = {}>(args?: Subset<T, BoardFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Board>>, PrismaPromise<Array<BoardGetPayload<T>>>>;

    BoardReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    Notice<T extends NoticeFindManyArgs = {}>(args?: Subset<T, NoticeFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Notice>>, PrismaPromise<Array<NoticeGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Throw an Error if a User can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which User to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     * 
    **/
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     * 
    **/
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     * 
    **/
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     * 
    **/
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     * 
    **/
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     * 
    **/
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     * 
    **/
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     * 
    **/
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     * 
    **/
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UserInclude | null
  }



  /**
   * Model Notice
   */


  export type AggregateNotice = {
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  export type NoticeAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NoticeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    userId: number | null
  }

  export type NoticeCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    userId: number
    _all: number
  }


  export type NoticeAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NoticeMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
  }

  export type NoticeCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    userId?: true
    _all?: true
  }

  export type NoticeAggregateArgs = {
    /**
     * Filter which Notice to aggregate.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notices
    **/
    _count?: true | NoticeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NoticeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NoticeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NoticeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NoticeMaxAggregateInputType
  }

  export type GetNoticeAggregateType<T extends NoticeAggregateArgs> = {
        [P in keyof T & keyof AggregateNotice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotice[P]>
      : GetScalarType<T[P], AggregateNotice[P]>
  }




  export type NoticeGroupByArgs = {
    where?: NoticeWhereInput
    orderBy?: Enumerable<NoticeOrderByWithAggregationInput>
    by: Array<NoticeScalarFieldEnum>
    having?: NoticeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NoticeCountAggregateInputType | true
    _avg?: NoticeAvgAggregateInputType
    _sum?: NoticeSumAggregateInputType
    _min?: NoticeMinAggregateInputType
    _max?: NoticeMaxAggregateInputType
  }


  export type NoticeGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    userId: number
    _count: NoticeCountAggregateOutputType | null
    _avg: NoticeAvgAggregateOutputType | null
    _sum: NoticeSumAggregateOutputType | null
    _min: NoticeMinAggregateOutputType | null
    _max: NoticeMaxAggregateOutputType | null
  }

  type GetNoticeGroupByPayload<T extends NoticeGroupByArgs> = PrismaPromise<
    Array<
      PickArray<NoticeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NoticeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NoticeGroupByOutputType[P]>
            : GetScalarType<T[P], NoticeGroupByOutputType[P]>
        }
      >
    >


  export type NoticeSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    userId?: boolean
    User?: boolean | UserArgs
  }

  export type NoticeInclude = {
    User?: boolean | UserArgs
  }

  export type NoticeGetPayload<
    S extends boolean | null | undefined | NoticeArgs,
    U = keyof S
      > = S extends true
        ? Notice
    : S extends undefined
    ? never
    : S extends NoticeArgs | NoticeFindManyArgs
    ?'include' extends U
    ? Notice  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof Notice ? Notice[P] : never
  } 
    : Notice
  : Notice


  type NoticeCountArgs = Merge<
    Omit<NoticeFindManyArgs, 'select' | 'include'> & {
      select?: NoticeCountAggregateInputType | true
    }
  >

  export interface NoticeDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Notice that matches the filter.
     * @param {NoticeFindUniqueArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends NoticeFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, NoticeFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Notice'> extends True ? CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>> : CheckSelect<T, Prisma__NoticeClient<Notice | null >, Prisma__NoticeClient<NoticeGetPayload<T> | null >>

    /**
     * Find the first Notice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindFirstArgs} args - Arguments to find a Notice
     * @example
     * // Get one Notice
     * const notice = await prisma.notice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends NoticeFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, NoticeFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Notice'> extends True ? CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>> : CheckSelect<T, Prisma__NoticeClient<Notice | null >, Prisma__NoticeClient<NoticeGetPayload<T> | null >>

    /**
     * Find zero or more Notices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notices
     * const notices = await prisma.notice.findMany()
     * 
     * // Get first 10 Notices
     * const notices = await prisma.notice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const noticeWithIdOnly = await prisma.notice.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends NoticeFindManyArgs>(
      args?: SelectSubset<T, NoticeFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Notice>>, PrismaPromise<Array<NoticeGetPayload<T>>>>

    /**
     * Create a Notice.
     * @param {NoticeCreateArgs} args - Arguments to create a Notice.
     * @example
     * // Create one Notice
     * const Notice = await prisma.notice.create({
     *   data: {
     *     // ... data to create a Notice
     *   }
     * })
     * 
    **/
    create<T extends NoticeCreateArgs>(
      args: SelectSubset<T, NoticeCreateArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Create many Notices.
     *     @param {NoticeCreateManyArgs} args - Arguments to create many Notices.
     *     @example
     *     // Create many Notices
     *     const notice = await prisma.notice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends NoticeCreateManyArgs>(
      args?: SelectSubset<T, NoticeCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Notice.
     * @param {NoticeDeleteArgs} args - Arguments to delete one Notice.
     * @example
     * // Delete one Notice
     * const Notice = await prisma.notice.delete({
     *   where: {
     *     // ... filter to delete one Notice
     *   }
     * })
     * 
    **/
    delete<T extends NoticeDeleteArgs>(
      args: SelectSubset<T, NoticeDeleteArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Update one Notice.
     * @param {NoticeUpdateArgs} args - Arguments to update one Notice.
     * @example
     * // Update one Notice
     * const notice = await prisma.notice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends NoticeUpdateArgs>(
      args: SelectSubset<T, NoticeUpdateArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Delete zero or more Notices.
     * @param {NoticeDeleteManyArgs} args - Arguments to filter Notices to delete.
     * @example
     * // Delete a few Notices
     * const { count } = await prisma.notice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends NoticeDeleteManyArgs>(
      args?: SelectSubset<T, NoticeDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notices
     * const notice = await prisma.notice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends NoticeUpdateManyArgs>(
      args: SelectSubset<T, NoticeUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Notice.
     * @param {NoticeUpsertArgs} args - Arguments to update or create a Notice.
     * @example
     * // Update or create a Notice
     * const notice = await prisma.notice.upsert({
     *   create: {
     *     // ... data to create a Notice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notice we want to update
     *   }
     * })
    **/
    upsert<T extends NoticeUpsertArgs>(
      args: SelectSubset<T, NoticeUpsertArgs>
    ): CheckSelect<T, Prisma__NoticeClient<Notice>, Prisma__NoticeClient<NoticeGetPayload<T>>>

    /**
     * Count the number of Notices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeCountArgs} args - Arguments to filter Notices to count.
     * @example
     * // Count the number of Notices
     * const count = await prisma.notice.count({
     *   where: {
     *     // ... the filter for the Notices we want to count
     *   }
     * })
    **/
    count<T extends NoticeCountArgs>(
      args?: Subset<T, NoticeCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NoticeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NoticeAggregateArgs>(args: Subset<T, NoticeAggregateArgs>): PrismaPromise<GetNoticeAggregateType<T>>

    /**
     * Group by Notice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NoticeGroupByArgs} args - Group by arguments.
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
      T extends NoticeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NoticeGroupByArgs['orderBy'] }
        : { orderBy?: NoticeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, NoticeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNoticeGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__NoticeClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Notice findUnique
   */
  export type NoticeFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Throw an Error if a Notice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice findFirst
   */
  export type NoticeFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Throw an Error if a Notice can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Notice to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notices.
     * 
    **/
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice findMany
   */
  export type NoticeFindManyArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter, which Notices to fetch.
     * 
    **/
    where?: NoticeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notices to fetch.
     * 
    **/
    orderBy?: Enumerable<NoticeOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notices.
     * 
    **/
    cursor?: NoticeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notices from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notices.
     * 
    **/
    skip?: number
    distinct?: Enumerable<NoticeScalarFieldEnum>
  }


  /**
   * Notice create
   */
  export type NoticeCreateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to create a Notice.
     * 
    **/
    data: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
  }


  /**
   * Notice createMany
   */
  export type NoticeCreateManyArgs = {
    /**
     * The data used to create many Notices.
     * 
    **/
    data: Enumerable<NoticeCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Notice update
   */
  export type NoticeUpdateArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The data needed to update a Notice.
     * 
    **/
    data: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
    /**
     * Choose, which Notice to update.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice updateMany
   */
  export type NoticeUpdateManyArgs = {
    /**
     * The data used to update Notices.
     * 
    **/
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyInput>
    /**
     * Filter which Notices to update
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice upsert
   */
  export type NoticeUpsertArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * The filter to search for the Notice to update in case it exists.
     * 
    **/
    where: NoticeWhereUniqueInput
    /**
     * In case the Notice found by the `where` argument doesn't exist, create a new Notice with this data.
     * 
    **/
    create: XOR<NoticeCreateInput, NoticeUncheckedCreateInput>
    /**
     * In case the Notice was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<NoticeUpdateInput, NoticeUncheckedUpdateInput>
  }


  /**
   * Notice delete
   */
  export type NoticeDeleteArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
    /**
     * Filter which Notice to delete.
     * 
    **/
    where: NoticeWhereUniqueInput
  }


  /**
   * Notice deleteMany
   */
  export type NoticeDeleteManyArgs = {
    /**
     * Filter which Notices to delete
     * 
    **/
    where?: NoticeWhereInput
  }


  /**
   * Notice without action
   */
  export type NoticeArgs = {
    /**
     * Select specific fields to fetch from the Notice
     * 
    **/
    select?: NoticeSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: NoticeInclude | null
  }



  /**
   * Model Board
   */


  export type AggregateBoard = {
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  export type BoardAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type BoardMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    title: string | null
    content: string | null
    link: string | null
    startDay: Date | null
    endDay: Date | null
    isDisable: boolean | null
    userId: number | null
    boardType: BoardType | null
  }

  export type BoardCountAggregateOutputType = {
    id: number
    createdAt: number
    title: number
    content: number
    link: number
    startDay: number
    endDay: number
    isDisable: number
    userId: number
    boardType: number
    _all: number
  }


  export type BoardAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type BoardMinAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardMaxAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
  }

  export type BoardCountAggregateInputType = {
    id?: true
    createdAt?: true
    title?: true
    content?: true
    link?: true
    startDay?: true
    endDay?: true
    isDisable?: true
    userId?: true
    boardType?: true
    _all?: true
  }

  export type BoardAggregateArgs = {
    /**
     * Filter which Board to aggregate.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Boards
    **/
    _count?: true | BoardCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardMaxAggregateInputType
  }

  export type GetBoardAggregateType<T extends BoardAggregateArgs> = {
        [P in keyof T & keyof AggregateBoard]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoard[P]>
      : GetScalarType<T[P], AggregateBoard[P]>
  }




  export type BoardGroupByArgs = {
    where?: BoardWhereInput
    orderBy?: Enumerable<BoardOrderByWithAggregationInput>
    by: Array<BoardScalarFieldEnum>
    having?: BoardScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardCountAggregateInputType | true
    _avg?: BoardAvgAggregateInputType
    _sum?: BoardSumAggregateInputType
    _min?: BoardMinAggregateInputType
    _max?: BoardMaxAggregateInputType
  }


  export type BoardGroupByOutputType = {
    id: number
    createdAt: Date
    title: string
    content: string | null
    link: string | null
    startDay: Date
    endDay: Date
    isDisable: boolean
    userId: number
    boardType: BoardType
    _count: BoardCountAggregateOutputType | null
    _avg: BoardAvgAggregateOutputType | null
    _sum: BoardSumAggregateOutputType | null
    _min: BoardMinAggregateOutputType | null
    _max: BoardMaxAggregateOutputType | null
  }

  type GetBoardGroupByPayload<T extends BoardGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardGroupByOutputType[P]>
            : GetScalarType<T[P], BoardGroupByOutputType[P]>
        }
      >
    >


  export type BoardSelect = {
    id?: boolean
    createdAt?: boolean
    title?: boolean
    content?: boolean
    link?: boolean
    startDay?: boolean
    endDay?: boolean
    isDisable?: boolean
    BoardImage?: boolean | BoardImageFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    userId?: boolean
    User?: boolean | UserArgs
    boardType?: boolean
    _count?: boolean | BoardCountOutputTypeArgs
  }

  export type BoardInclude = {
    BoardImage?: boolean | BoardImageFindManyArgs
    BoardReply?: boolean | BoardReplyFindManyArgs
    User?: boolean | UserArgs
    _count?: boolean | BoardCountOutputTypeArgs
  }

  export type BoardGetPayload<
    S extends boolean | null | undefined | BoardArgs,
    U = keyof S
      > = S extends true
        ? Board
    : S extends undefined
    ? never
    : S extends BoardArgs | BoardFindManyArgs
    ?'include' extends U
    ? Board  & {
    [P in TrueKeys<S['include']>]:
        P extends 'BoardImage' ? Array < BoardImageGetPayload<S['include'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'BoardImage' ? Array < BoardImageGetPayload<S['select'][P]>>  :
        P extends 'BoardReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends '_count' ? BoardCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Board ? Board[P] : never
  } 
    : Board
  : Board


  type BoardCountArgs = Merge<
    Omit<BoardFindManyArgs, 'select' | 'include'> & {
      select?: BoardCountAggregateInputType | true
    }
  >

  export interface BoardDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Board that matches the filter.
     * @param {BoardFindUniqueArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Board'> extends True ? CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>> : CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>

    /**
     * Find the first Board that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindFirstArgs} args - Arguments to find a Board
     * @example
     * // Get one Board
     * const board = await prisma.board.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Board'> extends True ? CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>> : CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>

    /**
     * Find zero or more Boards that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Boards
     * const boards = await prisma.board.findMany()
     * 
     * // Get first 10 Boards
     * const boards = await prisma.board.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardWithIdOnly = await prisma.board.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardFindManyArgs>(
      args?: SelectSubset<T, BoardFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Board>>, PrismaPromise<Array<BoardGetPayload<T>>>>

    /**
     * Create a Board.
     * @param {BoardCreateArgs} args - Arguments to create a Board.
     * @example
     * // Create one Board
     * const Board = await prisma.board.create({
     *   data: {
     *     // ... data to create a Board
     *   }
     * })
     * 
    **/
    create<T extends BoardCreateArgs>(
      args: SelectSubset<T, BoardCreateArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Create many Boards.
     *     @param {BoardCreateManyArgs} args - Arguments to create many Boards.
     *     @example
     *     // Create many Boards
     *     const board = await prisma.board.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardCreateManyArgs>(
      args?: SelectSubset<T, BoardCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Board.
     * @param {BoardDeleteArgs} args - Arguments to delete one Board.
     * @example
     * // Delete one Board
     * const Board = await prisma.board.delete({
     *   where: {
     *     // ... filter to delete one Board
     *   }
     * })
     * 
    **/
    delete<T extends BoardDeleteArgs>(
      args: SelectSubset<T, BoardDeleteArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Update one Board.
     * @param {BoardUpdateArgs} args - Arguments to update one Board.
     * @example
     * // Update one Board
     * const board = await prisma.board.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardUpdateArgs>(
      args: SelectSubset<T, BoardUpdateArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Delete zero or more Boards.
     * @param {BoardDeleteManyArgs} args - Arguments to filter Boards to delete.
     * @example
     * // Delete a few Boards
     * const { count } = await prisma.board.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardDeleteManyArgs>(
      args?: SelectSubset<T, BoardDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Boards
     * const board = await prisma.board.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardUpdateManyArgs>(
      args: SelectSubset<T, BoardUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Board.
     * @param {BoardUpsertArgs} args - Arguments to update or create a Board.
     * @example
     * // Update or create a Board
     * const board = await prisma.board.upsert({
     *   create: {
     *     // ... data to create a Board
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Board we want to update
     *   }
     * })
    **/
    upsert<T extends BoardUpsertArgs>(
      args: SelectSubset<T, BoardUpsertArgs>
    ): CheckSelect<T, Prisma__BoardClient<Board>, Prisma__BoardClient<BoardGetPayload<T>>>

    /**
     * Count the number of Boards.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardCountArgs} args - Arguments to filter Boards to count.
     * @example
     * // Count the number of Boards
     * const count = await prisma.board.count({
     *   where: {
     *     // ... the filter for the Boards we want to count
     *   }
     * })
    **/
    count<T extends BoardCountArgs>(
      args?: Subset<T, BoardCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardAggregateArgs>(args: Subset<T, BoardAggregateArgs>): PrismaPromise<GetBoardAggregateType<T>>

    /**
     * Group by Board.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardGroupByArgs} args - Group by arguments.
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
      T extends BoardGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardGroupByArgs['orderBy'] }
        : { orderBy?: BoardGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Board.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    BoardImage<T extends BoardImageFindManyArgs = {}>(args?: Subset<T, BoardImageFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardImage>>, PrismaPromise<Array<BoardImageGetPayload<T>>>>;

    BoardReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Board findUnique
   */
  export type BoardFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Throw an Error if a Board can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board findFirst
   */
  export type BoardFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Throw an Error if a Board can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Board to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Boards.
     * 
    **/
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board findMany
   */
  export type BoardFindManyArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter, which Boards to fetch.
     * 
    **/
    where?: BoardWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Boards to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Boards.
     * 
    **/
    cursor?: BoardWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Boards from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Boards.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardScalarFieldEnum>
  }


  /**
   * Board create
   */
  export type BoardCreateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to create a Board.
     * 
    **/
    data: XOR<BoardCreateInput, BoardUncheckedCreateInput>
  }


  /**
   * Board createMany
   */
  export type BoardCreateManyArgs = {
    /**
     * The data used to create many Boards.
     * 
    **/
    data: Enumerable<BoardCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Board update
   */
  export type BoardUpdateArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The data needed to update a Board.
     * 
    **/
    data: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
    /**
     * Choose, which Board to update.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board updateMany
   */
  export type BoardUpdateManyArgs = {
    /**
     * The data used to update Boards.
     * 
    **/
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyInput>
    /**
     * Filter which Boards to update
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board upsert
   */
  export type BoardUpsertArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * The filter to search for the Board to update in case it exists.
     * 
    **/
    where: BoardWhereUniqueInput
    /**
     * In case the Board found by the `where` argument doesn't exist, create a new Board with this data.
     * 
    **/
    create: XOR<BoardCreateInput, BoardUncheckedCreateInput>
    /**
     * In case the Board was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardUpdateInput, BoardUncheckedUpdateInput>
  }


  /**
   * Board delete
   */
  export type BoardDeleteArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
    /**
     * Filter which Board to delete.
     * 
    **/
    where: BoardWhereUniqueInput
  }


  /**
   * Board deleteMany
   */
  export type BoardDeleteManyArgs = {
    /**
     * Filter which Boards to delete
     * 
    **/
    where?: BoardWhereInput
  }


  /**
   * Board without action
   */
  export type BoardArgs = {
    /**
     * Select specific fields to fetch from the Board
     * 
    **/
    select?: BoardSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardInclude | null
  }



  /**
   * Model BoardImage
   */


  export type AggregateBoardImage = {
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  export type BoardImageAvgAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageSumAggregateOutputType = {
    id: number | null
    width: number | null
    height: number | null
    size: number | null
    boardId: number | null
  }

  export type BoardImageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    url: string | null
    width: number | null
    height: number | null
    size: number | null
    isThumb: boolean | null
    boardId: number | null
  }

  export type BoardImageCountAggregateOutputType = {
    id: number
    createdAt: number
    url: number
    width: number
    height: number
    size: number
    isThumb: number
    boardId: number
    _all: number
  }


  export type BoardImageAvgAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageSumAggregateInputType = {
    id?: true
    width?: true
    height?: true
    size?: true
    boardId?: true
  }

  export type BoardImageMinAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
  }

  export type BoardImageCountAggregateInputType = {
    id?: true
    createdAt?: true
    url?: true
    width?: true
    height?: true
    size?: true
    isThumb?: true
    boardId?: true
    _all?: true
  }

  export type BoardImageAggregateArgs = {
    /**
     * Filter which BoardImage to aggregate.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardImages
    **/
    _count?: true | BoardImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardImageMaxAggregateInputType
  }

  export type GetBoardImageAggregateType<T extends BoardImageAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardImage[P]>
      : GetScalarType<T[P], AggregateBoardImage[P]>
  }




  export type BoardImageGroupByArgs = {
    where?: BoardImageWhereInput
    orderBy?: Enumerable<BoardImageOrderByWithAggregationInput>
    by: Array<BoardImageScalarFieldEnum>
    having?: BoardImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardImageCountAggregateInputType | true
    _avg?: BoardImageAvgAggregateInputType
    _sum?: BoardImageSumAggregateInputType
    _min?: BoardImageMinAggregateInputType
    _max?: BoardImageMaxAggregateInputType
  }


  export type BoardImageGroupByOutputType = {
    id: number
    createdAt: Date
    url: string
    width: number
    height: number
    size: number
    isThumb: boolean
    boardId: number
    _count: BoardImageCountAggregateOutputType | null
    _avg: BoardImageAvgAggregateOutputType | null
    _sum: BoardImageSumAggregateOutputType | null
    _min: BoardImageMinAggregateOutputType | null
    _max: BoardImageMaxAggregateOutputType | null
  }

  type GetBoardImageGroupByPayload<T extends BoardImageGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
            : GetScalarType<T[P], BoardImageGroupByOutputType[P]>
        }
      >
    >


  export type BoardImageSelect = {
    id?: boolean
    createdAt?: boolean
    url?: boolean
    width?: boolean
    height?: boolean
    size?: boolean
    isThumb?: boolean
    boardId?: boolean
    Board?: boolean | BoardArgs
  }

  export type BoardImageInclude = {
    Board?: boolean | BoardArgs
  }

  export type BoardImageGetPayload<
    S extends boolean | null | undefined | BoardImageArgs,
    U = keyof S
      > = S extends true
        ? BoardImage
    : S extends undefined
    ? never
    : S extends BoardImageArgs | BoardImageFindManyArgs
    ?'include' extends U
    ? BoardImage  & {
    [P in TrueKeys<S['include']>]:
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :  P extends keyof BoardImage ? BoardImage[P] : never
  } 
    : BoardImage
  : BoardImage


  type BoardImageCountArgs = Merge<
    Omit<BoardImageFindManyArgs, 'select' | 'include'> & {
      select?: BoardImageCountAggregateInputType | true
    }
  >

  export interface BoardImageDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BoardImage that matches the filter.
     * @param {BoardImageFindUniqueArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardImageFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardImageFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardImage'> extends True ? CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>> : CheckSelect<T, Prisma__BoardImageClient<BoardImage | null >, Prisma__BoardImageClient<BoardImageGetPayload<T> | null >>

    /**
     * Find the first BoardImage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindFirstArgs} args - Arguments to find a BoardImage
     * @example
     * // Get one BoardImage
     * const boardImage = await prisma.boardImage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardImageFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardImageFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardImage'> extends True ? CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>> : CheckSelect<T, Prisma__BoardImageClient<BoardImage | null >, Prisma__BoardImageClient<BoardImageGetPayload<T> | null >>

    /**
     * Find zero or more BoardImages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardImages
     * const boardImages = await prisma.boardImage.findMany()
     * 
     * // Get first 10 BoardImages
     * const boardImages = await prisma.boardImage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardImageWithIdOnly = await prisma.boardImage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardImageFindManyArgs>(
      args?: SelectSubset<T, BoardImageFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BoardImage>>, PrismaPromise<Array<BoardImageGetPayload<T>>>>

    /**
     * Create a BoardImage.
     * @param {BoardImageCreateArgs} args - Arguments to create a BoardImage.
     * @example
     * // Create one BoardImage
     * const BoardImage = await prisma.boardImage.create({
     *   data: {
     *     // ... data to create a BoardImage
     *   }
     * })
     * 
    **/
    create<T extends BoardImageCreateArgs>(
      args: SelectSubset<T, BoardImageCreateArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Create many BoardImages.
     *     @param {BoardImageCreateManyArgs} args - Arguments to create many BoardImages.
     *     @example
     *     // Create many BoardImages
     *     const boardImage = await prisma.boardImage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardImageCreateManyArgs>(
      args?: SelectSubset<T, BoardImageCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardImage.
     * @param {BoardImageDeleteArgs} args - Arguments to delete one BoardImage.
     * @example
     * // Delete one BoardImage
     * const BoardImage = await prisma.boardImage.delete({
     *   where: {
     *     // ... filter to delete one BoardImage
     *   }
     * })
     * 
    **/
    delete<T extends BoardImageDeleteArgs>(
      args: SelectSubset<T, BoardImageDeleteArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Update one BoardImage.
     * @param {BoardImageUpdateArgs} args - Arguments to update one BoardImage.
     * @example
     * // Update one BoardImage
     * const boardImage = await prisma.boardImage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardImageUpdateArgs>(
      args: SelectSubset<T, BoardImageUpdateArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Delete zero or more BoardImages.
     * @param {BoardImageDeleteManyArgs} args - Arguments to filter BoardImages to delete.
     * @example
     * // Delete a few BoardImages
     * const { count } = await prisma.boardImage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardImageDeleteManyArgs>(
      args?: SelectSubset<T, BoardImageDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardImages
     * const boardImage = await prisma.boardImage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardImageUpdateManyArgs>(
      args: SelectSubset<T, BoardImageUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardImage.
     * @param {BoardImageUpsertArgs} args - Arguments to update or create a BoardImage.
     * @example
     * // Update or create a BoardImage
     * const boardImage = await prisma.boardImage.upsert({
     *   create: {
     *     // ... data to create a BoardImage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardImage we want to update
     *   }
     * })
    **/
    upsert<T extends BoardImageUpsertArgs>(
      args: SelectSubset<T, BoardImageUpsertArgs>
    ): CheckSelect<T, Prisma__BoardImageClient<BoardImage>, Prisma__BoardImageClient<BoardImageGetPayload<T>>>

    /**
     * Count the number of BoardImages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageCountArgs} args - Arguments to filter BoardImages to count.
     * @example
     * // Count the number of BoardImages
     * const count = await prisma.boardImage.count({
     *   where: {
     *     // ... the filter for the BoardImages we want to count
     *   }
     * })
    **/
    count<T extends BoardImageCountArgs>(
      args?: Subset<T, BoardImageCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardImageAggregateArgs>(args: Subset<T, BoardImageAggregateArgs>): PrismaPromise<GetBoardImageAggregateType<T>>

    /**
     * Group by BoardImage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardImageGroupByArgs} args - Group by arguments.
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
      T extends BoardImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardImageGroupByArgs['orderBy'] }
        : { orderBy?: BoardImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardImageGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardImage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardImageClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Board<T extends BoardArgs = {}>(args?: Subset<T, BoardArgs>): CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BoardImage findUnique
   */
  export type BoardImageFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Throw an Error if a BoardImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage findFirst
   */
  export type BoardImageFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Throw an Error if a BoardImage can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardImage to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardImages.
     * 
    **/
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage findMany
   */
  export type BoardImageFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter, which BoardImages to fetch.
     * 
    **/
    where?: BoardImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardImages to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardImageOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardImages.
     * 
    **/
    cursor?: BoardImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardImages from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardImages.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardImageScalarFieldEnum>
  }


  /**
   * BoardImage create
   */
  export type BoardImageCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to create a BoardImage.
     * 
    **/
    data: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
  }


  /**
   * BoardImage createMany
   */
  export type BoardImageCreateManyArgs = {
    /**
     * The data used to create many BoardImages.
     * 
    **/
    data: Enumerable<BoardImageCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardImage update
   */
  export type BoardImageUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The data needed to update a BoardImage.
     * 
    **/
    data: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
    /**
     * Choose, which BoardImage to update.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage updateMany
   */
  export type BoardImageUpdateManyArgs = {
    /**
     * The data used to update BoardImages.
     * 
    **/
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyInput>
    /**
     * Filter which BoardImages to update
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage upsert
   */
  export type BoardImageUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * The filter to search for the BoardImage to update in case it exists.
     * 
    **/
    where: BoardImageWhereUniqueInput
    /**
     * In case the BoardImage found by the `where` argument doesn't exist, create a new BoardImage with this data.
     * 
    **/
    create: XOR<BoardImageCreateInput, BoardImageUncheckedCreateInput>
    /**
     * In case the BoardImage was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardImageUpdateInput, BoardImageUncheckedUpdateInput>
  }


  /**
   * BoardImage delete
   */
  export type BoardImageDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
    /**
     * Filter which BoardImage to delete.
     * 
    **/
    where: BoardImageWhereUniqueInput
  }


  /**
   * BoardImage deleteMany
   */
  export type BoardImageDeleteManyArgs = {
    /**
     * Filter which BoardImages to delete
     * 
    **/
    where?: BoardImageWhereInput
  }


  /**
   * BoardImage without action
   */
  export type BoardImageArgs = {
    /**
     * Select specific fields to fetch from the BoardImage
     * 
    **/
    select?: BoardImageSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardImageInclude | null
  }



  /**
   * Model BoardReply
   */


  export type AggregateBoardReply = {
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  export type BoardReplyAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplySumAggregateOutputType = {
    id: number | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
  }

  export type BoardReplyMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    content: string | null
    isDisable: boolean | null
    userId: number | null
    boardId: number | null
    boardReplyId: number | null
    boardType: BoardType | null
  }

  export type BoardReplyCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    content: number
    isDisable: number
    userId: number
    boardId: number
    boardReplyId: number
    boardType: number
    _all: number
  }


  export type BoardReplyAvgAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplySumAggregateInputType = {
    id?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
  }

  export type BoardReplyMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
  }

  export type BoardReplyCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    content?: true
    isDisable?: true
    userId?: true
    boardId?: true
    boardReplyId?: true
    boardType?: true
    _all?: true
  }

  export type BoardReplyAggregateArgs = {
    /**
     * Filter which BoardReply to aggregate.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BoardReplies
    **/
    _count?: true | BoardReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BoardReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BoardReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BoardReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BoardReplyMaxAggregateInputType
  }

  export type GetBoardReplyAggregateType<T extends BoardReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateBoardReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBoardReply[P]>
      : GetScalarType<T[P], AggregateBoardReply[P]>
  }




  export type BoardReplyGroupByArgs = {
    where?: BoardReplyWhereInput
    orderBy?: Enumerable<BoardReplyOrderByWithAggregationInput>
    by: Array<BoardReplyScalarFieldEnum>
    having?: BoardReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BoardReplyCountAggregateInputType | true
    _avg?: BoardReplyAvgAggregateInputType
    _sum?: BoardReplySumAggregateInputType
    _min?: BoardReplyMinAggregateInputType
    _max?: BoardReplyMaxAggregateInputType
  }


  export type BoardReplyGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date | null
    content: string
    isDisable: boolean
    userId: number
    boardId: number
    boardReplyId: number | null
    boardType: BoardType
    _count: BoardReplyCountAggregateOutputType | null
    _avg: BoardReplyAvgAggregateOutputType | null
    _sum: BoardReplySumAggregateOutputType | null
    _min: BoardReplyMinAggregateOutputType | null
    _max: BoardReplyMaxAggregateOutputType | null
  }

  type GetBoardReplyGroupByPayload<T extends BoardReplyGroupByArgs> = PrismaPromise<
    Array<
      PickArray<BoardReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BoardReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
            : GetScalarType<T[P], BoardReplyGroupByOutputType[P]>
        }
      >
    >


  export type BoardReplySelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    content?: boolean
    isDisable?: boolean
    userId?: boolean
    User?: boolean | UserArgs
    boardId?: boolean
    Board?: boolean | BoardArgs
    boardReplyId?: boolean
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReply?: boolean | BoardReplyFindManyArgs
    boardType?: boolean
    _count?: boolean | BoardReplyCountOutputTypeArgs
  }

  export type BoardReplyInclude = {
    User?: boolean | UserArgs
    Board?: boolean | BoardArgs
    BoardReply?: boolean | BoardReplyArgs
    BoardNestedReply?: boolean | BoardReplyFindManyArgs
    _count?: boolean | BoardReplyCountOutputTypeArgs
  }

  export type BoardReplyGetPayload<
    S extends boolean | null | undefined | BoardReplyArgs,
    U = keyof S
      > = S extends true
        ? BoardReply
    : S extends undefined
    ? never
    : S extends BoardReplyArgs | BoardReplyFindManyArgs
    ?'include' extends U
    ? BoardReply  & {
    [P in TrueKeys<S['include']>]:
        P extends 'User' ? UserGetPayload<S['include'][P]> :
        P extends 'Board' ? BoardGetPayload<S['include'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['include'][P]> | null :
        P extends 'BoardNestedReply' ? Array < BoardReplyGetPayload<S['include'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'User' ? UserGetPayload<S['select'][P]> :
        P extends 'Board' ? BoardGetPayload<S['select'][P]> :
        P extends 'BoardReply' ? BoardReplyGetPayload<S['select'][P]> | null :
        P extends 'BoardNestedReply' ? Array < BoardReplyGetPayload<S['select'][P]>>  :
        P extends '_count' ? BoardReplyCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof BoardReply ? BoardReply[P] : never
  } 
    : BoardReply
  : BoardReply


  type BoardReplyCountArgs = Merge<
    Omit<BoardReplyFindManyArgs, 'select' | 'include'> & {
      select?: BoardReplyCountAggregateInputType | true
    }
  >

  export interface BoardReplyDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one BoardReply that matches the filter.
     * @param {BoardReplyFindUniqueArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BoardReplyFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, BoardReplyFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'BoardReply'> extends True ? CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>> : CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>

    /**
     * Find the first BoardReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindFirstArgs} args - Arguments to find a BoardReply
     * @example
     * // Get one BoardReply
     * const boardReply = await prisma.boardReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BoardReplyFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, BoardReplyFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'BoardReply'> extends True ? CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>> : CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>

    /**
     * Find zero or more BoardReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BoardReplies
     * const boardReplies = await prisma.boardReply.findMany()
     * 
     * // Get first 10 BoardReplies
     * const boardReplies = await prisma.boardReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const boardReplyWithIdOnly = await prisma.boardReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BoardReplyFindManyArgs>(
      args?: SelectSubset<T, BoardReplyFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>

    /**
     * Create a BoardReply.
     * @param {BoardReplyCreateArgs} args - Arguments to create a BoardReply.
     * @example
     * // Create one BoardReply
     * const BoardReply = await prisma.boardReply.create({
     *   data: {
     *     // ... data to create a BoardReply
     *   }
     * })
     * 
    **/
    create<T extends BoardReplyCreateArgs>(
      args: SelectSubset<T, BoardReplyCreateArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Create many BoardReplies.
     *     @param {BoardReplyCreateManyArgs} args - Arguments to create many BoardReplies.
     *     @example
     *     // Create many BoardReplies
     *     const boardReply = await prisma.boardReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BoardReplyCreateManyArgs>(
      args?: SelectSubset<T, BoardReplyCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a BoardReply.
     * @param {BoardReplyDeleteArgs} args - Arguments to delete one BoardReply.
     * @example
     * // Delete one BoardReply
     * const BoardReply = await prisma.boardReply.delete({
     *   where: {
     *     // ... filter to delete one BoardReply
     *   }
     * })
     * 
    **/
    delete<T extends BoardReplyDeleteArgs>(
      args: SelectSubset<T, BoardReplyDeleteArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Update one BoardReply.
     * @param {BoardReplyUpdateArgs} args - Arguments to update one BoardReply.
     * @example
     * // Update one BoardReply
     * const boardReply = await prisma.boardReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BoardReplyUpdateArgs>(
      args: SelectSubset<T, BoardReplyUpdateArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Delete zero or more BoardReplies.
     * @param {BoardReplyDeleteManyArgs} args - Arguments to filter BoardReplies to delete.
     * @example
     * // Delete a few BoardReplies
     * const { count } = await prisma.boardReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BoardReplyDeleteManyArgs>(
      args?: SelectSubset<T, BoardReplyDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BoardReplies
     * const boardReply = await prisma.boardReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BoardReplyUpdateManyArgs>(
      args: SelectSubset<T, BoardReplyUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one BoardReply.
     * @param {BoardReplyUpsertArgs} args - Arguments to update or create a BoardReply.
     * @example
     * // Update or create a BoardReply
     * const boardReply = await prisma.boardReply.upsert({
     *   create: {
     *     // ... data to create a BoardReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BoardReply we want to update
     *   }
     * })
    **/
    upsert<T extends BoardReplyUpsertArgs>(
      args: SelectSubset<T, BoardReplyUpsertArgs>
    ): CheckSelect<T, Prisma__BoardReplyClient<BoardReply>, Prisma__BoardReplyClient<BoardReplyGetPayload<T>>>

    /**
     * Count the number of BoardReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyCountArgs} args - Arguments to filter BoardReplies to count.
     * @example
     * // Count the number of BoardReplies
     * const count = await prisma.boardReply.count({
     *   where: {
     *     // ... the filter for the BoardReplies we want to count
     *   }
     * })
    **/
    count<T extends BoardReplyCountArgs>(
      args?: Subset<T, BoardReplyCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BoardReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BoardReplyAggregateArgs>(args: Subset<T, BoardReplyAggregateArgs>): PrismaPromise<GetBoardReplyAggregateType<T>>

    /**
     * Group by BoardReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BoardReplyGroupByArgs} args - Group by arguments.
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
      T extends BoardReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BoardReplyGroupByArgs['orderBy'] }
        : { orderBy?: BoardReplyGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BoardReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBoardReplyGroupByPayload<T> : PrismaPromise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for BoardReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__BoardReplyClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    User<T extends UserArgs = {}>(args?: Subset<T, UserArgs>): CheckSelect<T, Prisma__UserClient<User | null >, Prisma__UserClient<UserGetPayload<T> | null >>;

    Board<T extends BoardArgs = {}>(args?: Subset<T, BoardArgs>): CheckSelect<T, Prisma__BoardClient<Board | null >, Prisma__BoardClient<BoardGetPayload<T> | null >>;

    BoardReply<T extends BoardReplyArgs = {}>(args?: Subset<T, BoardReplyArgs>): CheckSelect<T, Prisma__BoardReplyClient<BoardReply | null >, Prisma__BoardReplyClient<BoardReplyGetPayload<T> | null >>;

    BoardNestedReply<T extends BoardReplyFindManyArgs = {}>(args?: Subset<T, BoardReplyFindManyArgs>): CheckSelect<T, PrismaPromise<Array<BoardReply>>, PrismaPromise<Array<BoardReplyGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * BoardReply findUnique
   */
  export type BoardReplyFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Throw an Error if a BoardReply can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply findFirst
   */
  export type BoardReplyFindFirstArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Throw an Error if a BoardReply can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which BoardReply to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BoardReplies.
     * 
    **/
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply findMany
   */
  export type BoardReplyFindManyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter, which BoardReplies to fetch.
     * 
    **/
    where?: BoardReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BoardReplies to fetch.
     * 
    **/
    orderBy?: Enumerable<BoardReplyOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BoardReplies.
     * 
    **/
    cursor?: BoardReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BoardReplies from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BoardReplies.
     * 
    **/
    skip?: number
    distinct?: Enumerable<BoardReplyScalarFieldEnum>
  }


  /**
   * BoardReply create
   */
  export type BoardReplyCreateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to create a BoardReply.
     * 
    **/
    data: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
  }


  /**
   * BoardReply createMany
   */
  export type BoardReplyCreateManyArgs = {
    /**
     * The data used to create many BoardReplies.
     * 
    **/
    data: Enumerable<BoardReplyCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * BoardReply update
   */
  export type BoardReplyUpdateArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The data needed to update a BoardReply.
     * 
    **/
    data: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
    /**
     * Choose, which BoardReply to update.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply updateMany
   */
  export type BoardReplyUpdateManyArgs = {
    /**
     * The data used to update BoardReplies.
     * 
    **/
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyInput>
    /**
     * Filter which BoardReplies to update
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply upsert
   */
  export type BoardReplyUpsertArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * The filter to search for the BoardReply to update in case it exists.
     * 
    **/
    where: BoardReplyWhereUniqueInput
    /**
     * In case the BoardReply found by the `where` argument doesn't exist, create a new BoardReply with this data.
     * 
    **/
    create: XOR<BoardReplyCreateInput, BoardReplyUncheckedCreateInput>
    /**
     * In case the BoardReply was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<BoardReplyUpdateInput, BoardReplyUncheckedUpdateInput>
  }


  /**
   * BoardReply delete
   */
  export type BoardReplyDeleteArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
    /**
     * Filter which BoardReply to delete.
     * 
    **/
    where: BoardReplyWhereUniqueInput
  }


  /**
   * BoardReply deleteMany
   */
  export type BoardReplyDeleteManyArgs = {
    /**
     * Filter which BoardReplies to delete
     * 
    **/
    where?: BoardReplyWhereInput
  }


  /**
   * BoardReply without action
   */
  export type BoardReplyArgs = {
    /**
     * Select specific fields to fetch from the BoardReply
     * 
    **/
    select?: BoardReplySelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: BoardReplyInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    loginId: 'loginId',
    loginPw: 'loginPw',
    username: 'username',
    loginType: 'loginType',
    userType: 'userType',
    nickname: 'nickname',
    phone: 'phone',
    isDisable: 'isDisable'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const NoticeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    userId: 'userId'
  };

  export type NoticeScalarFieldEnum = (typeof NoticeScalarFieldEnum)[keyof typeof NoticeScalarFieldEnum]


  export const BoardScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    title: 'title',
    content: 'content',
    link: 'link',
    startDay: 'startDay',
    endDay: 'endDay',
    isDisable: 'isDisable',
    userId: 'userId',
    boardType: 'boardType'
  };

  export type BoardScalarFieldEnum = (typeof BoardScalarFieldEnum)[keyof typeof BoardScalarFieldEnum]


  export const BoardImageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    url: 'url',
    width: 'width',
    height: 'height',
    size: 'size',
    isThumb: 'isThumb',
    boardId: 'boardId'
  };

  export type BoardImageScalarFieldEnum = (typeof BoardImageScalarFieldEnum)[keyof typeof BoardImageScalarFieldEnum]


  export const BoardReplyScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    content: 'content',
    isDisable: 'isDisable',
    userId: 'userId',
    boardId: 'boardId',
    boardReplyId: 'boardReplyId',
    boardType: 'boardType'
  };

  export type BoardReplyScalarFieldEnum = (typeof BoardReplyScalarFieldEnum)[keyof typeof BoardReplyScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    loginId?: StringFilter | string
    loginPw?: StringNullableFilter | string | null
    username?: StringFilter | string
    loginType?: EnumLoginTypeFilter | LoginType
    userType?: EnumUserTypeFilter | UserType
    nickname?: StringFilter | string
    phone?: StringFilter | string
    isDisable?: BoolFilter | boolean
    Board?: BoardListRelationFilter
    BoardReply?: BoardReplyListRelationFilter
    Notice?: NoticeListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
    Board?: BoardOrderByRelationAggregateInput
    BoardReply?: BoardReplyOrderByRelationAggregateInput
    Notice?: NoticeOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
    loginUnique?: UserLoginUniqueCompoundUniqueInput
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    loginId?: StringWithAggregatesFilter | string
    loginPw?: StringNullableWithAggregatesFilter | string | null
    username?: StringWithAggregatesFilter | string
    loginType?: EnumLoginTypeWithAggregatesFilter | LoginType
    userType?: EnumUserTypeWithAggregatesFilter | UserType
    nickname?: StringWithAggregatesFilter | string
    phone?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
  }

  export type NoticeWhereInput = {
    AND?: Enumerable<NoticeWhereInput>
    OR?: Enumerable<NoticeWhereInput>
    NOT?: Enumerable<NoticeWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type NoticeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
  }

  export type NoticeWhereUniqueInput = {
    id?: number
  }

  export type NoticeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
    _count?: NoticeCountOrderByAggregateInput
    _avg?: NoticeAvgOrderByAggregateInput
    _max?: NoticeMaxOrderByAggregateInput
    _min?: NoticeMinOrderByAggregateInput
    _sum?: NoticeSumOrderByAggregateInput
  }

  export type NoticeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    OR?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<NoticeScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    userId?: IntWithAggregatesFilter | number
  }

  export type BoardWhereInput = {
    AND?: Enumerable<BoardWhereInput>
    OR?: Enumerable<BoardWhereInput>
    NOT?: Enumerable<BoardWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    BoardImage?: BoardImageListRelationFilter
    BoardReply?: BoardReplyListRelationFilter
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    BoardImage?: BoardImageOrderByRelationAggregateInput
    BoardReply?: BoardReplyOrderByRelationAggregateInput
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardType?: SortOrder
  }

  export type BoardWhereUniqueInput = {
    id?: number
  }

  export type BoardOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
    _count?: BoardCountOrderByAggregateInput
    _avg?: BoardAvgOrderByAggregateInput
    _max?: BoardMaxOrderByAggregateInput
    _min?: BoardMinOrderByAggregateInput
    _sum?: BoardSumOrderByAggregateInput
  }

  export type BoardScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    title?: StringWithAggregatesFilter | string
    content?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    startDay?: DateTimeWithAggregatesFilter | Date | string
    endDay?: DateTimeWithAggregatesFilter | Date | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type BoardImageWhereInput = {
    AND?: Enumerable<BoardImageWhereInput>
    OR?: Enumerable<BoardImageWhereInput>
    NOT?: Enumerable<BoardImageWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
  }

  export type BoardImageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
  }

  export type BoardImageWhereUniqueInput = {
    id?: number
    boardId?: number
  }

  export type BoardImageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
    _count?: BoardImageCountOrderByAggregateInput
    _avg?: BoardImageAvgOrderByAggregateInput
    _max?: BoardImageMaxOrderByAggregateInput
    _min?: BoardImageMinOrderByAggregateInput
    _sum?: BoardImageSumOrderByAggregateInput
  }

  export type BoardImageScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardImageScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    url?: StringWithAggregatesFilter | string
    width?: IntWithAggregatesFilter | number
    height?: IntWithAggregatesFilter | number
    size?: IntWithAggregatesFilter | number
    isThumb?: BoolWithAggregatesFilter | boolean
    boardId?: IntWithAggregatesFilter | number
  }

  export type BoardReplyWhereInput = {
    AND?: Enumerable<BoardReplyWhereInput>
    OR?: Enumerable<BoardReplyWhereInput>
    NOT?: Enumerable<BoardReplyWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    User?: XOR<UserRelationFilter, UserWhereInput>
    boardId?: IntFilter | number
    Board?: XOR<BoardRelationFilter, BoardWhereInput>
    boardReplyId?: IntNullableFilter | number | null
    BoardReply?: XOR<BoardReplyRelationFilter, BoardReplyWhereInput> | null
    BoardNestedReply?: BoardReplyListRelationFilter
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    User?: UserOrderByWithRelationInput
    boardId?: SortOrder
    Board?: BoardOrderByWithRelationInput
    boardReplyId?: SortOrder
    BoardReply?: BoardReplyOrderByWithRelationInput
    BoardNestedReply?: BoardReplyOrderByRelationAggregateInput
    boardType?: SortOrder
  }

  export type BoardReplyWhereUniqueInput = {
    id?: number
  }

  export type BoardReplyOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
    _count?: BoardReplyCountOrderByAggregateInput
    _avg?: BoardReplyAvgOrderByAggregateInput
    _max?: BoardReplyMaxOrderByAggregateInput
    _min?: BoardReplyMinOrderByAggregateInput
    _sum?: BoardReplySumOrderByAggregateInput
  }

  export type BoardReplyScalarWhereWithAggregatesInput = {
    AND?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    OR?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    NOT?: Enumerable<BoardReplyScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter | Date | string | null
    content?: StringWithAggregatesFilter | string
    isDisable?: BoolWithAggregatesFilter | boolean
    userId?: IntWithAggregatesFilter | number
    boardId?: IntWithAggregatesFilter | number
    boardReplyId?: IntNullableWithAggregatesFilter | number | null
    boardType?: EnumBoardTypeWithAggregatesFilter | BoardType
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NoticeCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    User: UserCreateNestedOneWithoutNoticeInput
  }

  export type NoticeUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    User?: UserUpdateOneRequiredWithoutNoticeInput
  }

  export type NoticeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type NoticeCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    userId: number
  }

  export type NoticeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardCreateInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardCreateManyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    userId: number
    boardType?: BoardType
  }

  export type BoardUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardImageCreateInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    Board: BoardCreateNestedOneWithoutBoardImageInput
  }

  export type BoardImageUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardImageInput
  }

  export type BoardImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardImageCreateManyInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
    boardId: number
  }

  export type BoardImageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
  }

  export type BoardReplyCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type EnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type EnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type BoardListRelationFilter = {
    every?: BoardWhereInput
    some?: BoardWhereInput
    none?: BoardWhereInput
  }

  export type BoardReplyListRelationFilter = {
    every?: BoardReplyWhereInput
    some?: BoardReplyWhereInput
    none?: BoardReplyWhereInput
  }

  export type NoticeListRelationFilter = {
    every?: NoticeWhereInput
    some?: NoticeWhereInput
    none?: NoticeWhereInput
  }

  export type BoardOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NoticeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserLoginUniqueCompoundUniqueInput = {
    loginType: LoginType
    loginId: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    loginId?: SortOrder
    loginPw?: SortOrder
    username?: SortOrder
    loginType?: SortOrder
    userType?: SortOrder
    nickname?: SortOrder
    phone?: SortOrder
    isDisable?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type EnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type EnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NoticeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    userId?: SortOrder
  }

  export type NoticeSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardImageListRelationFilter = {
    every?: BoardImageWhereInput
    some?: BoardImageWhereInput
    none?: BoardImageWhereInput
  }

  export type EnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type BoardImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BoardCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type BoardMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    title?: SortOrder
    content?: SortOrder
    link?: SortOrder
    startDay?: SortOrder
    endDay?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type BoardRelationFilter = {
    is?: BoardWhereInput
    isNot?: BoardWhereInput
  }

  export type BoardImageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageAvgOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    url?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    isThumb?: SortOrder
    boardId?: SortOrder
  }

  export type BoardImageSumOrderByAggregateInput = {
    id?: SortOrder
    width?: SortOrder
    height?: SortOrder
    size?: SortOrder
    boardId?: SortOrder
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type BoardReplyRelationFilter = {
    is?: BoardReplyWhereInput | null
    isNot?: BoardReplyWhereInput | null
  }

  export type BoardReplyCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type BoardReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplyMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    content?: SortOrder
    isDisable?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
    boardType?: SortOrder
  }

  export type BoardReplySumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    boardId?: SortOrder
    boardReplyId?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type BoardCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type BoardUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    connect?: Enumerable<BoardWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NoticeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    connect?: Enumerable<NoticeWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumLoginTypeFieldUpdateOperationsInput = {
    set?: LoginType
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: UserType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type BoardUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardCreateWithoutUserInput>, Enumerable<BoardUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardCreateManyUserInputEnvelope
    set?: Enumerable<BoardWhereUniqueInput>
    disconnect?: Enumerable<BoardWhereUniqueInput>
    delete?: Enumerable<BoardWhereUniqueInput>
    connect?: Enumerable<BoardWhereUniqueInput>
    update?: Enumerable<BoardUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutUserInput>, Enumerable<BoardReplyUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutUserInput>
    createMany?: BoardReplyCreateManyUserInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NoticeUncheckedUpdateManyWithoutUserInput = {
    create?: XOR<Enumerable<NoticeCreateWithoutUserInput>, Enumerable<NoticeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<NoticeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<NoticeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: NoticeCreateManyUserInputEnvelope
    set?: Enumerable<NoticeWhereUniqueInput>
    disconnect?: Enumerable<NoticeWhereUniqueInput>
    delete?: Enumerable<NoticeWhereUniqueInput>
    connect?: Enumerable<NoticeWhereUniqueInput>
    update?: Enumerable<NoticeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<NoticeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<NoticeScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutNoticeInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNoticeInput = {
    create?: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
    connectOrCreate?: UserCreateOrConnectWithoutNoticeInput
    upsert?: UserUpsertWithoutNoticeInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
  }

  export type BoardImageCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutBoardInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    connect?: UserWhereUniqueInput
  }

  export type BoardImageUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardImageWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardImageUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutBoardInput = {
    create?: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardInput
    upsert?: UserUpsertWithoutBoardInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
  }

  export type EnumBoardTypeFieldUpdateOperationsInput = {
    set?: BoardType
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardImageCreateWithoutBoardInput>, Enumerable<BoardImageUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardImageCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardImageUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardImageCreateManyBoardInputEnvelope
    set?: Enumerable<BoardImageWhereUniqueInput>
    disconnect?: Enumerable<BoardImageWhereUniqueInput>
    delete?: Enumerable<BoardImageWhereUniqueInput>
    connect?: Enumerable<BoardImageWhereUniqueInput>
    update?: Enumerable<BoardImageUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardImageUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardImageScalarWhereInput>
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardInput>
    createMany?: BoardReplyCreateManyBoardInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type BoardCreateNestedOneWithoutBoardImageInput = {
    create?: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImageInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardUpdateOneRequiredWithoutBoardImageInput = {
    create?: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardImageInput
    upsert?: BoardUpsertWithoutBoardImageInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardImageInput, BoardUncheckedUpdateWithoutBoardImageInput>
  }

  export type UserCreateNestedOneWithoutBoardReplyInput = {
    create?: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardReplyInput
    connect?: UserWhereUniqueInput
  }

  export type BoardCreateNestedOneWithoutBoardReplyInput = {
    create?: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardReplyInput
    connect?: BoardWhereUniqueInput
  }

  export type BoardReplyCreateNestedOneWithoutBoardNestedReplyInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedReplyInput
    connect?: BoardReplyWhereUniqueInput
  }

  export type BoardReplyCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    connect?: Enumerable<BoardReplyWhereUniqueInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneRequiredWithoutBoardReplyInput = {
    create?: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: UserCreateOrConnectWithoutBoardReplyInput
    upsert?: UserUpsertWithoutBoardReplyInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutBoardReplyInput, UserUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardUpdateOneRequiredWithoutBoardReplyInput = {
    create?: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
    connectOrCreate?: BoardCreateOrConnectWithoutBoardReplyInput
    upsert?: BoardUpsertWithoutBoardReplyInput
    connect?: BoardWhereUniqueInput
    update?: XOR<BoardUpdateWithoutBoardReplyInput, BoardUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateOneWithoutBoardNestedReplyInput = {
    create?: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
    connectOrCreate?: BoardReplyCreateOrConnectWithoutBoardNestedReplyInput
    upsert?: BoardReplyUpsertWithoutBoardNestedReplyInput
    disconnect?: boolean
    delete?: boolean
    connect?: BoardReplyWhereUniqueInput
    update?: XOR<BoardReplyUpdateWithoutBoardNestedReplyInput, BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyUpdateManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardReplyInput = {
    create?: XOR<Enumerable<BoardReplyCreateWithoutBoardReplyInput>, Enumerable<BoardReplyUncheckedCreateWithoutBoardReplyInput>>
    connectOrCreate?: Enumerable<BoardReplyCreateOrConnectWithoutBoardReplyInput>
    upsert?: Enumerable<BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput>
    createMany?: BoardReplyCreateManyBoardReplyInputEnvelope
    set?: Enumerable<BoardReplyWhereUniqueInput>
    disconnect?: Enumerable<BoardReplyWhereUniqueInput>
    delete?: Enumerable<BoardReplyWhereUniqueInput>
    connect?: Enumerable<BoardReplyWhereUniqueInput>
    update?: Enumerable<BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput>
    updateMany?: Enumerable<BoardReplyUpdateManyWithWhereWithoutBoardReplyInput>
    deleteMany?: Enumerable<BoardReplyScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedEnumLoginTypeFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeFilter | LoginType
  }

  export type NestedEnumUserTypeFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeFilter | UserType
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedEnumLoginTypeWithAggregatesFilter = {
    equals?: LoginType
    in?: Enumerable<LoginType>
    notIn?: Enumerable<LoginType>
    not?: NestedEnumLoginTypeWithAggregatesFilter | LoginType
    _count?: NestedIntFilter
    _min?: NestedEnumLoginTypeFilter
    _max?: NestedEnumLoginTypeFilter
  }

  export type NestedEnumUserTypeWithAggregatesFilter = {
    equals?: UserType
    in?: Enumerable<UserType>
    notIn?: Enumerable<UserType>
    not?: NestedEnumUserTypeWithAggregatesFilter | UserType
    _count?: NestedIntFilter
    _min?: NestedEnumUserTypeFilter
    _max?: NestedEnumUserTypeFilter
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedEnumBoardTypeFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeFilter | BoardType
  }

  export type NestedEnumBoardTypeWithAggregatesFilter = {
    equals?: BoardType
    in?: Enumerable<BoardType>
    notIn?: Enumerable<BoardType>
    not?: NestedEnumBoardTypeWithAggregatesFilter | BoardType
    _count?: NestedIntFilter
    _min?: NestedEnumBoardTypeFilter
    _max?: NestedEnumBoardTypeFilter
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type BoardCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutUserInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardCreateManyUserInputEnvelope = {
    data: Enumerable<BoardCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutUserInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyCreateManyUserInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type NoticeCreateWithoutUserInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type NoticeCreateOrConnectWithoutUserInput = {
    where: NoticeWhereUniqueInput
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeCreateManyUserInputEnvelope = {
    data: Enumerable<NoticeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type BoardUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    update: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
    create: XOR<BoardCreateWithoutUserInput, BoardUncheckedCreateWithoutUserInput>
  }

  export type BoardUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardWhereUniqueInput
    data: XOR<BoardUpdateWithoutUserInput, BoardUncheckedUpdateWithoutUserInput>
  }

  export type BoardUpdateManyWithWhereWithoutUserInput = {
    where: BoardScalarWhereInput
    data: XOR<BoardUpdateManyMutationInput, BoardUncheckedUpdateManyWithoutBoardInput>
  }

  export type BoardScalarWhereInput = {
    AND?: Enumerable<BoardScalarWhereInput>
    OR?: Enumerable<BoardScalarWhereInput>
    NOT?: Enumerable<BoardScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    startDay?: DateTimeFilter | Date | string
    endDay?: DateTimeFilter | Date | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
    create: XOR<BoardReplyCreateWithoutUserInput, BoardReplyUncheckedCreateWithoutUserInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutUserInput, BoardReplyUncheckedUpdateWithoutUserInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutUserInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardReplyInput>
  }

  export type BoardReplyScalarWhereInput = {
    AND?: Enumerable<BoardReplyScalarWhereInput>
    OR?: Enumerable<BoardReplyScalarWhereInput>
    NOT?: Enumerable<BoardReplyScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeNullableFilter | Date | string | null
    content?: StringFilter | string
    isDisable?: BoolFilter | boolean
    userId?: IntFilter | number
    boardId?: IntFilter | number
    boardReplyId?: IntNullableFilter | number | null
    boardType?: EnumBoardTypeFilter | BoardType
  }

  export type NoticeUpsertWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    update: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
    create: XOR<NoticeCreateWithoutUserInput, NoticeUncheckedCreateWithoutUserInput>
  }

  export type NoticeUpdateWithWhereUniqueWithoutUserInput = {
    where: NoticeWhereUniqueInput
    data: XOR<NoticeUpdateWithoutUserInput, NoticeUncheckedUpdateWithoutUserInput>
  }

  export type NoticeUpdateManyWithWhereWithoutUserInput = {
    where: NoticeScalarWhereInput
    data: XOR<NoticeUpdateManyMutationInput, NoticeUncheckedUpdateManyWithoutNoticeInput>
  }

  export type NoticeScalarWhereInput = {
    AND?: Enumerable<NoticeScalarWhereInput>
    OR?: Enumerable<NoticeScalarWhereInput>
    NOT?: Enumerable<NoticeScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    title?: StringFilter | string
    content?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    userId?: IntFilter | number
  }

  export type UserCreateWithoutNoticeInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNoticeInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNoticeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
  }

  export type UserUpsertWithoutNoticeInput = {
    update: XOR<UserUpdateWithoutNoticeInput, UserUncheckedUpdateWithoutNoticeInput>
    create: XOR<UserCreateWithoutNoticeInput, UserUncheckedCreateWithoutNoticeInput>
  }

  export type UserUpdateWithoutNoticeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutNoticeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
  }

  export type BoardImageCreateWithoutBoardInput = {
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardImageCreateOrConnectWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardImageCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type BoardReplyCreateWithoutBoardInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyCreateManyBoardInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutBoardInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    BoardReply?: BoardReplyCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    update: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardImageCreateWithoutBoardInput, BoardImageUncheckedCreateWithoutBoardInput>
  }

  export type BoardImageUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardImageWhereUniqueInput
    data: XOR<BoardImageUpdateWithoutBoardInput, BoardImageUncheckedUpdateWithoutBoardInput>
  }

  export type BoardImageUpdateManyWithWhereWithoutBoardInput = {
    where: BoardImageScalarWhereInput
    data: XOR<BoardImageUpdateManyMutationInput, BoardImageUncheckedUpdateManyWithoutBoardImageInput>
  }

  export type BoardImageScalarWhereInput = {
    AND?: Enumerable<BoardImageScalarWhereInput>
    OR?: Enumerable<BoardImageScalarWhereInput>
    NOT?: Enumerable<BoardImageScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    url?: StringFilter | string
    width?: IntFilter | number
    height?: IntFilter | number
    size?: IntFilter | number
    isThumb?: BoolFilter | boolean
    boardId?: IntFilter | number
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
    create: XOR<BoardReplyCreateWithoutBoardInput, BoardReplyUncheckedCreateWithoutBoardInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardInput, BoardReplyUncheckedUpdateWithoutBoardInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardReplyInput>
  }

  export type UserUpsertWithoutBoardInput = {
    update: XOR<UserUpdateWithoutBoardInput, UserUncheckedUpdateWithoutBoardInput>
    create: XOR<UserCreateWithoutBoardInput, UserUncheckedCreateWithoutBoardInput>
  }

  export type UserUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
  }

  export type BoardCreateWithoutBoardImageInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReply?: BoardReplyCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardImageInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardImageInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
  }

  export type BoardUpsertWithoutBoardImageInput = {
    update: XOR<BoardUpdateWithoutBoardImageInput, BoardUncheckedUpdateWithoutBoardImageInput>
    create: XOR<BoardCreateWithoutBoardImageInput, BoardUncheckedCreateWithoutBoardImageInput>
  }

  export type BoardUpdateWithoutBoardImageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type UserCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardCreateNestedManyWithoutUserInput
    Notice?: NoticeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    loginId: string
    loginPw?: string | null
    username: string
    loginType: LoginType
    userType: UserType
    nickname: string
    phone?: string
    isDisable?: boolean
    Board?: BoardUncheckedCreateNestedManyWithoutUserInput
    Notice?: NoticeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutBoardReplyInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageCreateNestedManyWithoutBoardInput
    User: UserCreateNestedOneWithoutBoardInput
    boardType?: BoardType
  }

  export type BoardUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    BoardImage?: BoardImageUncheckedCreateNestedManyWithoutBoardInput
    userId: number
    boardType?: BoardType
  }

  export type BoardCreateOrConnectWithoutBoardReplyInput = {
    where: BoardWhereUniqueInput
    create: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyCreateWithoutBoardNestedReplyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardReply?: BoardReplyCreateNestedOneWithoutBoardNestedReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardNestedReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardNestedReplyInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyCreateWithoutBoardReplyInput = {
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    User: UserCreateNestedOneWithoutBoardReplyInput
    Board: BoardCreateNestedOneWithoutBoardReplyInput
    BoardNestedReply?: BoardReplyCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyUncheckedCreateWithoutBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    BoardNestedReply?: BoardReplyUncheckedCreateNestedManyWithoutBoardReplyInput
    boardType?: BoardType
  }

  export type BoardReplyCreateOrConnectWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyCreateManyBoardReplyInputEnvelope = {
    data: Enumerable<BoardReplyCreateManyBoardReplyInput>
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBoardReplyInput = {
    update: XOR<UserUpdateWithoutBoardReplyInput, UserUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<UserCreateWithoutBoardReplyInput, UserUncheckedCreateWithoutBoardReplyInput>
  }

  export type UserUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateManyWithoutUserInput
    Notice?: NoticeUpdateManyWithoutUserInput
  }

  export type UserUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    loginId?: StringFieldUpdateOperationsInput | string
    loginPw?: NullableStringFieldUpdateOperationsInput | string | null
    username?: StringFieldUpdateOperationsInput | string
    loginType?: EnumLoginTypeFieldUpdateOperationsInput | LoginType
    userType?: EnumUserTypeFieldUpdateOperationsInput | UserType
    nickname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUncheckedUpdateManyWithoutUserInput
    Notice?: NoticeUncheckedUpdateManyWithoutUserInput
  }

  export type BoardUpsertWithoutBoardReplyInput = {
    update: XOR<BoardUpdateWithoutBoardReplyInput, BoardUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<BoardCreateWithoutBoardReplyInput, BoardUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    User?: UserUpdateOneRequiredWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    userId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithoutBoardNestedReplyInput = {
    update: XOR<BoardReplyUpdateWithoutBoardNestedReplyInput, BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput>
    create: XOR<BoardReplyCreateWithoutBoardNestedReplyInput, BoardReplyUncheckedCreateWithoutBoardNestedReplyInput>
  }

  export type BoardReplyUpdateWithoutBoardNestedReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardNestedReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpsertWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    update: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
    create: XOR<BoardReplyCreateWithoutBoardReplyInput, BoardReplyUncheckedCreateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateWithWhereUniqueWithoutBoardReplyInput = {
    where: BoardReplyWhereUniqueInput
    data: XOR<BoardReplyUpdateWithoutBoardReplyInput, BoardReplyUncheckedUpdateWithoutBoardReplyInput>
  }

  export type BoardReplyUpdateManyWithWhereWithoutBoardReplyInput = {
    where: BoardReplyScalarWhereInput
    data: XOR<BoardReplyUpdateManyMutationInput, BoardReplyUncheckedUpdateManyWithoutBoardNestedReplyInput>
  }

  export type BoardCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
    startDay?: Date | string
    endDay?: Date | string
    isDisable?: boolean
    boardType?: BoardType
  }

  export type BoardReplyCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    boardId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type NoticeCreateManyUserInput = {
    id?: number
    createdAt?: Date | string
    title: string
    content?: string | null
    link?: string | null
  }

  export type BoardUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUpdateManyWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    BoardImage?: BoardImageUncheckedUpdateManyWithoutBoardInput
    BoardReply?: BoardReplyUncheckedUpdateManyWithoutBoardInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardUncheckedUpdateManyWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    startDay?: DateTimeFieldUpdateOperationsInput | Date | string
    endDay?: DateTimeFieldUpdateOperationsInput | Date | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    boardId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type NoticeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NoticeUncheckedUpdateManyWithoutNoticeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BoardImageCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    url: string
    width: number
    height: number
    size: number
    isThumb?: boolean
  }

  export type BoardReplyCreateManyBoardInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardReplyId?: number | null
    boardType?: BoardType
  }

  export type BoardImageUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardImageUncheckedUpdateManyWithoutBoardImageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    url?: StringFieldUpdateOperationsInput | string
    width?: IntFieldUpdateOperationsInput | number
    height?: IntFieldUpdateOperationsInput | number
    size?: IntFieldUpdateOperationsInput | number
    isThumb?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BoardReplyUpdateWithoutBoardInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    BoardReply?: BoardReplyUpdateOneWithoutBoardNestedReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardReplyId?: NullableIntFieldUpdateOperationsInput | number | null
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyCreateManyBoardReplyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    content: string
    isDisable?: boolean
    userId: number
    boardId: number
    boardType?: BoardType
  }

  export type BoardReplyUpdateWithoutBoardReplyInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    User?: UserUpdateOneRequiredWithoutBoardReplyInput
    Board?: BoardUpdateOneRequiredWithoutBoardReplyInput
    BoardNestedReply?: BoardReplyUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateWithoutBoardReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    BoardNestedReply?: BoardReplyUncheckedUpdateManyWithoutBoardReplyInput
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
  }

  export type BoardReplyUncheckedUpdateManyWithoutBoardNestedReplyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    content?: StringFieldUpdateOperationsInput | string
    isDisable?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
    boardId?: IntFieldUpdateOperationsInput | number
    boardType?: EnumBoardTypeFieldUpdateOperationsInput | BoardType
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
  export const dmmf: runtime.DMMF.Document;
}