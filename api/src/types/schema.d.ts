./types#IContext
// Generated in 2019-05-14T17:55:05+03:00
export type Maybe<T> = T | null;


export interface GetUploadUrlInput {
  
  contentType?: Maybe<string>;
  
  extention?: Maybe<string>;
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

export interface EditUserProfileInput {
  
  profileImageKey?: Maybe<string>;
  
  username?: Maybe<string>;
  
  location?: Maybe<string>;
  
  occupation?: Maybe<string>;
  
  gender?: Maybe<Gender>;
}

export enum UserPermissions {
  Admin = "ADMIN",
  User = "USER",
}

export enum Gender {
  NotSelected = "NOT_SELECTED",
  Female = "FEMALE",
  Male = "MALE",
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
  
  categoryGet: CategoryGetResponse;
  
  getUploadUrl: GetUploadUrlResponse;
  
  forumGet: GetForumResponse;
  
  forumGetAll: ForumGetAllResponse;
  
  threadGetAll: ThreadGetAllResponse;
  
  threadGet: GetThreadResponse;
  
  me?: Maybe<User>;
  
  userGetAll: UserGetAllResponse;
  
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
  
  categories: CategoryInfo[];
}


export interface CategoryInfo {
  
  id: number;
  
  name: string;
  
  createdAt: Date;
  
  updatedAt: Date;
  
  forumCount: number;
}


export interface CategoryGetResponse {
  
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
}


export interface User {
  
  id: string;
  
  username: string;
  
  email: string;
  
  permissions: UserPermissions[];
  
  profileImageUrl?: Maybe<string>;
  
  profile: UserProfile;
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


export interface ThreadGetAllResponse {
  
  threads: ThreadInfo[];
}


export interface ThreadInfo {
  
  id: number;
  
  name: string;
  
  createdAt: Date;
  
  updatedAt: Date;
  
  postCount: number;
}


export interface GetThreadResponse {
  
  thread: Thread;
  
  postCount: number;
}


export interface UserGetAllResponse {
  
  users: UserInfo[];
}


export interface UserInfo {
  
  id: string;
  
  username: string;
  
  email: string;
  
  registerDate: Date;
  
  threadCount: number;
  
  postCount: number;
}


export interface Mutation {
  
  categoryCreate: Response;
  
  categoryDelete: Response;
  
  fakeData: boolean;
  
  forumCreate: Forum;
  
  forumDelete: Response;
  
  postCreate: Post;
  
  postDelete: Response;
  
  threadCreate: CreateThreadResponse;
  
  threadDelete: Response;
  
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

export interface GetUploadUrlQueryArgs {
  
  input: GetUploadUrlInput;
}
export interface ForumGetQueryArgs {
  
  id: number;
  
  offset?: Maybe<number>;
}
export interface ThreadGetAllQueryArgs {
  
  offset?: Maybe<number>;
}
export interface ThreadGetQueryArgs {
  
  id: number;
  
  offset?: Maybe<number>;
}
export interface UserProfileGetQueryArgs {
  
  id: string;
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


import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';



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
    
    dashboardGet?: DashboardGetResolver<GetDashboardResponse, TypeParent, Context>;
    
    categoryGetAll?: CategoryGetAllResolver<CategoryGetAllResponse, TypeParent, Context>;
    
    categoryGet?: CategoryGetResolver<CategoryGetResponse, TypeParent, Context>;
    
    getUploadUrl?: GetUploadUrlResolver<GetUploadUrlResponse, TypeParent, Context>;
    
    forumGet?: ForumGetResolver<GetForumResponse, TypeParent, Context>;
    
    forumGetAll?: ForumGetAllResolver<ForumGetAllResponse, TypeParent, Context>;
    
    threadGetAll?: ThreadGetAllResolver<ThreadGetAllResponse, TypeParent, Context>;
    
    threadGet?: ThreadGetResolver<GetThreadResponse, TypeParent, Context>;
    
    me?: MeResolver<Maybe<User>, TypeParent, Context>;
    
    userGetAll?: UserGetAllResolver<UserGetAllResponse, TypeParent, Context>;
    
    userProfileGet?: UserProfileGetResolver<UserProfile, TypeParent, Context>;
  }


  export type DashboardGetResolver<R = GetDashboardResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoryGetAllResolver<R = CategoryGetAllResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoryGetResolver<R = CategoryGetResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type GetUploadUrlResolver<R = GetUploadUrlResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, GetUploadUrlArgs>;
  export interface GetUploadUrlArgs {
    
    input: GetUploadUrlInput;
  }


  export type ForumGetResolver<R = GetForumResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ForumGetArgs>;
  export interface ForumGetArgs {
    
    id: number;
    
    offset?: Maybe<number>;
  }


  export type ForumGetAllResolver<R = ForumGetAllResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadGetAllResolver<R = ThreadGetAllResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ThreadGetAllArgs>;
  export interface ThreadGetAllArgs {
    
    offset?: Maybe<number>;
  }


  export type ThreadGetResolver<R = GetThreadResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ThreadGetArgs>;
  export interface ThreadGetArgs {
    
    id: number;
    
    offset?: Maybe<number>;
  }


  export type MeResolver<R = Maybe<User>, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type UserGetAllResolver<R = UserGetAllResponse, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type UserProfileGetResolver<R = UserProfile, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, UserProfileGetArgs>;
  export interface UserProfileGetArgs {
    
    id: string;
  }

  
}

export namespace GetDashboardResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = GetDashboardResponse> {
    
    userCount?: UserCountResolver<number, TypeParent, Context>;
    
    postCount?: PostCountResolver<number, TypeParent, Context>;
    
    threadCount?: ThreadCountResolver<number, TypeParent, Context>;
    
    forumCount?: ForumCountResolver<number, TypeParent, Context>;
    
    categoryCount?: CategoryCountResolver<number, TypeParent, Context>;
  }


  export type UserCountResolver<R = number, Parent = GetDashboardResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostCountResolver<R = number, Parent = GetDashboardResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadCountResolver<R = number, Parent = GetDashboardResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type ForumCountResolver<R = number, Parent = GetDashboardResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoryCountResolver<R = number, Parent = GetDashboardResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace CategoryGetAllResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = CategoryGetAllResponse> {
    
    categories?: CategoriesResolver<CategoryInfo[], TypeParent, Context>;
  }


  export type CategoriesResolver<R = CategoryInfo[], Parent = CategoryGetAllResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace CategoryInfoResolvers {
  export interface Resolvers<Context = IContext, TypeParent = CategoryInfo> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;
    
    updatedAt?: UpdatedAtResolver<Date, TypeParent, Context>;
    
    forumCount?: ForumCountResolver<number, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = CategoryInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = CategoryInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = Date, Parent = CategoryInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = Date, Parent = CategoryInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type ForumCountResolver<R = number, Parent = CategoryInfo, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace CategoryGetResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = CategoryGetResponse> {
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    categories?: CategoriesResolver<Category[], TypeParent, Context>;
  }


  export type SuccessResolver<R = boolean, Parent = CategoryGetResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoriesResolver<R = Category[], Parent = CategoryGetResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace CategoryResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Category> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    forums?: ForumsResolver<Forum[], TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Category, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Category, Context = IContext> = Resolver<R, Parent, Context>;
  export type ForumsResolver<R = Forum[], Parent = Category, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ForumResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Forum> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    category?: CategoryResolver<Category, TypeParent, Context>;
    
    threads?: ThreadsResolver<Thread[], TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;
  export type CategoryResolver<R = Category, Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadsResolver<R = Thread[], Parent = Forum, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ThreadResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Thread> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    forum?: ForumResolver<Forum, TypeParent, Context>;
    
    originalPost?: OriginalPostResolver<Post, TypeParent, Context>;
    
    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;
    
    posts?: PostsResolver<Post[], TypeParent, Context>;
    
    title?: TitleResolver<string, TypeParent, Context>;
    
    owner?: OwnerResolver<ThreadOwner, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type ForumResolver<R = Forum, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type OriginalPostResolver<R = Post, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = Date, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostsResolver<R = Post[], Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;
  export type OwnerResolver<R = ThreadOwner, Parent = Thread, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace PostResolvers {
  export interface Resolvers<Context = IContext, TypeParent = Post> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    text?: TextResolver<string, TypeParent, Context>;
    
    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;
    
    author?: AuthorResolver<User, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;
  export type TextResolver<R = string, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = Date, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;
  export type AuthorResolver<R = User, Parent = Post, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace UserResolvers {
  export interface Resolvers<Context = IContext, TypeParent = User> {
    
    id?: IdResolver<string, TypeParent, Context>;
    
    username?: UsernameResolver<string, TypeParent, Context>;
    
    email?: EmailResolver<string, TypeParent, Context>;
    
    permissions?: PermissionsResolver<UserPermissions[], TypeParent, Context>;
    
    profileImageUrl?: ProfileImageUrlResolver<Maybe<string>, TypeParent, Context>;
    
    profile?: ProfileResolver<UserProfile, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type UsernameResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type PermissionsResolver<R = UserPermissions[], Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type ProfileImageUrlResolver<R = Maybe<string>, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;
  export type ProfileResolver<R = UserProfile, Parent = User, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace UserProfileResolvers {
  export interface Resolvers<Context = IContext, TypeParent = UserProfile> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    location?: LocationResolver<Maybe<string>, TypeParent, Context>;
    
    gender?: GenderResolver<string, TypeParent, Context>;
    
    occupation?: OccupationResolver<Maybe<string>, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = UserProfile, Context = IContext> = Resolver<R, Parent, Context>;
  export type LocationResolver<R = Maybe<string>, Parent = UserProfile, Context = IContext> = Resolver<R, Parent, Context>;
  export type GenderResolver<R = string, Parent = UserProfile, Context = IContext> = Resolver<R, Parent, Context>;
  export type OccupationResolver<R = Maybe<string>, Parent = UserProfile, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ThreadOwnerResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ThreadOwner> {
    
    username?: UsernameResolver<string, TypeParent, Context>;
  }


  export type UsernameResolver<R = string, Parent = ThreadOwner, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace GetUploadUrlResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = GetUploadUrlResponse> {
    
    success?: SuccessResolver<boolean, TypeParent, Context>;
    
    uploadKey?: UploadKeyResolver<Maybe<string>, TypeParent, Context>;
    
    uploadUrl?: UploadUrlResolver<Maybe<string>, TypeParent, Context>;
  }


  export type SuccessResolver<R = boolean, Parent = GetUploadUrlResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type UploadKeyResolver<R = Maybe<string>, Parent = GetUploadUrlResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type UploadUrlResolver<R = Maybe<string>, Parent = GetUploadUrlResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace GetForumResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = GetForumResponse> {
    
    forum?: ForumResolver<Forum, TypeParent, Context>;
    
    threadCount?: ThreadCountResolver<number, TypeParent, Context>;
  }


  export type ForumResolver<R = Forum, Parent = GetForumResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadCountResolver<R = number, Parent = GetForumResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ForumGetAllResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ForumGetAllResponse> {
    
    forums?: ForumsResolver<ForumInfo[], TypeParent, Context>;
  }


  export type ForumsResolver<R = ForumInfo[], Parent = ForumGetAllResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ForumInfoResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ForumInfo> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;
    
    updatedAt?: UpdatedAtResolver<Date, TypeParent, Context>;
    
    threadCount?: ThreadCountResolver<number, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = ForumInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = ForumInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = Date, Parent = ForumInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = Date, Parent = ForumInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadCountResolver<R = number, Parent = ForumInfo, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ThreadGetAllResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ThreadGetAllResponse> {
    
    threads?: ThreadsResolver<ThreadInfo[], TypeParent, Context>;
  }


  export type ThreadsResolver<R = ThreadInfo[], Parent = ThreadGetAllResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace ThreadInfoResolvers {
  export interface Resolvers<Context = IContext, TypeParent = ThreadInfo> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    name?: NameResolver<string, TypeParent, Context>;
    
    createdAt?: CreatedAtResolver<Date, TypeParent, Context>;
    
    updatedAt?: UpdatedAtResolver<Date, TypeParent, Context>;
    
    postCount?: PostCountResolver<number, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = ThreadInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type NameResolver<R = string, Parent = ThreadInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type CreatedAtResolver<R = Date, Parent = ThreadInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type UpdatedAtResolver<R = Date, Parent = ThreadInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostCountResolver<R = number, Parent = ThreadInfo, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace GetThreadResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = GetThreadResponse> {
    
    thread?: ThreadResolver<Thread, TypeParent, Context>;
    
    postCount?: PostCountResolver<number, TypeParent, Context>;
  }


  export type ThreadResolver<R = Thread, Parent = GetThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostCountResolver<R = number, Parent = GetThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace UserGetAllResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = UserGetAllResponse> {
    
    users?: UsersResolver<UserInfo[], TypeParent, Context>;
  }


  export type UsersResolver<R = UserInfo[], Parent = UserGetAllResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace UserInfoResolvers {
  export interface Resolvers<Context = IContext, TypeParent = UserInfo> {
    
    id?: IdResolver<string, TypeParent, Context>;
    
    username?: UsernameResolver<string, TypeParent, Context>;
    
    email?: EmailResolver<string, TypeParent, Context>;
    
    registerDate?: RegisterDateResolver<Date, TypeParent, Context>;
    
    threadCount?: ThreadCountResolver<number, TypeParent, Context>;
    
    postCount?: PostCountResolver<number, TypeParent, Context>;
  }


  export type IdResolver<R = string, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type UsernameResolver<R = string, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type RegisterDateResolver<R = Date, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type ThreadCountResolver<R = number, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;
  export type PostCountResolver<R = number, Parent = UserInfo, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace MutationResolvers {
  export interface Resolvers<Context = IContext, TypeParent = {}> {
    
    categoryCreate?: CategoryCreateResolver<Response, TypeParent, Context>;
    
    categoryDelete?: CategoryDeleteResolver<Response, TypeParent, Context>;
    
    fakeData?: FakeDataResolver<boolean, TypeParent, Context>;
    
    forumCreate?: ForumCreateResolver<Forum, TypeParent, Context>;
    
    forumDelete?: ForumDeleteResolver<Response, TypeParent, Context>;
    
    postCreate?: PostCreateResolver<Post, TypeParent, Context>;
    
    postDelete?: PostDeleteResolver<Response, TypeParent, Context>;
    
    threadCreate?: ThreadCreateResolver<CreateThreadResponse, TypeParent, Context>;
    
    threadDelete?: ThreadDeleteResolver<Response, TypeParent, Context>;
    
    createAdmin?: CreateAdminResolver<DemoAdmin, TypeParent, Context>;
    
    confirmUserEmail?: ConfirmUserEmailResolver<Response, TypeParent, Context>;
    
    login?: LoginResolver<Response, TypeParent, Context>;
    
    logout?: LogoutResolver<Response, TypeParent, Context>;
    
    register?: RegisterResolver<Response, TypeParent, Context>;
    
    requestResetPassword?: RequestResetPasswordResolver<Response, TypeParent, Context>;
    
    resetPassword?: ResetPasswordResolver<Response, TypeParent, Context>;
    
    editUserProfile?: EditUserProfileResolver<Response, TypeParent, Context>;
  }


  export type CategoryCreateResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, CategoryCreateArgs>;
  export interface CategoryCreateArgs {
    
    input: CreateCategoryInput;
  }


  export type CategoryDeleteResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, CategoryDeleteArgs>;
  export interface CategoryDeleteArgs {
    
    id: number;
  }


  export type FakeDataResolver<R = boolean, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
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


  export type CreateAdminResolver<R = DemoAdmin, Parent = {}, Context = IContext> = Resolver<R, Parent, Context>;
  export type ConfirmUserEmailResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, ConfirmUserEmailArgs>;
  export interface ConfirmUserEmailArgs {
    
    token: string;
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


  export type EditUserProfileResolver<R = Response, Parent = {}, Context = IContext> = Resolver<R, Parent, Context, EditUserProfileArgs>;
  export interface EditUserProfileArgs {
    
    input: EditUserProfileInput;
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

export namespace CreateThreadResponseResolvers {
  export interface Resolvers<Context = IContext, TypeParent = CreateThreadResponse> {
    
    id?: IdResolver<number, TypeParent, Context>;
    
    title?: TitleResolver<string, TypeParent, Context>;
  }


  export type IdResolver<R = number, Parent = CreateThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;
  export type TitleResolver<R = string, Parent = CreateThreadResponse, Context = IContext> = Resolver<R, Parent, Context>;  
}

export namespace DemoAdminResolvers {
  export interface Resolvers<Context = IContext, TypeParent = DemoAdmin> {
    
    username?: UsernameResolver<string, TypeParent, Context>;
    
    password?: PasswordResolver<string, TypeParent, Context>;
    
    email?: EmailResolver<string, TypeParent, Context>;
  }


  export type UsernameResolver<R = string, Parent = DemoAdmin, Context = IContext> = Resolver<R, Parent, Context>;
  export type PasswordResolver<R = string, Parent = DemoAdmin, Context = IContext> = Resolver<R, Parent, Context>;
  export type EmailResolver<R = string, Parent = DemoAdmin, Context = IContext> = Resolver<R, Parent, Context>;  
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


export interface DateScalarConfig extends GraphQLScalarTypeConfig<Date, any> {
  name: 'Date'
}
export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<DateTime, any> {
  name: 'DateTime'
}
export interface UploadScalarConfig extends GraphQLScalarTypeConfig<Upload, any> {
  name: 'Upload'
}

export interface IResolvers {
    Query?: QueryResolvers.Resolvers;
    GetDashboardResponse?: GetDashboardResponseResolvers.Resolvers;
    CategoryGetAllResponse?: CategoryGetAllResponseResolvers.Resolvers;
    CategoryInfo?: CategoryInfoResolvers.Resolvers;
    CategoryGetResponse?: CategoryGetResponseResolvers.Resolvers;
    Category?: CategoryResolvers.Resolvers;
    Forum?: ForumResolvers.Resolvers;
    Thread?: ThreadResolvers.Resolvers;
    Post?: PostResolvers.Resolvers;
    User?: UserResolvers.Resolvers;
    UserProfile?: UserProfileResolvers.Resolvers;
    ThreadOwner?: ThreadOwnerResolvers.Resolvers;
    GetUploadUrlResponse?: GetUploadUrlResponseResolvers.Resolvers;
    GetForumResponse?: GetForumResponseResolvers.Resolvers;
    ForumGetAllResponse?: ForumGetAllResponseResolvers.Resolvers;
    ForumInfo?: ForumInfoResolvers.Resolvers;
    ThreadGetAllResponse?: ThreadGetAllResponseResolvers.Resolvers;
    ThreadInfo?: ThreadInfoResolvers.Resolvers;
    GetThreadResponse?: GetThreadResponseResolvers.Resolvers;
    UserGetAllResponse?: UserGetAllResponseResolvers.Resolvers;
    UserInfo?: UserInfoResolvers.Resolvers;
    Mutation?: MutationResolvers.Resolvers;
    Response?: ResponseResolvers.Resolvers;
    Error?: ErrorResolvers.Resolvers;
    CreateThreadResponse?: CreateThreadResponseResolvers.Resolvers;
    DemoAdmin?: DemoAdminResolvers.Resolvers;
    Date?: GraphQLScalarType;
    DateTime?: GraphQLScalarType;
    Upload?: GraphQLScalarType;
}

export interface IDirectiveResolvers<Result> {
    skip?: SkipDirectiveResolver<Result>;
    include?: IncludeDirectiveResolver<Result>;
    deprecated?: DeprecatedDirectiveResolver<Result>;
}