./types#IContext
// Generated in 2019-03-05T17:46:35+03:00
export type Maybe<T> = T | null;


export interface CreateCategoryInput {
  
  name: string;
}

export interface CreateForumInput {
  
  name: string;
  
  categoryId: number;
}

export interface CreatePostInput {
  
  text: string;
  
  threadId: number;
}

export interface CreateThreadInput {
  
  text: string;
  
  title: string;
  
  forumId: number;
}

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
  
  pwResetToken: string;
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
  
  categoryCreate: Category;
  
  categoryDelete: Response;
  
  forumCreate: Forum;
  
  forumDelete: Response;
  
  postCreate: Post;
  
  postDelete: Response;
  
  threadCreate: CreateThreadResponse;
  
  threadDelete: Response;
  
  login: Response;
  
  logout: Response;
  
  register: Response;
  
  requestResetPassword: Response;
  
  resetPassword: Response;
}


export interface Category {
  
  id: number;
  
  name: string;
}


export interface Response {
  
  error?: Maybe<Error[]>;
  
  success: boolean;
}


export interface Error {
  
  path: string;
  
  message: string;
}


export interface Forum {
  
  id: number;
  
  name: string;
  
  category: Category;
}


export interface Post {
  
  id: number;
  
  text: string;
  
  author: User;
}


export interface CreateThreadResponse {
  
  id: number;
  
  title: string;
}


export interface Thread {
  
  id: number;
  
  Forum: Forum;
  
  originalPost: Post;
  
  posts: Post[];
  
  title: string;
}



// ====================================================
// Arguments
// ====================================================

export interface CategoryCreateMutationArgs {
  
  input: CreateCategoryInput;
}
export interface CategoryDeleteMutationArgs {
  
  id: number;
}
export interface ForumCreateMutationArgs {
  
  input: CreateForumInput;
}
export interface ForumDeleteMutationArgs {
  
  id: number;
}
export interface PostCreateMutationArgs {
  
  input: CreatePostInput;
}
export interface PostDeleteMutationArgs {
  
  id: number;
}
export interface ThreadCreateMutationArgs {
  
  input: CreateThreadInput;
}
export interface ThreadDeleteMutationArgs {
  
  id: number;
}
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
    
    categoryCreate?: CategoryCreateResolver<Category, TypeParent, Context>;
    
    categoryDelete?: CategoryDeleteResolver<Response, TypeParent, Context>;
    
    forumCreate?: ForumCreateResolver<Forum, TypeParent, Context>;
    
    forumDelete?: ForumDeleteResolver<Response, TypeParent, Context>;
    
    postCreate?: PostCreateResolver<Post, TypeParent, Context>;
    
    postDelete?: PostDeleteResolver<Response, TypeParent, Context>;
    
    threadCreate?: ThreadCreateResolver<CreateThreadResponse, TypeParent, Context>;
    
    threadDelete?: ThreadDeleteResolver<Response, TypeParent, Context>;
    
    login?: LoginResolver<Response, TypeParent, Context>;
    
    logout?: LogoutResolver<Response, TypeParent, Context>;
    
    register?: RegisterResolver<Response, TypeParent, Context>;
    
    requestResetPassword?: RequestResetPasswordResolver<Response, TypeParent, Context>;
    
    resetPassword?: ResetPasswordResolver<Response, TypeParent, Context>;
  }


  export type CategoryCreateResolver<R = Category, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, CategoryCreateArgs>;
  export interface CategoryCreateArgs {
    
    input: CreateCategoryInput;
  }


  export type CategoryDeleteResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, CategoryDeleteArgs>;
  export interface CategoryDeleteArgs {
    
    id: number;
  }


  export type ForumCreateResolver<R = Forum, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ForumCreateArgs>;
  export interface ForumCreateArgs {
    
    input: CreateForumInput;
  }


  export type ForumDeleteResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ForumDeleteArgs>;
  export interface ForumDeleteArgs {
    
    id: number;
  }


  export type PostCreateResolver<R = Post, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, PostCreateArgs>;
  export interface PostCreateArgs {
    
    input: CreatePostInput;
  }


  export type PostDeleteResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, PostDeleteArgs>;
  export interface PostDeleteArgs {
    
    id: number;
  }


  export type ThreadCreateResolver<R = CreateThreadResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ThreadCreateArgs>;
  export interface ThreadCreateArgs {
    
    input: CreateThreadInput;
  }


  export type ThreadDeleteResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ThreadDeleteArgs>;
  export interface ThreadDeleteArgs {
    
    id: number;
  }


  export type LoginResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, LoginArgs>;
  export interface LoginArgs {
    
    input: LoginInput;
  }


  export type LogoutResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
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

export namespace CategoryResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Category> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Category, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Category, Context = IContext> = Resolver<R, Parent, Context>;  
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

export namespace ForumResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Forum> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    category?: CategoryResolver<Category, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoryResolver<R = Category, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace PostResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Post> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    text?: TextResolver<string, TypeParent, Context>;
    
    author?: AuthorResolver<User, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;
  export type TextResolver<R = string, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;
  export type AuthorResolver<R = User, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace CreateThreadResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = CreateThreadResponse> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    title?: TitleResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = CreateThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = CreateThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ThreadResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Thread> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    Forum?: ForumResolver<Forum, TypeParent, Context>;
    
    originalPost?: OriginalPostResolver<Post, TypeParent, Context>;
    
    posts?: PostsResolver<Post[], TypeParent, Context>;
    
    title?: TitleResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type ForumResolver<R = Forum, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type OriginalPostResolver<R = Post, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostsResolver<R = Post[], Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;  
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
    Category?: CategoryResolvers.Resolvers;
    Response?: ResponseResolvers.Resolvers;
    Error?: ErrorResolvers.Resolvers;
    Forum?: ForumResolvers.Resolvers;
    Post?: PostResolvers.Resolvers;
    CreateThreadResponse?: CreateThreadResponseResolvers.Resolvers;
    Thread?: ThreadResolvers.Resolvers;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}