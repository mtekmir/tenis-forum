/* tslint:disable */
// Generated in 2020-04-13T12:45:34+02:00
export type Maybe<T> = T | null;

export interface GetUploadUrlInput {
  contentType?: Maybe<string>;

  extention?: Maybe<string>;
}

export interface PostGetAllInput {
  id?: Maybe<string>;

  filterBy?: Maybe<FilterBy>;

  offset?: Maybe<number>;

  limit?: Maybe<number>;
}

export interface ThreadGetAllInput {
  id?: Maybe<string>;

  filterBy?: Maybe<FilterBy>;

  offset?: Maybe<number>;

  limit?: Maybe<number>;
}

export interface GetThreadInput {
  id: string;

  offset?: Maybe<number>;

  limit?: Maybe<number>;
}

export interface LoginInput {
  email: string;

  password: string;
}

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

export interface EditUserProfileInput {
  profileImageKey?: Maybe<string>;

  username?: Maybe<string>;

  location?: Maybe<string>;

  occupation?: Maybe<string>;

  gender?: Maybe<Gender>;
}

export enum UserPermissions {
  Admin = "ADMIN",
  User = "USER"
}

export enum FilterBy {
  User = "USER",
  Thread = "THREAD"
}

export enum Gender {
  NotSelected = "NOT_SELECTED",
  Female = "FEMALE",
  Male = "MALE"
}

export type Date = any;

export type DateTime = any;

export type Upload = any;

// ====================================================
// Scalars
// ====================================================

// ====================================================
// Types
// ====================================================

export interface Query {
  dashboardGet: GetDashboardResponse;

  categoryGetAll: CategoryGetAllResponse;

  categoryGet: Category;

  categoryGetSummaryAll: CategoryGetSummaryAllResponse;

  getUploadUrl: GetUploadUrlResponse;

  forumGet: GetForumResponse;

  forumGetAll: ForumGetAllResponse;

  postGetAll: PostGetAllResponse;

  postGet: PostInfo;

  threadGetAll: ThreadGetAllResponse;

  threadGet: GetThreadResponse;

  me?: Maybe<User>;

  userGetAll: UserGetAllResponse;

  userGet: UserInfo;

  userProfileGet: UserProfile;
}

export interface GetDashboardResponse {
  userCount: number;

  postCount: number;

  threadCount: number;

  forumCount: number;

  categoryCount: number;
}

export interface CategoryGetAllResponse {
  success: boolean;

  categories: Category[];
}

export interface Category {
  id: number;

  name: string;

  forums: Forum[];
}

export interface Forum {
  id: number;

  name: string;

  createdAt: Date;

  category: Category;

  threads: Thread[];
}

export interface Thread {
  id: number;

  forum: Forum;

  originalPost: Post;

  createdAt: Date;

  posts: Post[];

  title: string;

  owner: ThreadOwner;
}

export interface Post {
  id: number;

  text: string;

  createdAt: Date;

  author: User;

  thread: Thread;
}

export interface User {
  id: string;

  username: string;

  email: string;

  permissions: UserPermissions[];

  profileImageUrl?: Maybe<string>;

  profile?: Maybe<UserProfile>;
}

export interface UserProfile {
  id: number;

  location?: Maybe<string>;

  gender: string;

  occupation?: Maybe<string>;
}

export interface ThreadOwner {
  username: string;
}

export interface CategoryGetSummaryAllResponse {
  categories: CategoryInfo[];
}

export interface CategoryInfo {
  id: number;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  forumCount: number;
}

export interface GetUploadUrlResponse {
  success: boolean;

  uploadKey?: Maybe<string>;

  uploadUrl?: Maybe<string>;
}

export interface GetForumResponse {
  forum: Forum;

  threadCount: number;
}

export interface ForumGetAllResponse {
  forums: ForumInfo[];
}

export interface ForumInfo {
  id: number;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  threadCount: number;
}

export interface PostGetAllResponse {
  posts: PostInfo[];
}

export interface PostInfo {
  id: number;

  text: string;

  createdAt: Date;

  authorId: string;

  authorUsername: string;

  threadId: string;

  threadTitle: string;
}

export interface ThreadGetAllResponse {
  threads: ThreadInfo[];
}

export interface ThreadInfo {
  id: number;

  title: string;

  createdAt: Date;

  updatedAt: Date;

  postCount: number;
}

export interface GetThreadResponse {
  thread: Thread;

  postCount: number;
}

export interface UserGetAllResponse {
  users: UserSummary[];
}

export interface UserSummary {
  id: string;

  username: string;

  email: string;

  registerDate: Date;

  threadCount: number;

  postCount: number;
}

export interface UserInfo {
  id: string;

  username: string;

  email: string;

  createdAt: Date;

  permissions: UserPermissions[];

  profileImageUrl?: Maybe<string>;

  password: string;

  profile?: Maybe<UserProfile>;
}

export interface Mutation {
  adminLogin: Response;

  categoryCreate: Category;

  categoryDelete: Response;

  fakeData: boolean;

  forumCreate: Forum;

  forumDelete: Response;

  postCreate: Post;

  postDelete?: Maybe<Post>;

  threadCreate: CreateThreadResponse;

  threadDelete?: Maybe<Thread>;

  createAdmin: DemoAdmin;

  confirmUserEmail: Response;

  login: Response;

  logout: Response;

  register: Response;

  requestResetPassword: Response;

  resetPassword: Response;

  editUserProfile: Response;
}

export interface Response {
  error?: Maybe<Error[]>;

  success: boolean;
}

export interface Error {
  path: string;

  message: string;
}

export interface CreateThreadResponse {
  id: number;

  title: string;
}

export interface DemoAdmin {
  username: string;

  password: string;

  email: string;
}

// ====================================================
// Arguments
// ====================================================

export interface CategoryGetQueryArgs {
  id: number;

  limit?: Maybe<number>;
}
export interface GetUploadUrlQueryArgs {
  input: GetUploadUrlInput;
}
export interface ForumGetQueryArgs {
  id: number;

  offset?: Maybe<number>;

  limit?: Maybe<number>;
}
export interface PostGetAllQueryArgs {
  input: PostGetAllInput;
}
export interface PostGetQueryArgs {
  id?: Maybe<number>;
}
export interface ThreadGetAllQueryArgs {
  input: ThreadGetAllInput;
}
export interface ThreadGetQueryArgs {
  input: GetThreadInput;
}
export interface UserGetQueryArgs {
  id: string;
}
export interface UserProfileGetQueryArgs {
  id: string;
}
export interface AdminLoginMutationArgs {
  input: LoginInput;
}
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
export interface ConfirmUserEmailMutationArgs {
  token: string;
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
export interface EditUserProfileMutationArgs {
  input: EditUserProfileInput;
}

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

import { IContext } from "./types";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    dashboardGet?: DashboardGetResolver<
      GetDashboardResponse,
      TypeParent,
      TContext
    >;

    categoryGetAll?: CategoryGetAllResolver<
      CategoryGetAllResponse,
      TypeParent,
      TContext
    >;

    categoryGet?: CategoryGetResolver<Category, TypeParent, TContext>;

    categoryGetSummaryAll?: CategoryGetSummaryAllResolver<
      CategoryGetSummaryAllResponse,
      TypeParent,
      TContext
    >;

    getUploadUrl?: GetUploadUrlResolver<
      GetUploadUrlResponse,
      TypeParent,
      TContext
    >;

    forumGet?: ForumGetResolver<GetForumResponse, TypeParent, TContext>;

    forumGetAll?: ForumGetAllResolver<
      ForumGetAllResponse,
      TypeParent,
      TContext
    >;

    postGetAll?: PostGetAllResolver<PostGetAllResponse, TypeParent, TContext>;

    postGet?: PostGetResolver<PostInfo, TypeParent, TContext>;

    threadGetAll?: ThreadGetAllResolver<
      ThreadGetAllResponse,
      TypeParent,
      TContext
    >;

    threadGet?: ThreadGetResolver<GetThreadResponse, TypeParent, TContext>;

    me?: MeResolver<Maybe<User>, TypeParent, TContext>;

    userGetAll?: UserGetAllResolver<UserGetAllResponse, TypeParent, TContext>;

    userGet?: UserGetResolver<UserInfo, TypeParent, TContext>;

    userProfileGet?: UserProfileGetResolver<UserProfile, TypeParent, TContext>;
  }

  export type DashboardGetResolver<
    R = GetDashboardResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CategoryGetAllResolver<
    R = CategoryGetAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CategoryGetResolver<
    R = Category,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, CategoryGetArgs>;
  export interface CategoryGetArgs {
    id: number;

    limit?: Maybe<number>;
  }

  export type CategoryGetSummaryAllResolver<
    R = CategoryGetSummaryAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type GetUploadUrlResolver<
    R = GetUploadUrlResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, GetUploadUrlArgs>;
  export interface GetUploadUrlArgs {
    input: GetUploadUrlInput;
  }

  export type ForumGetResolver<
    R = GetForumResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ForumGetArgs>;
  export interface ForumGetArgs {
    id: number;

    offset?: Maybe<number>;

    limit?: Maybe<number>;
  }

  export type ForumGetAllResolver<
    R = ForumGetAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostGetAllResolver<
    R = PostGetAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, PostGetAllArgs>;
  export interface PostGetAllArgs {
    input: PostGetAllInput;
  }

  export type PostGetResolver<
    R = PostInfo,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, PostGetArgs>;
  export interface PostGetArgs {
    id?: Maybe<number>;
  }

  export type ThreadGetAllResolver<
    R = ThreadGetAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ThreadGetAllArgs>;
  export interface ThreadGetAllArgs {
    input: ThreadGetAllInput;
  }

  export type ThreadGetResolver<
    R = GetThreadResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ThreadGetArgs>;
  export interface ThreadGetArgs {
    input: GetThreadInput;
  }

  export type MeResolver<
    R = Maybe<User>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UserGetAllResolver<
    R = UserGetAllResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UserGetResolver<
    R = UserInfo,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, UserGetArgs>;
  export interface UserGetArgs {
    id: string;
  }

  export type UserProfileGetResolver<
    R = UserProfile,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, UserProfileGetArgs>;
  export interface UserProfileGetArgs {
    id: string;
  }
}

export namespace GetDashboardResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GetDashboardResponse
  > {
    userCount?: UserCountResolver<number, TypeParent, TContext>;

    postCount?: PostCountResolver<number, TypeParent, TContext>;

    threadCount?: ThreadCountResolver<number, TypeParent, TContext>;

    forumCount?: ForumCountResolver<number, TypeParent, TContext>;

    categoryCount?: CategoryCountResolver<number, TypeParent, TContext>;
  }

  export type UserCountResolver<
    R = number,
    Parent = GetDashboardResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostCountResolver<
    R = number,
    Parent = GetDashboardResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadCountResolver<
    R = number,
    Parent = GetDashboardResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ForumCountResolver<
    R = number,
    Parent = GetDashboardResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CategoryCountResolver<
    R = number,
    Parent = GetDashboardResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CategoryGetAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = CategoryGetAllResponse
  > {
    success?: SuccessResolver<boolean, TypeParent, TContext>;

    categories?: CategoriesResolver<Category[], TypeParent, TContext>;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = CategoryGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CategoriesResolver<
    R = Category[],
    Parent = CategoryGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CategoryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Category> {
    id?: IdResolver<number, TypeParent, TContext>;

    name?: NameResolver<string, TypeParent, TContext>;

    forums?: ForumsResolver<Forum[], TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = Category,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = string,
    Parent = Category,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ForumsResolver<
    R = Forum[],
    Parent = Category,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ForumResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Forum> {
    id?: IdResolver<number, TypeParent, TContext>;

    name?: NameResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    category?: CategoryResolver<Category, TypeParent, TContext>;

    threads?: ThreadsResolver<Thread[], TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = Forum,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = string,
    Parent = Forum,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = Forum,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CategoryResolver<
    R = Category,
    Parent = Forum,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadsResolver<
    R = Thread[],
    Parent = Forum,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ThreadResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Thread> {
    id?: IdResolver<number, TypeParent, TContext>;

    forum?: ForumResolver<Forum, TypeParent, TContext>;

    originalPost?: OriginalPostResolver<Post, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    posts?: PostsResolver<Post[], TypeParent, TContext>;

    title?: TitleResolver<string, TypeParent, TContext>;

    owner?: OwnerResolver<ThreadOwner, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ForumResolver<
    R = Forum,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type OriginalPostResolver<
    R = Post,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostsResolver<
    R = Post[],
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TitleResolver<
    R = string,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type OwnerResolver<
    R = ThreadOwner,
    Parent = Thread,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PostResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Post> {
    id?: IdResolver<number, TypeParent, TContext>;

    text?: TextResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    author?: AuthorResolver<User, TypeParent, TContext>;

    thread?: ThreadResolver<Thread, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = Post,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TextResolver<
    R = string,
    Parent = Post,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = Post,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AuthorResolver<
    R = User,
    Parent = Post,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadResolver<
    R = Thread,
    Parent = Post,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = User> {
    id?: IdResolver<string, TypeParent, TContext>;

    username?: UsernameResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;

    permissions?: PermissionsResolver<UserPermissions[], TypeParent, TContext>;

    profileImageUrl?: ProfileImageUrlResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    profile?: ProfileResolver<Maybe<UserProfile>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UsernameResolver<
    R = string,
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = string,
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PermissionsResolver<
    R = UserPermissions[],
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ProfileImageUrlResolver<
    R = Maybe<string>,
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ProfileResolver<
    R = Maybe<UserProfile>,
    Parent = User,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserProfileResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = UserProfile> {
    id?: IdResolver<number, TypeParent, TContext>;

    location?: LocationResolver<Maybe<string>, TypeParent, TContext>;

    gender?: GenderResolver<string, TypeParent, TContext>;

    occupation?: OccupationResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = UserProfile,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type LocationResolver<
    R = Maybe<string>,
    Parent = UserProfile,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type GenderResolver<
    R = string,
    Parent = UserProfile,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type OccupationResolver<
    R = Maybe<string>,
    Parent = UserProfile,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ThreadOwnerResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ThreadOwner> {
    username?: UsernameResolver<string, TypeParent, TContext>;
  }

  export type UsernameResolver<
    R = string,
    Parent = ThreadOwner,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CategoryGetSummaryAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = CategoryGetSummaryAllResponse
  > {
    categories?: CategoriesResolver<CategoryInfo[], TypeParent, TContext>;
  }

  export type CategoriesResolver<
    R = CategoryInfo[],
    Parent = CategoryGetSummaryAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CategoryInfoResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = CategoryInfo> {
    id?: IdResolver<number, TypeParent, TContext>;

    name?: NameResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    updatedAt?: UpdatedAtResolver<Date, TypeParent, TContext>;

    forumCount?: ForumCountResolver<number, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = CategoryInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = string,
    Parent = CategoryInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = CategoryInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<
    R = Date,
    Parent = CategoryInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ForumCountResolver<
    R = number,
    Parent = CategoryInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GetUploadUrlResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GetUploadUrlResponse
  > {
    success?: SuccessResolver<boolean, TypeParent, TContext>;

    uploadKey?: UploadKeyResolver<Maybe<string>, TypeParent, TContext>;

    uploadUrl?: UploadUrlResolver<Maybe<string>, TypeParent, TContext>;
  }

  export type SuccessResolver<
    R = boolean,
    Parent = GetUploadUrlResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UploadKeyResolver<
    R = Maybe<string>,
    Parent = GetUploadUrlResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UploadUrlResolver<
    R = Maybe<string>,
    Parent = GetUploadUrlResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GetForumResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GetForumResponse
  > {
    forum?: ForumResolver<Forum, TypeParent, TContext>;

    threadCount?: ThreadCountResolver<number, TypeParent, TContext>;
  }

  export type ForumResolver<
    R = Forum,
    Parent = GetForumResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadCountResolver<
    R = number,
    Parent = GetForumResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ForumGetAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = ForumGetAllResponse
  > {
    forums?: ForumsResolver<ForumInfo[], TypeParent, TContext>;
  }

  export type ForumsResolver<
    R = ForumInfo[],
    Parent = ForumGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ForumInfoResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ForumInfo> {
    id?: IdResolver<number, TypeParent, TContext>;

    name?: NameResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    updatedAt?: UpdatedAtResolver<Date, TypeParent, TContext>;

    threadCount?: ThreadCountResolver<number, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = ForumInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type NameResolver<
    R = string,
    Parent = ForumInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = ForumInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<
    R = Date,
    Parent = ForumInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadCountResolver<
    R = number,
    Parent = ForumInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PostGetAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = PostGetAllResponse
  > {
    posts?: PostsResolver<PostInfo[], TypeParent, TContext>;
  }

  export type PostsResolver<
    R = PostInfo[],
    Parent = PostGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace PostInfoResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = PostInfo> {
    id?: IdResolver<number, TypeParent, TContext>;

    text?: TextResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    authorId?: AuthorIdResolver<string, TypeParent, TContext>;

    authorUsername?: AuthorUsernameResolver<string, TypeParent, TContext>;

    threadId?: ThreadIdResolver<string, TypeParent, TContext>;

    threadTitle?: ThreadTitleResolver<string, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TextResolver<
    R = string,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AuthorIdResolver<
    R = string,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type AuthorUsernameResolver<
    R = string,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadIdResolver<
    R = string,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadTitleResolver<
    R = string,
    Parent = PostInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ThreadGetAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = ThreadGetAllResponse
  > {
    threads?: ThreadsResolver<ThreadInfo[], TypeParent, TContext>;
  }

  export type ThreadsResolver<
    R = ThreadInfo[],
    Parent = ThreadGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ThreadInfoResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = ThreadInfo> {
    id?: IdResolver<number, TypeParent, TContext>;

    title?: TitleResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    updatedAt?: UpdatedAtResolver<Date, TypeParent, TContext>;

    postCount?: PostCountResolver<number, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = ThreadInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TitleResolver<
    R = string,
    Parent = ThreadInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = ThreadInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UpdatedAtResolver<
    R = Date,
    Parent = ThreadInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostCountResolver<
    R = number,
    Parent = ThreadInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace GetThreadResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = GetThreadResponse
  > {
    thread?: ThreadResolver<Thread, TypeParent, TContext>;

    postCount?: PostCountResolver<number, TypeParent, TContext>;
  }

  export type ThreadResolver<
    R = Thread,
    Parent = GetThreadResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostCountResolver<
    R = number,
    Parent = GetThreadResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserGetAllResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = UserGetAllResponse
  > {
    users?: UsersResolver<UserSummary[], TypeParent, TContext>;
  }

  export type UsersResolver<
    R = UserSummary[],
    Parent = UserGetAllResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserSummaryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = UserSummary> {
    id?: IdResolver<string, TypeParent, TContext>;

    username?: UsernameResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;

    registerDate?: RegisterDateResolver<Date, TypeParent, TContext>;

    threadCount?: ThreadCountResolver<number, TypeParent, TContext>;

    postCount?: PostCountResolver<number, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UsernameResolver<
    R = string,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = string,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type RegisterDateResolver<
    R = Date,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ThreadCountResolver<
    R = number,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PostCountResolver<
    R = number,
    Parent = UserSummary,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace UserInfoResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = UserInfo> {
    id?: IdResolver<string, TypeParent, TContext>;

    username?: UsernameResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;

    createdAt?: CreatedAtResolver<Date, TypeParent, TContext>;

    permissions?: PermissionsResolver<UserPermissions[], TypeParent, TContext>;

    profileImageUrl?: ProfileImageUrlResolver<
      Maybe<string>,
      TypeParent,
      TContext
    >;

    password?: PasswordResolver<string, TypeParent, TContext>;

    profile?: ProfileResolver<Maybe<UserProfile>, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type UsernameResolver<
    R = string,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = string,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type CreatedAtResolver<
    R = Date,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PermissionsResolver<
    R = UserPermissions[],
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ProfileImageUrlResolver<
    R = Maybe<string>,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PasswordResolver<
    R = string,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ProfileResolver<
    R = Maybe<UserProfile>,
    Parent = UserInfo,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    adminLogin?: AdminLoginResolver<Response, TypeParent, TContext>;

    categoryCreate?: CategoryCreateResolver<Category, TypeParent, TContext>;

    categoryDelete?: CategoryDeleteResolver<Response, TypeParent, TContext>;

    fakeData?: FakeDataResolver<boolean, TypeParent, TContext>;

    forumCreate?: ForumCreateResolver<Forum, TypeParent, TContext>;

    forumDelete?: ForumDeleteResolver<Response, TypeParent, TContext>;

    postCreate?: PostCreateResolver<Post, TypeParent, TContext>;

    postDelete?: PostDeleteResolver<Maybe<Post>, TypeParent, TContext>;

    threadCreate?: ThreadCreateResolver<
      CreateThreadResponse,
      TypeParent,
      TContext
    >;

    threadDelete?: ThreadDeleteResolver<Maybe<Thread>, TypeParent, TContext>;

    createAdmin?: CreateAdminResolver<DemoAdmin, TypeParent, TContext>;

    confirmUserEmail?: ConfirmUserEmailResolver<Response, TypeParent, TContext>;

    login?: LoginResolver<Response, TypeParent, TContext>;

    logout?: LogoutResolver<Response, TypeParent, TContext>;

    register?: RegisterResolver<Response, TypeParent, TContext>;

    requestResetPassword?: RequestResetPasswordResolver<
      Response,
      TypeParent,
      TContext
    >;

    resetPassword?: ResetPasswordResolver<Response, TypeParent, TContext>;

    editUserProfile?: EditUserProfileResolver<Response, TypeParent, TContext>;
  }

  export type AdminLoginResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, AdminLoginArgs>;
  export interface AdminLoginArgs {
    input: LoginInput;
  }

  export type CategoryCreateResolver<
    R = Category,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, CategoryCreateArgs>;
  export interface CategoryCreateArgs {
    input: CreateCategoryInput;
  }

  export type CategoryDeleteResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, CategoryDeleteArgs>;
  export interface CategoryDeleteArgs {
    id: number;
  }

  export type FakeDataResolver<
    R = boolean,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ForumCreateResolver<
    R = Forum,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ForumCreateArgs>;
  export interface ForumCreateArgs {
    input: CreateForumInput;
  }

  export type ForumDeleteResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ForumDeleteArgs>;
  export interface ForumDeleteArgs {
    id: number;
  }

  export type PostCreateResolver<
    R = Post,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, PostCreateArgs>;
  export interface PostCreateArgs {
    input: CreatePostInput;
  }

  export type PostDeleteResolver<
    R = Maybe<Post>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, PostDeleteArgs>;
  export interface PostDeleteArgs {
    id: number;
  }

  export type ThreadCreateResolver<
    R = CreateThreadResponse,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ThreadCreateArgs>;
  export interface ThreadCreateArgs {
    input: CreateThreadInput;
  }

  export type ThreadDeleteResolver<
    R = Maybe<Thread>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ThreadDeleteArgs>;
  export interface ThreadDeleteArgs {
    id: number;
  }

  export type CreateAdminResolver<
    R = DemoAdmin,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type ConfirmUserEmailResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ConfirmUserEmailArgs>;
  export interface ConfirmUserEmailArgs {
    token: string;
  }

  export type LoginResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, LoginArgs>;
  export interface LoginArgs {
    input: LoginInput;
  }

  export type LogoutResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type RegisterResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, RegisterArgs>;
  export interface RegisterArgs {
    input: RegisterInput;
  }

  export type RequestResetPasswordResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, RequestResetPasswordArgs>;
  export interface RequestResetPasswordArgs {
    input?: Maybe<RequestResetPasswordInput>;
  }

  export type ResetPasswordResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ResetPasswordArgs>;
  export interface ResetPasswordArgs {
    input: ResetPasswordInput;
  }

  export type EditUserProfileResolver<
    R = Response,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, EditUserProfileArgs>;
  export interface EditUserProfileArgs {
    input: EditUserProfileInput;
  }
}

export namespace ResponseResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Response> {
    error?: ErrorResolver<Maybe<Error[]>, TypeParent, TContext>;

    success?: SuccessResolver<boolean, TypeParent, TContext>;
  }

  export type ErrorResolver<
    R = Maybe<Error[]>,
    Parent = Response,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type SuccessResolver<
    R = boolean,
    Parent = Response,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace ErrorResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Error> {
    path?: PathResolver<string, TypeParent, TContext>;

    message?: MessageResolver<string, TypeParent, TContext>;
  }

  export type PathResolver<
    R = string,
    Parent = Error,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type MessageResolver<
    R = string,
    Parent = Error,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace CreateThreadResponseResolvers {
  export interface Resolvers<
    TContext = IContext,
    TypeParent = CreateThreadResponse
  > {
    id?: IdResolver<number, TypeParent, TContext>;

    title?: TitleResolver<string, TypeParent, TContext>;
  }

  export type IdResolver<
    R = number,
    Parent = CreateThreadResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type TitleResolver<
    R = string,
    Parent = CreateThreadResponse,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

export namespace DemoAdminResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = DemoAdmin> {
    username?: UsernameResolver<string, TypeParent, TContext>;

    password?: PasswordResolver<string, TypeParent, TContext>;

    email?: EmailResolver<string, TypeParent, TContext>;
  }

  export type UsernameResolver<
    R = string,
    Parent = DemoAdmin,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type PasswordResolver<
    R = string,
    Parent = DemoAdmin,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type EmailResolver<
    R = string,
    Parent = DemoAdmin,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  IContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  IContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  IContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: "Date";
}
export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<DateTime, any> {
  name: "DateTime";
}
export interface UploadScalarConfig
  extends GraphQLScalarTypeConfig<Upload, any> {
  name: "Upload";
}

export type IResolvers<TContext = IContext> = {
  Query?: QueryResolvers.Resolvers<TContext>;
  GetDashboardResponse?: GetDashboardResponseResolvers.Resolvers<TContext>;
  CategoryGetAllResponse?: CategoryGetAllResponseResolvers.Resolvers<TContext>;
  Category?: CategoryResolvers.Resolvers<TContext>;
  Forum?: ForumResolvers.Resolvers<TContext>;
  Thread?: ThreadResolvers.Resolvers<TContext>;
  Post?: PostResolvers.Resolvers<TContext>;
  User?: UserResolvers.Resolvers<TContext>;
  UserProfile?: UserProfileResolvers.Resolvers<TContext>;
  ThreadOwner?: ThreadOwnerResolvers.Resolvers<TContext>;
  CategoryGetSummaryAllResponse?: CategoryGetSummaryAllResponseResolvers.Resolvers<
    TContext
  >;
  CategoryInfo?: CategoryInfoResolvers.Resolvers<TContext>;
  GetUploadUrlResponse?: GetUploadUrlResponseResolvers.Resolvers<TContext>;
  GetForumResponse?: GetForumResponseResolvers.Resolvers<TContext>;
  ForumGetAllResponse?: ForumGetAllResponseResolvers.Resolvers<TContext>;
  ForumInfo?: ForumInfoResolvers.Resolvers<TContext>;
  PostGetAllResponse?: PostGetAllResponseResolvers.Resolvers<TContext>;
  PostInfo?: PostInfoResolvers.Resolvers<TContext>;
  ThreadGetAllResponse?: ThreadGetAllResponseResolvers.Resolvers<TContext>;
  ThreadInfo?: ThreadInfoResolvers.Resolvers<TContext>;
  GetThreadResponse?: GetThreadResponseResolvers.Resolvers<TContext>;
  UserGetAllResponse?: UserGetAllResponseResolvers.Resolvers<TContext>;
  UserSummary?: UserSummaryResolvers.Resolvers<TContext>;
  UserInfo?: UserInfoResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
  Response?: ResponseResolvers.Resolvers<TContext>;
  Error?: ErrorResolvers.Resolvers<TContext>;
  CreateThreadResponse?: CreateThreadResponseResolvers.Resolvers<TContext>;
  DemoAdmin?: DemoAdminResolvers.Resolvers<TContext>;
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  Upload?: GraphQLScalarType;
} & { [typeName: string]: never };

export type IDirectiveResolvers<Result> = {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
} & { [directiveName: string]: never };
