/* tslint:disable */
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IContext } from './types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  Upload: any;
};

export type Category = {
   __typename?: 'Category';
  id: Scalars['Int'];
  name: Scalars['String'];
  forums: Array<Forum>;
};

export type CategoryGetAllResponse = {
   __typename?: 'CategoryGetAllResponse';
  success: Scalars['Boolean'];
  categories: Array<Category>;
};

export type CategoryGetSummaryAllResponse = {
   __typename?: 'CategoryGetSummaryAllResponse';
  categories: Array<CategoryInfo>;
};

export type CategoryInfo = {
   __typename?: 'CategoryInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  forumCount: Scalars['Int'];
};

export type CreateCategoryInput = {
  name: Scalars['String'];
};

export type CreateForumInput = {
  name: Scalars['String'];
  categoryId: Scalars['Int'];
};

export type CreatePostInput = {
  text: Scalars['String'];
  threadId: Scalars['Int'];
};

export type CreateThreadInput = {
  text: Scalars['String'];
  title: Scalars['String'];
  forumId: Scalars['Int'];
};

export type CreateThreadResponse = {
   __typename?: 'CreateThreadResponse';
  id: Scalars['Int'];
  title: Scalars['String'];
};



export type DemoAdmin = {
   __typename?: 'DemoAdmin';
  username: Scalars['String'];
  password: Scalars['String'];
  email: Scalars['String'];
};

export type EditUserProfileInput = {
  profileImageKey?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  location?: Maybe<Scalars['String']>;
  occupation?: Maybe<Scalars['String']>;
  gender?: Maybe<Gender>;
  signature?: Maybe<Scalars['String']>;
};

export type Error = {
   __typename?: 'Error';
  path: Scalars['String'];
  message: Scalars['String'];
};

export enum FilterBy {
  User = 'USER',
  Thread = 'THREAD'
}

export type Forum = {
   __typename?: 'Forum';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  category: Category;
  threads: Array<Thread>;
};

export type ForumGetAllResponse = {
   __typename?: 'ForumGetAllResponse';
  forums: Array<ForumInfo>;
};

export type ForumInfo = {
   __typename?: 'ForumInfo';
  id: Scalars['Int'];
  name: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  threadCount: Scalars['Int'];
};

export enum Gender {
  NotSelected = 'NOT_SELECTED',
  Female = 'FEMALE',
  Male = 'MALE'
}

export type GetDashboardResponse = {
   __typename?: 'GetDashboardResponse';
  userCount: Scalars['Int'];
  postCount: Scalars['Int'];
  threadCount: Scalars['Int'];
  forumCount: Scalars['Int'];
  categoryCount: Scalars['Int'];
};

export type GetForumResponse = {
   __typename?: 'GetForumResponse';
  forum: Forum;
  threadCount: Scalars['Int'];
};

export type GetThreadInput = {
  id: Scalars['String'];
};

export type GetThreadPostsInput = {
  threadId: Scalars['String'];
  page?: Maybe<Scalars['Int']>;
};

export type GetThreadPostsResponse = {
   __typename?: 'GetThreadPostsResponse';
  posts: Array<Maybe<Post>>;
  count: Scalars['Int'];
};

export type GetThreadResponse = {
   __typename?: 'GetThreadResponse';
  thread: Thread;
};

export type GetUploadUrlInput = {
  contentType?: Maybe<Scalars['String']>;
  extension?: Maybe<Scalars['String']>;
};

export type GetUploadUrlResponse = {
   __typename?: 'GetUploadUrlResponse';
  success: Scalars['Boolean'];
  uploadKey?: Maybe<Scalars['String']>;
  uploadUrl?: Maybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
   __typename?: 'Mutation';
  adminLogin: Response;
  categoryCreate: Category;
  categoryDelete: Response;
  fakeData: Scalars['Boolean'];
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
  userSendFeedback: Response;
};


export type MutationAdminLoginArgs = {
  input: LoginInput;
};


export type MutationCategoryCreateArgs = {
  input: CreateCategoryInput;
};


export type MutationCategoryDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationForumCreateArgs = {
  input: CreateForumInput;
};


export type MutationForumDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationPostCreateArgs = {
  input: CreatePostInput;
};


export type MutationPostDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationThreadCreateArgs = {
  input: CreateThreadInput;
};


export type MutationThreadDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationConfirmUserEmailArgs = {
  token: Scalars['String'];
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRequestResetPasswordArgs = {
  input?: Maybe<RequestResetPasswordInput>;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};


export type MutationEditUserProfileArgs = {
  input: EditUserProfileInput;
};


export type MutationUserSendFeedbackArgs = {
  input: SendUserFeedbackInput;
};

export type Post = {
   __typename?: 'Post';
  id: Scalars['Int'];
  text: Scalars['String'];
  createdAt: Scalars['Date'];
  author: PostAuthor;
  thread: Thread;
};

export type PostAuthor = {
   __typename?: 'PostAuthor';
  id: Scalars['String'];
  username: Scalars['String'];
  signature?: Maybe<Scalars['String']>;
  profileImageUrl?: Maybe<Scalars['String']>;
};

export type PostGetAllInput = {
  id?: Maybe<Scalars['String']>;
  filterBy?: Maybe<FilterBy>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type PostGetAllResponse = {
   __typename?: 'PostGetAllResponse';
  posts: Array<PostInfo>;
};

export type PostInfo = {
   __typename?: 'PostInfo';
  id: Scalars['Int'];
  text: Scalars['String'];
  createdAt: Scalars['Date'];
  authorId: Scalars['String'];
  authorUsername: Scalars['String'];
  threadId: Scalars['String'];
  threadTitle: Scalars['String'];
};

export type Query = {
   __typename?: 'Query';
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
  threadGetPosts: GetThreadPostsResponse;
  me?: Maybe<User>;
  userGetAll: UserGetAllResponse;
  userGet: UserInfo;
  userProfileGet: UserProfile;
};


export type QueryCategoryGetArgs = {
  id: Scalars['Int'];
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetUploadUrlArgs = {
  input: GetUploadUrlInput;
};


export type QueryForumGetArgs = {
  id: Scalars['Int'];
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryPostGetAllArgs = {
  input: PostGetAllInput;
};


export type QueryPostGetArgs = {
  id?: Maybe<Scalars['Int']>;
};


export type QueryThreadGetAllArgs = {
  input: ThreadGetAllInput;
};


export type QueryThreadGetArgs = {
  input: GetThreadInput;
};


export type QueryThreadGetPostsArgs = {
  input: GetThreadPostsInput;
};


export type QueryUserGetArgs = {
  id: Scalars['String'];
};


export type QueryUserProfileGetArgs = {
  id: Scalars['String'];
};

export type RegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type RequestResetPasswordInput = {
  email: Scalars['String'];
};

export type ResetPasswordInput = {
  newPassword: Scalars['String'];
  pwResetToken: Scalars['String'];
};

export type Response = {
   __typename?: 'Response';
  error?: Maybe<Array<Error>>;
  success: Scalars['Boolean'];
};

export type SendUserFeedbackInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  subject: Scalars['String'];
  message: Scalars['String'];
};

export type Thread = {
   __typename?: 'Thread';
  id: Scalars['Int'];
  forum: Forum;
  originalPost: Post;
  createdAt: Scalars['Date'];
  title: Scalars['String'];
  owner: ThreadOwner;
};

export type ThreadGetAllInput = {
  id?: Maybe<Scalars['String']>;
  filterBy?: Maybe<FilterBy>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type ThreadGetAllResponse = {
   __typename?: 'ThreadGetAllResponse';
  threads: Array<ThreadInfo>;
};

export type ThreadInfo = {
   __typename?: 'ThreadInfo';
  id: Scalars['Int'];
  title: Scalars['String'];
  createdAt: Scalars['Date'];
  updatedAt: Scalars['Date'];
  postCount: Scalars['Int'];
};

export type ThreadOwner = {
   __typename?: 'ThreadOwner';
  username: Scalars['String'];
};


export type User = {
   __typename?: 'User';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  permissions: Array<UserPermissions>;
  signature?: Maybe<Scalars['String']>;
  profileImageUrl?: Maybe<Scalars['String']>;
  profile?: Maybe<UserProfile>;
};

export type UserGetAllResponse = {
   __typename?: 'UserGetAllResponse';
  users: Array<UserSummary>;
};

export type UserInfo = {
   __typename?: 'UserInfo';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  createdAt: Scalars['Date'];
  permissions: Array<UserPermissions>;
  profileImageUrl?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  profile?: Maybe<UserProfile>;
};

export enum UserPermissions {
  Admin = 'ADMIN',
  User = 'USER'
}

export type UserProfile = {
   __typename?: 'UserProfile';
  id: Scalars['Int'];
  location?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  occupation?: Maybe<Scalars['String']>;
};

export type UserSummary = {
   __typename?: 'UserSummary';
  id: Scalars['String'];
  username: Scalars['String'];
  email: Scalars['String'];
  registerDate: Scalars['Date'];
  threadCount: Scalars['Int'];
  postCount: Scalars['Int'];
};


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type isTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>,
  GetDashboardResponse: ResolverTypeWrapper<GetDashboardResponse>,
  Int: ResolverTypeWrapper<Scalars['Int']>,
  CategoryGetAllResponse: ResolverTypeWrapper<CategoryGetAllResponse>,
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>,
  Category: ResolverTypeWrapper<Category>,
  String: ResolverTypeWrapper<Scalars['String']>,
  Forum: ResolverTypeWrapper<Forum>,
  Date: ResolverTypeWrapper<Scalars['Date']>,
  Thread: ResolverTypeWrapper<Thread>,
  Post: ResolverTypeWrapper<Post>,
  PostAuthor: ResolverTypeWrapper<PostAuthor>,
  ThreadOwner: ResolverTypeWrapper<ThreadOwner>,
  CategoryGetSummaryAllResponse: ResolverTypeWrapper<CategoryGetSummaryAllResponse>,
  CategoryInfo: ResolverTypeWrapper<CategoryInfo>,
  GetUploadUrlInput: GetUploadUrlInput,
  GetUploadUrlResponse: ResolverTypeWrapper<GetUploadUrlResponse>,
  GetForumResponse: ResolverTypeWrapper<GetForumResponse>,
  ForumGetAllResponse: ResolverTypeWrapper<ForumGetAllResponse>,
  ForumInfo: ResolverTypeWrapper<ForumInfo>,
  PostGetAllInput: PostGetAllInput,
  FilterBy: FilterBy,
  PostGetAllResponse: ResolverTypeWrapper<PostGetAllResponse>,
  PostInfo: ResolverTypeWrapper<PostInfo>,
  ThreadGetAllInput: ThreadGetAllInput,
  ThreadGetAllResponse: ResolverTypeWrapper<ThreadGetAllResponse>,
  ThreadInfo: ResolverTypeWrapper<ThreadInfo>,
  GetThreadInput: GetThreadInput,
  GetThreadResponse: ResolverTypeWrapper<GetThreadResponse>,
  GetThreadPostsInput: GetThreadPostsInput,
  GetThreadPostsResponse: ResolverTypeWrapper<GetThreadPostsResponse>,
  User: ResolverTypeWrapper<User>,
  UserPermissions: UserPermissions,
  UserProfile: ResolverTypeWrapper<UserProfile>,
  UserGetAllResponse: ResolverTypeWrapper<UserGetAllResponse>,
  UserSummary: ResolverTypeWrapper<UserSummary>,
  UserInfo: ResolverTypeWrapper<UserInfo>,
  Mutation: ResolverTypeWrapper<{}>,
  LoginInput: LoginInput,
  Response: ResolverTypeWrapper<Response>,
  Error: ResolverTypeWrapper<Error>,
  CreateCategoryInput: CreateCategoryInput,
  CreateForumInput: CreateForumInput,
  CreatePostInput: CreatePostInput,
  CreateThreadInput: CreateThreadInput,
  CreateThreadResponse: ResolverTypeWrapper<CreateThreadResponse>,
  DemoAdmin: ResolverTypeWrapper<DemoAdmin>,
  RegisterInput: RegisterInput,
  RequestResetPasswordInput: RequestResetPasswordInput,
  ResetPasswordInput: ResetPasswordInput,
  EditUserProfileInput: EditUserProfileInput,
  Gender: Gender,
  sendUserFeedbackInput: SendUserFeedbackInput,
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>,
  Upload: ResolverTypeWrapper<Scalars['Upload']>,
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {},
  GetDashboardResponse: GetDashboardResponse,
  Int: Scalars['Int'],
  CategoryGetAllResponse: CategoryGetAllResponse,
  Boolean: Scalars['Boolean'],
  Category: Category,
  String: Scalars['String'],
  Forum: Forum,
  Date: Scalars['Date'],
  Thread: Thread,
  Post: Post,
  PostAuthor: PostAuthor,
  ThreadOwner: ThreadOwner,
  CategoryGetSummaryAllResponse: CategoryGetSummaryAllResponse,
  CategoryInfo: CategoryInfo,
  GetUploadUrlInput: GetUploadUrlInput,
  GetUploadUrlResponse: GetUploadUrlResponse,
  GetForumResponse: GetForumResponse,
  ForumGetAllResponse: ForumGetAllResponse,
  ForumInfo: ForumInfo,
  PostGetAllInput: PostGetAllInput,
  FilterBy: FilterBy,
  PostGetAllResponse: PostGetAllResponse,
  PostInfo: PostInfo,
  ThreadGetAllInput: ThreadGetAllInput,
  ThreadGetAllResponse: ThreadGetAllResponse,
  ThreadInfo: ThreadInfo,
  GetThreadInput: GetThreadInput,
  GetThreadResponse: GetThreadResponse,
  GetThreadPostsInput: GetThreadPostsInput,
  GetThreadPostsResponse: GetThreadPostsResponse,
  User: User,
  UserPermissions: UserPermissions,
  UserProfile: UserProfile,
  UserGetAllResponse: UserGetAllResponse,
  UserSummary: UserSummary,
  UserInfo: UserInfo,
  Mutation: {},
  LoginInput: LoginInput,
  Response: Response,
  Error: Error,
  CreateCategoryInput: CreateCategoryInput,
  CreateForumInput: CreateForumInput,
  CreatePostInput: CreatePostInput,
  CreateThreadInput: CreateThreadInput,
  CreateThreadResponse: CreateThreadResponse,
  DemoAdmin: DemoAdmin,
  RegisterInput: RegisterInput,
  RequestResetPasswordInput: RequestResetPasswordInput,
  ResetPasswordInput: ResetPasswordInput,
  EditUserProfileInput: EditUserProfileInput,
  Gender: Gender,
  sendUserFeedbackInput: SendUserFeedbackInput,
  DateTime: Scalars['DateTime'],
  Upload: Scalars['Upload'],
}>;

export type CategoryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Category'] = ResolversParentTypes['Category']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  forums?: Resolver<Array<ResolversTypes['Forum']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type CategoryGetAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['CategoryGetAllResponse'] = ResolversParentTypes['CategoryGetAllResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  categories?: Resolver<Array<ResolversTypes['Category']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type CategoryGetSummaryAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['CategoryGetSummaryAllResponse'] = ResolversParentTypes['CategoryGetSummaryAllResponse']> = ResolversObject<{
  categories?: Resolver<Array<ResolversTypes['CategoryInfo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type CategoryInfoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['CategoryInfo'] = ResolversParentTypes['CategoryInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  forumCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type CreateThreadResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['CreateThreadResponse'] = ResolversParentTypes['CreateThreadResponse']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date'
}

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['DateTime'], any> {
  name: 'DateTime'
}

export type DemoAdminResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['DemoAdmin'] = ResolversParentTypes['DemoAdmin']> = ResolversObject<{
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ErrorResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']> = ResolversObject<{
  path?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ForumResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Forum'] = ResolversParentTypes['Forum']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  category?: Resolver<ResolversTypes['Category'], ParentType, ContextType>,
  threads?: Resolver<Array<ResolversTypes['Thread']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ForumGetAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['ForumGetAllResponse'] = ResolversParentTypes['ForumGetAllResponse']> = ResolversObject<{
  forums?: Resolver<Array<ResolversTypes['ForumInfo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ForumInfoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['ForumInfo'] = ResolversParentTypes['ForumInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  threadCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type GetDashboardResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['GetDashboardResponse'] = ResolversParentTypes['GetDashboardResponse']> = ResolversObject<{
  userCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  postCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  threadCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  forumCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  categoryCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type GetForumResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['GetForumResponse'] = ResolversParentTypes['GetForumResponse']> = ResolversObject<{
  forum?: Resolver<ResolversTypes['Forum'], ParentType, ContextType>,
  threadCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type GetThreadPostsResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['GetThreadPostsResponse'] = ResolversParentTypes['GetThreadPostsResponse']> = ResolversObject<{
  posts?: Resolver<Array<Maybe<ResolversTypes['Post']>>, ParentType, ContextType>,
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type GetThreadResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['GetThreadResponse'] = ResolversParentTypes['GetThreadResponse']> = ResolversObject<{
  thread?: Resolver<ResolversTypes['Thread'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type GetUploadUrlResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['GetUploadUrlResponse'] = ResolversParentTypes['GetUploadUrlResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  uploadKey?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  uploadUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type MutationResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  adminLogin?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationAdminLoginArgs, 'input'>>,
  categoryCreate?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<MutationCategoryCreateArgs, 'input'>>,
  categoryDelete?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationCategoryDeleteArgs, 'id'>>,
  fakeData?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  forumCreate?: Resolver<ResolversTypes['Forum'], ParentType, ContextType, RequireFields<MutationForumCreateArgs, 'input'>>,
  forumDelete?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationForumDeleteArgs, 'id'>>,
  postCreate?: Resolver<ResolversTypes['Post'], ParentType, ContextType, RequireFields<MutationPostCreateArgs, 'input'>>,
  postDelete?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, RequireFields<MutationPostDeleteArgs, 'id'>>,
  threadCreate?: Resolver<ResolversTypes['CreateThreadResponse'], ParentType, ContextType, RequireFields<MutationThreadCreateArgs, 'input'>>,
  threadDelete?: Resolver<Maybe<ResolversTypes['Thread']>, ParentType, ContextType, RequireFields<MutationThreadDeleteArgs, 'id'>>,
  createAdmin?: Resolver<ResolversTypes['DemoAdmin'], ParentType, ContextType>,
  confirmUserEmail?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationConfirmUserEmailArgs, 'token'>>,
  login?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'input'>>,
  logout?: Resolver<ResolversTypes['Response'], ParentType, ContextType>,
  register?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationRegisterArgs, 'input'>>,
  requestResetPassword?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationRequestResetPasswordArgs, never>>,
  resetPassword?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationResetPasswordArgs, 'input'>>,
  editUserProfile?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationEditUserProfileArgs, 'input'>>,
  userSendFeedback?: Resolver<ResolversTypes['Response'], ParentType, ContextType, RequireFields<MutationUserSendFeedbackArgs, 'input'>>,
}>;

export type PostResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Post'] = ResolversParentTypes['Post']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  author?: Resolver<ResolversTypes['PostAuthor'], ParentType, ContextType>,
  thread?: Resolver<ResolversTypes['Thread'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type PostAuthorResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['PostAuthor'] = ResolversParentTypes['PostAuthor']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profileImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type PostGetAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['PostGetAllResponse'] = ResolversParentTypes['PostGetAllResponse']> = ResolversObject<{
  posts?: Resolver<Array<ResolversTypes['PostInfo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type PostInfoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['PostInfo'] = ResolversParentTypes['PostInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  text?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  authorId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  authorUsername?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  threadId?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  threadTitle?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type QueryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  dashboardGet?: Resolver<ResolversTypes['GetDashboardResponse'], ParentType, ContextType>,
  categoryGetAll?: Resolver<ResolversTypes['CategoryGetAllResponse'], ParentType, ContextType>,
  categoryGet?: Resolver<ResolversTypes['Category'], ParentType, ContextType, RequireFields<QueryCategoryGetArgs, 'id'>>,
  categoryGetSummaryAll?: Resolver<ResolversTypes['CategoryGetSummaryAllResponse'], ParentType, ContextType>,
  getUploadUrl?: Resolver<ResolversTypes['GetUploadUrlResponse'], ParentType, ContextType, RequireFields<QueryGetUploadUrlArgs, 'input'>>,
  forumGet?: Resolver<ResolversTypes['GetForumResponse'], ParentType, ContextType, RequireFields<QueryForumGetArgs, 'id'>>,
  forumGetAll?: Resolver<ResolversTypes['ForumGetAllResponse'], ParentType, ContextType>,
  postGetAll?: Resolver<ResolversTypes['PostGetAllResponse'], ParentType, ContextType, RequireFields<QueryPostGetAllArgs, 'input'>>,
  postGet?: Resolver<ResolversTypes['PostInfo'], ParentType, ContextType, RequireFields<QueryPostGetArgs, never>>,
  threadGetAll?: Resolver<ResolversTypes['ThreadGetAllResponse'], ParentType, ContextType, RequireFields<QueryThreadGetAllArgs, 'input'>>,
  threadGet?: Resolver<ResolversTypes['GetThreadResponse'], ParentType, ContextType, RequireFields<QueryThreadGetArgs, 'input'>>,
  threadGetPosts?: Resolver<ResolversTypes['GetThreadPostsResponse'], ParentType, ContextType, RequireFields<QueryThreadGetPostsArgs, 'input'>>,
  me?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>,
  userGetAll?: Resolver<ResolversTypes['UserGetAllResponse'], ParentType, ContextType>,
  userGet?: Resolver<ResolversTypes['UserInfo'], ParentType, ContextType, RequireFields<QueryUserGetArgs, 'id'>>,
  userProfileGet?: Resolver<ResolversTypes['UserProfile'], ParentType, ContextType, RequireFields<QueryUserProfileGetArgs, 'id'>>,
}>;

export type ResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Response'] = ResolversParentTypes['Response']> = ResolversObject<{
  error?: Resolver<Maybe<Array<ResolversTypes['Error']>>, ParentType, ContextType>,
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ThreadResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['Thread'] = ResolversParentTypes['Thread']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  forum?: Resolver<ResolversTypes['Forum'], ParentType, ContextType>,
  originalPost?: Resolver<ResolversTypes['Post'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  owner?: Resolver<ResolversTypes['ThreadOwner'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ThreadGetAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['ThreadGetAllResponse'] = ResolversParentTypes['ThreadGetAllResponse']> = ResolversObject<{
  threads?: Resolver<Array<ResolversTypes['ThreadInfo']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ThreadInfoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['ThreadInfo'] = ResolversParentTypes['ThreadInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  postCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type ThreadOwnerResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['ThreadOwner'] = ResolversParentTypes['ThreadOwner']> = ResolversObject<{
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  permissions?: Resolver<Array<ResolversTypes['UserPermissions']>, ParentType, ContextType>,
  signature?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profileImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type UserGetAllResponseResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['UserGetAllResponse'] = ResolversParentTypes['UserGetAllResponse']> = ResolversObject<{
  users?: Resolver<Array<ResolversTypes['UserSummary']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type UserInfoResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  permissions?: Resolver<Array<ResolversTypes['UserPermissions']>, ParentType, ContextType>,
  profileImageUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  profile?: Resolver<Maybe<ResolversTypes['UserProfile']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type UserProfileResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['UserProfile'] = ResolversParentTypes['UserProfile']> = ResolversObject<{
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  gender?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  occupation?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type UserSummaryResolvers<ContextType = IContext, ParentType extends ResolversParentTypes['UserSummary'] = ResolversParentTypes['UserSummary']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  username?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  registerDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>,
  threadCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  postCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>,
  __isTypeOf?: isTypeOfResolverFn<ParentType>,
}>;

export type Resolvers<ContextType = IContext> = ResolversObject<{
  Category?: CategoryResolvers<ContextType>,
  CategoryGetAllResponse?: CategoryGetAllResponseResolvers<ContextType>,
  CategoryGetSummaryAllResponse?: CategoryGetSummaryAllResponseResolvers<ContextType>,
  CategoryInfo?: CategoryInfoResolvers<ContextType>,
  CreateThreadResponse?: CreateThreadResponseResolvers<ContextType>,
  Date?: GraphQLScalarType,
  DateTime?: GraphQLScalarType,
  DemoAdmin?: DemoAdminResolvers<ContextType>,
  Error?: ErrorResolvers<ContextType>,
  Forum?: ForumResolvers<ContextType>,
  ForumGetAllResponse?: ForumGetAllResponseResolvers<ContextType>,
  ForumInfo?: ForumInfoResolvers<ContextType>,
  GetDashboardResponse?: GetDashboardResponseResolvers<ContextType>,
  GetForumResponse?: GetForumResponseResolvers<ContextType>,
  GetThreadPostsResponse?: GetThreadPostsResponseResolvers<ContextType>,
  GetThreadResponse?: GetThreadResponseResolvers<ContextType>,
  GetUploadUrlResponse?: GetUploadUrlResponseResolvers<ContextType>,
  Mutation?: MutationResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  PostAuthor?: PostAuthorResolvers<ContextType>,
  PostGetAllResponse?: PostGetAllResponseResolvers<ContextType>,
  PostInfo?: PostInfoResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Response?: ResponseResolvers<ContextType>,
  Thread?: ThreadResolvers<ContextType>,
  ThreadGetAllResponse?: ThreadGetAllResponseResolvers<ContextType>,
  ThreadInfo?: ThreadInfoResolvers<ContextType>,
  ThreadOwner?: ThreadOwnerResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
  UserGetAllResponse?: UserGetAllResponseResolvers<ContextType>,
  UserInfo?: UserInfoResolvers<ContextType>,
  UserProfile?: UserProfileResolvers<ContextType>,
  UserSummary?: UserSummaryResolvers<ContextType>,
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
