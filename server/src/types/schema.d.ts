./types#IContext
// Generated in 2019-02-25T22:28:29+03:00
export type Maybe<T> = T | null;


export interface LoginInput {
  
  email: string;
  
  password: string;
}

export interface RegisterInput {
  
  username: string;
  
  email: string;
  
  password: string;
}

export interface RequestResetPasswordInput {
  
  email: string;
}

export interface ResetPasswordInput {
  
  newPassword: string;
  
  key: string;
}

export enum UserPermissions {
  Admin = "ADMIN",
  User = "USER",
}







// ====================================================
// Types
// ====================================================



export interface Query {
  
  hello: string;
  
  me?: Maybe<User>;
}


export interface User {
  
  id: string;
  
  username: string;
  
  email: string;
  
  permissions: UserPermissions[];
}


export interface Mutation {
  
  login: Response;
  
  logout: LogoutResponse;
  
  register: Response;
  
  requestResetPassword: Response;
  
  resetPassword: Response;
}


export interface Response {
  
  error?: Maybe<Error[]>;
  
  success: boolean;
}


export interface Error {
  
  path: string;
  
  message: string;
}


export interface LogoutResponse {
  
  error?: Maybe<Error[]>;
  
  success: boolean;
}



// ====================================================
// Arguments
// ====================================================

export interface LoginMutationArgs {
  
  input: LoginInput;
}
export interface RegisterMutationArgs {
  
  input: RegisterInput;
}
export interface RequestResetPasswordMutationArgs {
  
  input?: Maybe<RequestResetPasswordInput>;
}
export interface ResetPasswordMutationArgs {
  
  input: ResetPasswordInput;
}


import { GraphQLResolveInfo } from 'graphql';



import { IContext } from './types';

export type Resolver<Result, Parent = {}, Context = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: Context,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, Context, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: Context,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<Result, Parent = {}, Context = {}, Args = {}> =
  | ((...args: any[]) => ISubscriptionResolverObject<Result, Parent, Context, Args>)
  | ISubscriptionResolverObject<Result, Parent, Context, Args>;

export type TypeResolveFn<Types, Parent = {}, Context = {}> = (
  parent: Parent,
  context: Context,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;


export namespace QueryResolvers {
  export interface Resolvers<Context = IContext, TypeParent = {}> {
    
    hello?: HelloResolver<string, TypeParent, Context>;
    
    me?: MeResolver<Maybe<User>, TypeParent, Context>;
  }


  export type HelloResolver<R = string, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type MeResolver<R = Maybe<User>, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace UserResolvers {
  export interface Resolvers<Context = IContext, TypeParent = User> {
    
    id?: IdResolver<string, TypeParent, Context>;
    
    username?: UsernameResolver<string, TypeParent, Context>;
    
    email?: EmailResolver<string, TypeParent, Context>;
    
    permissions?: PermissionsResolver<UserPermissions[], TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type UsernameResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type PermissionsResolver<R = UserPermissions[], Parent = User, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace MutationResolvers {
  export interface Resolvers<Context = IContext, TypeParent = {}> {
    
    login?: LoginResolver<Response, TypeParent, Context>;
    
    logout?: LogoutResolver<LogoutResponse, TypeParent, Context>;
    
    register?: RegisterResolver<Response, TypeParent, Context>;
    
    requestResetPassword?: RequestResetPasswordResolver<Response, TypeParent, Context>;
    
    resetPassword?: ResetPasswordResolver<Response, TypeParent, Context>;
  }


  export type LoginResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    
    input: LoginInput;
  }


  export type LogoutResolver<R = LogoutResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type RegisterResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, RegisterArgs>;
  export interface RegisterArgs {
    
    input: RegisterInput;
  }


  export type RequestResetPasswordResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, RequestResetPasswordArgs>;
  export interface RequestResetPasswordArgs {
    
    input?: Maybe<RequestResetPasswordInput>;
  }


  export type ResetPasswordResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ResetPasswordArgs>;
  export interface ResetPasswordArgs {
    
    input: ResetPasswordInput;
  }

  
}

export namespace ResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Response> {
    
    error?: ErrorResolver<Maybe<Error[]>, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
  }


  export type ErrorResolver<R = Maybe<Error[]>, Parent = Response, Context = IContext> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = Response, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ErrorResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Error> {
    
    path?: PathResolver<string, TypeParent, Context>;
    
    message?: MessageResolver<string, TypeParent, Context>;
  }


  export type PathResolver<R = string, Parent = Error, Context = IContext> = Resolver<R, Parent, Context>;
  export type MessageResolver<R = string, Parent = Error, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace LogoutResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = LogoutResponse> {
    
    error?: ErrorResolver<Maybe<Error[]>, TypeParent, Context>;
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
  }


  export type ErrorResolver<R = Maybe<Error[]>, Parent = LogoutResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type SuccessResolver<R = boolean, Parent = LogoutResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}



/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<Result, SkipDirectiveArgs, IContext>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<Result, IncludeDirectiveArgs, IContext>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<Result, DeprecatedDirectiveArgs, IContext>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}



export interface IResolvers {
    Query?: QueryResolvers.Resolvers;
    User?: UserResolvers.Resolvers;
    Mutation?: MutationResolvers.Resolvers;
    Response?: ResponseResolvers.Resolvers;
    Error?: ErrorResolvers.Resolvers;
    LogoutResponse?: LogoutResponseResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}