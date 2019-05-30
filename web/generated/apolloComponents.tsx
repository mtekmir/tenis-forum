/* tslint:disable */
export type Maybe<T> = T | null;

export interface GetUploadUrlInput {
  contentType?: Maybe<string>;

  extention?: Maybe<string>;
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

export enum Gender {
  NotSelected = "NOT_SELECTED",
  Female = "FEMALE",
  Male = "MALE"
}

export type Date = any;

export type DateTime = any;

export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type AdminLoginVariables = {
  email: string;
  password: string;
};

export type AdminLoginMutation = {
  __typename?: "Mutation";

  adminLogin: AdminLoginAdminLogin;
};

export type AdminLoginAdminLogin = {
  __typename?: "Response";

  error: Maybe<AdminLoginError[]>;

  success: boolean;
};

export type AdminLoginError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type ConfirmEmailVariables = {
  token: string;
};

export type ConfirmEmailMutation = {
  __typename?: "Mutation";

  confirmUserEmail: ConfirmEmailConfirmUserEmail;
};

export type ConfirmEmailConfirmUserEmail = {
  __typename?: "Response";

  success: boolean;

  error: Maybe<ConfirmEmailError[]>;
};

export type ConfirmEmailError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type CreateCategoryVariables = {
  name: string;
};

export type CreateCategoryMutation = {
  __typename?: "Mutation";

  categoryCreate: CreateCategoryCategoryCreate;
};

export type CreateCategoryCategoryCreate = {
  __typename?: "Response";

  error: Maybe<CreateCategoryError[]>;

  success: boolean;
};

export type CreateCategoryError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type CreateForumVariables = {
  name: string;
  categoryId: number;
};

export type CreateForumMutation = {
  __typename?: "Mutation";

  forumCreate: CreateForumForumCreate;
};

export type CreateForumForumCreate = {
  __typename?: "Forum";

  id: number;
};

export type CreatePostVariables = {
  text: string;
  threadId: number;
};

export type CreatePostMutation = {
  __typename?: "Mutation";

  postCreate: CreatePostPostCreate;
};

export type CreatePostPostCreate = {
  __typename?: "Post";

  id: number;

  text: string;

  createdAt: Date;

  author: CreatePostAuthor;
};

export type CreatePostAuthor = {
  __typename?: "User";

  username: string;

  profileImageUrl: Maybe<string>;
};

export type CreateThreadVariables = {
  text: string;
  title: string;
  forumId: number;
};

export type CreateThreadMutation = {
  __typename?: "Mutation";

  threadCreate: CreateThreadThreadCreate;
};

export type CreateThreadThreadCreate = {
  __typename?: "CreateThreadResponse";

  id: number;

  title: string;
};

export type EditUserProfileVariables = {
  profileImageKey?: Maybe<string>;
  username?: Maybe<string>;
  location?: Maybe<string>;
  gender?: Maybe<Gender>;
  occupation?: Maybe<string>;
};

export type EditUserProfileMutation = {
  __typename?: "Mutation";

  editUserProfile: EditUserProfileEditUserProfile;
};

export type EditUserProfileEditUserProfile = {
  __typename?: "Response";

  error: Maybe<EditUserProfileError[]>;

  success: boolean;
};

export type EditUserProfileError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type LoginVariables = {
  email: string;
  password: string;
};

export type LoginMutation = {
  __typename?: "Mutation";

  login: LoginLogin;
};

export type LoginLogin = {
  __typename?: "Response";

  success: boolean;

  error: Maybe<LoginError[]>;
};

export type LoginError = {
  __typename?: "Error";

  message: string;
};

export type LogoutVariables = {};

export type LogoutMutation = {
  __typename?: "Mutation";

  logout: LogoutLogout;
};

export type LogoutLogout = {
  __typename?: "Response";

  success: boolean;
};

export type RegisterVariables = {
  username: string;
  email: string;
  password: string;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "Response";

  success: boolean;

  error: Maybe<RegisterError[]>;
};

export type RegisterError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type RequestResetPasswordVariables = {
  email: string;
};

export type RequestResetPasswordMutation = {
  __typename?: "Mutation";

  requestResetPassword: RequestResetPasswordRequestResetPassword;
};

export type RequestResetPasswordRequestResetPassword = {
  __typename?: "Response";

  success: boolean;

  error: Maybe<RequestResetPasswordError[]>;
};

export type RequestResetPasswordError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type ResetPasswordVariables = {
  newPassword: string;
  pwResetToken: string;
};

export type ResetPasswordMutation = {
  __typename?: "Mutation";

  resetPassword: ResetPasswordResetPassword;
};

export type ResetPasswordResetPassword = {
  __typename?: "Response";

  success: boolean;

  error: Maybe<ResetPasswordError[]>;
};

export type ResetPasswordError = {
  __typename?: "Error";

  path: string;

  message: string;
};

export type DeletePostVariables = {
  id: number;
};

export type DeletePostMutation = {
  __typename?: "Mutation";

  postDelete: Maybe<DeletePostPostDelete>;
};

export type DeletePostPostDelete = {
  __typename?: "Post";

  id: number;

  thread: DeletePostThread;
};

export type DeletePostThread = {
  __typename?: "Thread";

  id: number;
};

export type DeleteThreadVariables = {
  id: number;
};

export type DeleteThreadMutation = {
  __typename?: "Mutation";

  threadDelete: Maybe<DeleteThreadThreadDelete>;
};

export type DeleteThreadThreadDelete = {
  __typename?: "Thread";

  id: number;

  forum: DeleteThreadForum;
};

export type DeleteThreadForum = {
  __typename?: "Forum";

  id: number;
};

export type GetAllCategoriesVariables = {};

export type GetAllCategoriesQuery = {
  __typename?: "Query";

  categoryGetAll: GetAllCategoriesCategoryGetAll;
};

export type GetAllCategoriesCategoryGetAll = {
  __typename?: "CategoryGetAllResponse";

  categories: GetAllCategoriesCategories[];
};

export type GetAllCategoriesCategories = {
  __typename?: "CategoryInfo";

  id: number;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  forumCount: number;
};

export type GetAllForumsVariables = {};

export type GetAllForumsQuery = {
  __typename?: "Query";

  forumGetAll: GetAllForumsForumGetAll;
};

export type GetAllForumsForumGetAll = {
  __typename?: "ForumGetAllResponse";

  forums: GetAllForumsForums[];
};

export type GetAllForumsForums = {
  __typename?: "ForumInfo";

  id: number;

  name: string;

  createdAt: Date;

  updatedAt: Date;

  threadCount: number;
};

export type GetPostVariables = {
  id: number;
};

export type GetPostQuery = {
  __typename?: "Query";

  postGet: GetPostPostGet;
};

export type GetPostPostGet = {
  __typename?: "PostInfo";

  id: number;

  createdAt: Date;

  text: string;

  authorId: string;

  authorUsername: string;

  threadId: string;

  threadTitle: string;
};

export type GetAllPostsVariables = {};

export type GetAllPostsQuery = {
  __typename?: "Query";

  postGetAll: GetAllPostsPostGetAll;
};

export type GetAllPostsPostGetAll = {
  __typename?: "PostGetAllResponse";

  posts: GetAllPostsPosts[];
};

export type GetAllPostsPosts = {
  __typename?: "PostInfo";

  id: number;

  createdAt: Date;

  authorId: string;

  authorUsername: string;

  threadId: string;

  threadTitle: string;
};

export type GetAllThreadsVariables = {};

export type GetAllThreadsQuery = {
  __typename?: "Query";

  threadGetAll: GetAllThreadsThreadGetAll;
};

export type GetAllThreadsThreadGetAll = {
  __typename?: "ThreadGetAllResponse";

  threads: GetAllThreadsThreads[];
};

export type GetAllThreadsThreads = {
  __typename?: "ThreadInfo";

  id: number;

  title: string;

  createdAt: Date;

  updatedAt: Date;

  postCount: number;
};

export type GetAllUsersVariables = {};

export type GetAllUsersQuery = {
  __typename?: "Query";

  userGetAll: GetAllUsersUserGetAll;
};

export type GetAllUsersUserGetAll = {
  __typename?: "UserGetAllResponse";

  users: GetAllUsersUsers[];
};

export type GetAllUsersUsers = {
  __typename?: "UserInfo";

  id: string;

  username: string;

  email: string;

  registerDate: Date;

  threadCount: number;

  postCount: number;
};

export type GetCategoriesVariables = {};

export type GetCategoriesQuery = {
  __typename?: "Query";

  categoryGet: GetCategoriesCategoryGet;
};

export type GetCategoriesCategoryGet = {
  __typename?: "CategoryGetResponse";

  success: boolean;

  categories: GetCategoriesCategories[];
};

export type GetCategoriesCategories = {
  __typename?: "Category";

  id: number;

  name: string;

  forums: GetCategoriesForums[];
};

export type GetCategoriesForums = {
  __typename?: "Forum";

  id: number;

  name: string;
};

export type GetDashboardVariables = {};

export type GetDashboardQuery = {
  __typename?: "Query";

  dashboardGet: GetDashboardDashboardGet;
};

export type GetDashboardDashboardGet = {
  __typename?: "GetDashboardResponse";

  userCount: number;

  categoryCount: number;

  forumCount: number;

  threadCount: number;

  postCount: number;
};

export type GetForumVariables = {
  id: number;
  offset?: Maybe<number>;
  limit?: Maybe<number>;
};

export type GetForumQuery = {
  __typename?: "Query";

  forumGet: GetForumForumGet;
};

export type GetForumForumGet = {
  __typename?: "GetForumResponse";

  forum: GetForumForum;

  threadCount: number;
};

export type GetForumForum = {
  __typename?: "Forum";

  id: number;

  name: string;

  createdAt: Date;

  category: GetForumCategory;

  threads: GetForumThreads[];
};

export type GetForumCategory = {
  __typename?: "Category";

  name: string;
};

export type GetForumThreads = {
  __typename?: "Thread";

  id: number;

  title: string;

  owner: GetForumOwner;

  createdAt: Date;
};

export type GetForumOwner = {
  __typename?: "ThreadOwner";

  username: string;
};

export type GetThreadVariables = {
  id: number;
  offset?: Maybe<number>;
};

export type GetThreadQuery = {
  __typename?: "Query";

  threadGet: GetThreadThreadGet;
};

export type GetThreadThreadGet = {
  __typename?: "GetThreadResponse";

  thread: GetThreadThread;

  postCount: number;
};

export type GetThreadThread = {
  __typename?: "Thread";

  id: number;

  title: string;

  createdAt: Date;

  owner: GetThreadOwner;

  posts: GetThreadPosts[];
};

export type GetThreadOwner = {
  __typename?: "ThreadOwner";

  username: string;
};

export type GetThreadPosts = {
  __typename?: "Post";

  id: number;

  text: string;

  createdAt: Date;

  author: GetThreadAuthor;
};

export type GetThreadAuthor = {
  __typename?: "User";

  id: string;

  username: string;

  profileImageUrl: Maybe<string>;
};

export type GetUploadUrlQueryVariables = {
  contentType: string;
  extention: string;
};

export type GetUploadUrlQueryQuery = {
  __typename?: "Query";

  getUploadUrl: GetUploadUrlQueryGetUploadUrl;
};

export type GetUploadUrlQueryGetUploadUrl = {
  __typename?: "GetUploadUrlResponse";

  success: boolean;

  uploadKey: Maybe<string>;

  uploadUrl: Maybe<string>;
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: "User";

  username: string;

  email: string;

  permissions: UserPermissions[];

  profileImageUrl: Maybe<string>;

  profile: Maybe<MeProfile>;
};

export type MeProfile = {
  __typename?: "UserProfile";

  id: number;

  gender: string;

  location: Maybe<string>;

  occupation: Maybe<string>;
};

import gql from "graphql-tag";
import * as React from "react";
import * as ReactApollo from "react-apollo";

// ====================================================
// Components
// ====================================================

export const AdminLoginDocument = gql`
  mutation AdminLogin($email: String!, $password: String!) {
    adminLogin(input: { email: $email, password: $password }) {
      error {
        path
        message
      }
      success
    }
  }
`;
export class AdminLoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<AdminLoginMutation, AdminLoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<AdminLoginMutation, AdminLoginVariables>
        mutation={AdminLoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type AdminLoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<AdminLoginMutation, AdminLoginVariables>
> &
  TChildProps;
export type AdminLoginMutationFn = ReactApollo.MutationFn<
  AdminLoginMutation,
  AdminLoginVariables
>;
export function AdminLoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        AdminLoginMutation,
        AdminLoginVariables,
        AdminLoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    AdminLoginMutation,
    AdminLoginVariables,
    AdminLoginProps<TChildProps>
  >(AdminLoginDocument, operationOptions);
}
export const ConfirmEmailDocument = gql`
  mutation ConfirmEmail($token: String!) {
    confirmUserEmail(token: $token) {
      success
      error {
        path
        message
      }
    }
  }
`;
export class ConfirmEmailComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ConfirmEmailMutation, ConfirmEmailVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ConfirmEmailMutation, ConfirmEmailVariables>
        mutation={ConfirmEmailDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ConfirmEmailProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ConfirmEmailMutation, ConfirmEmailVariables>
> &
  TChildProps;
export type ConfirmEmailMutationFn = ReactApollo.MutationFn<
  ConfirmEmailMutation,
  ConfirmEmailVariables
>;
export function ConfirmEmailHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ConfirmEmailMutation,
        ConfirmEmailVariables,
        ConfirmEmailProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ConfirmEmailMutation,
    ConfirmEmailVariables,
    ConfirmEmailProps<TChildProps>
  >(ConfirmEmailDocument, operationOptions);
}
export const CreateCategoryDocument = gql`
  mutation CreateCategory($name: String!) {
    categoryCreate(input: { name: $name }) {
      error {
        path
        message
      }
      success
    }
  }
`;
export class CreateCategoryComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateCategoryMutation, CreateCategoryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateCategoryMutation, CreateCategoryVariables>
        mutation={CreateCategoryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateCategoryProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateCategoryMutation, CreateCategoryVariables>
> &
  TChildProps;
export type CreateCategoryMutationFn = ReactApollo.MutationFn<
  CreateCategoryMutation,
  CreateCategoryVariables
>;
export function CreateCategoryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateCategoryMutation,
        CreateCategoryVariables,
        CreateCategoryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateCategoryMutation,
    CreateCategoryVariables,
    CreateCategoryProps<TChildProps>
  >(CreateCategoryDocument, operationOptions);
}
export const CreateForumDocument = gql`
  mutation CreateForum($name: String!, $categoryId: Int!) {
    forumCreate(input: { name: $name, categoryId: $categoryId }) {
      id
    }
  }
`;
export class CreateForumComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreateForumMutation, CreateForumVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateForumMutation, CreateForumVariables>
        mutation={CreateForumDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateForumProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateForumMutation, CreateForumVariables>
> &
  TChildProps;
export type CreateForumMutationFn = ReactApollo.MutationFn<
  CreateForumMutation,
  CreateForumVariables
>;
export function CreateForumHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateForumMutation,
        CreateForumVariables,
        CreateForumProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateForumMutation,
    CreateForumVariables,
    CreateForumProps<TChildProps>
  >(CreateForumDocument, operationOptions);
}
export const CreatePostDocument = gql`
  mutation createPost($text: String!, $threadId: Int!) {
    postCreate(input: { text: $text, threadId: $threadId }) {
      id
      text
      createdAt
      author {
        username
        profileImageUrl
      }
    }
  }
`;
export class CreatePostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<CreatePostMutation, CreatePostVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<CreatePostMutation, CreatePostVariables>
        mutation={CreatePostDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreatePostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreatePostMutation, CreatePostVariables>
> &
  TChildProps;
export type CreatePostMutationFn = ReactApollo.MutationFn<
  CreatePostMutation,
  CreatePostVariables
>;
export function CreatePostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreatePostMutation,
        CreatePostVariables,
        CreatePostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreatePostMutation,
    CreatePostVariables,
    CreatePostProps<TChildProps>
  >(CreatePostDocument, operationOptions);
}
export const CreateThreadDocument = gql`
  mutation createThread($text: String!, $title: String!, $forumId: Int!) {
    threadCreate(input: { text: $text, title: $title, forumId: $forumId }) {
      id
      title
    }
  }
`;
export class CreateThreadComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<CreateThreadMutation, CreateThreadVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<CreateThreadMutation, CreateThreadVariables>
        mutation={CreateThreadDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type CreateThreadProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<CreateThreadMutation, CreateThreadVariables>
> &
  TChildProps;
export type CreateThreadMutationFn = ReactApollo.MutationFn<
  CreateThreadMutation,
  CreateThreadVariables
>;
export function CreateThreadHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        CreateThreadMutation,
        CreateThreadVariables,
        CreateThreadProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    CreateThreadMutation,
    CreateThreadVariables,
    CreateThreadProps<TChildProps>
  >(CreateThreadDocument, operationOptions);
}
export const EditUserProfileDocument = gql`
  mutation EditUserProfile(
    $profileImageKey: String
    $username: String
    $location: String
    $gender: Gender
    $occupation: String
  ) {
    editUserProfile(
      input: {
        profileImageKey: $profileImageKey
        username: $username
        location: $location
        gender: $gender
        occupation: $occupation
      }
    ) {
      error {
        path
        message
      }
      success
    }
  }
`;
export class EditUserProfileComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<EditUserProfileMutation, EditUserProfileVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<EditUserProfileMutation, EditUserProfileVariables>
        mutation={EditUserProfileDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type EditUserProfileProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<EditUserProfileMutation, EditUserProfileVariables>
> &
  TChildProps;
export type EditUserProfileMutationFn = ReactApollo.MutationFn<
  EditUserProfileMutation,
  EditUserProfileVariables
>;
export function EditUserProfileHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        EditUserProfileMutation,
        EditUserProfileVariables,
        EditUserProfileProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    EditUserProfileMutation,
    EditUserProfileVariables,
    EditUserProfileProps<TChildProps>
  >(EditUserProfileDocument, operationOptions);
}
export const LoginDocument = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { email: $email, password: $password }) {
      success
      error {
        message
      }
    }
  }
`;
export class LoginComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LoginMutation, LoginVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LoginMutation, LoginVariables>
        mutation={LoginDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LoginProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginVariables>
> &
  TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginVariables
>;
export function LoginHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LoginMutation,
        LoginVariables,
        LoginProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LoginMutation,
    LoginVariables,
    LoginProps<TChildProps>
  >(LoginDocument, operationOptions);
}
export const LogoutDocument = gql`
  mutation Logout {
    logout {
      success
    }
  }
`;
export class LogoutComponent extends React.Component<
  Partial<ReactApollo.MutationProps<LogoutMutation, LogoutVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<LogoutMutation, LogoutVariables>
        mutation={LogoutDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type LogoutProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutVariables>
> &
  TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutVariables
>;
export function LogoutHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        LogoutMutation,
        LogoutVariables,
        LogoutProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    LogoutMutation,
    LogoutVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, operationOptions);
}
export const RegisterDocument = gql`
  mutation Register($username: String!, $email: String!, $password: String!) {
    register(
      input: { email: $email, username: $username, password: $password }
    ) {
      success
      error {
        path
        message
      }
    }
  }
`;
export class RegisterComponent extends React.Component<
  Partial<ReactApollo.MutationProps<RegisterMutation, RegisterVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<RegisterMutation, RegisterVariables>
        mutation={RegisterDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RegisterProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterVariables>
> &
  TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterVariables
>;
export function RegisterHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RegisterMutation,
        RegisterVariables,
        RegisterProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RegisterMutation,
    RegisterVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, operationOptions);
}
export const RequestResetPasswordDocument = gql`
  mutation RequestResetPassword($email: String!) {
    requestResetPassword(input: { email: $email }) {
      success
      error {
        path
        message
      }
    }
  }
`;
export class RequestResetPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<
      RequestResetPasswordMutation,
      RequestResetPasswordVariables
    >
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<
        RequestResetPasswordMutation,
        RequestResetPasswordVariables
      >
        mutation={RequestResetPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type RequestResetPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<
    RequestResetPasswordMutation,
    RequestResetPasswordVariables
  >
> &
  TChildProps;
export type RequestResetPasswordMutationFn = ReactApollo.MutationFn<
  RequestResetPasswordMutation,
  RequestResetPasswordVariables
>;
export function RequestResetPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        RequestResetPasswordMutation,
        RequestResetPasswordVariables,
        RequestResetPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    RequestResetPasswordMutation,
    RequestResetPasswordVariables,
    RequestResetPasswordProps<TChildProps>
  >(RequestResetPasswordDocument, operationOptions);
}
export const ResetPasswordDocument = gql`
  mutation ResetPassword($newPassword: String!, $pwResetToken: String!) {
    resetPassword(
      input: { newPassword: $newPassword, pwResetToken: $pwResetToken }
    ) {
      success
      error {
        path
        message
      }
    }
  }
`;
export class ResetPasswordComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<ResetPasswordMutation, ResetPasswordVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<ResetPasswordMutation, ResetPasswordVariables>
        mutation={ResetPasswordDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type ResetPasswordProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<ResetPasswordMutation, ResetPasswordVariables>
> &
  TChildProps;
export type ResetPasswordMutationFn = ReactApollo.MutationFn<
  ResetPasswordMutation,
  ResetPasswordVariables
>;
export function ResetPasswordHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        ResetPasswordMutation,
        ResetPasswordVariables,
        ResetPasswordProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    ResetPasswordMutation,
    ResetPasswordVariables,
    ResetPasswordProps<TChildProps>
  >(ResetPasswordDocument, operationOptions);
}
export const DeletePostDocument = gql`
  mutation DeletePost($id: Int!) {
    postDelete(id: $id) {
      id
      thread {
        id
      }
    }
  }
`;
export class DeletePostComponent extends React.Component<
  Partial<ReactApollo.MutationProps<DeletePostMutation, DeletePostVariables>>
> {
  render() {
    return (
      <ReactApollo.Mutation<DeletePostMutation, DeletePostVariables>
        mutation={DeletePostDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeletePostProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeletePostMutation, DeletePostVariables>
> &
  TChildProps;
export type DeletePostMutationFn = ReactApollo.MutationFn<
  DeletePostMutation,
  DeletePostVariables
>;
export function DeletePostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeletePostMutation,
        DeletePostVariables,
        DeletePostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeletePostMutation,
    DeletePostVariables,
    DeletePostProps<TChildProps>
  >(DeletePostDocument, operationOptions);
}
export const DeleteThreadDocument = gql`
  mutation DeleteThread($id: Int!) {
    threadDelete(id: $id) {
      id
      forum {
        id
      }
    }
  }
`;
export class DeleteThreadComponent extends React.Component<
  Partial<
    ReactApollo.MutationProps<DeleteThreadMutation, DeleteThreadVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Mutation<DeleteThreadMutation, DeleteThreadVariables>
        mutation={DeleteThreadDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type DeleteThreadProps<TChildProps = any> = Partial<
  ReactApollo.MutateProps<DeleteThreadMutation, DeleteThreadVariables>
> &
  TChildProps;
export type DeleteThreadMutationFn = ReactApollo.MutationFn<
  DeleteThreadMutation,
  DeleteThreadVariables
>;
export function DeleteThreadHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        DeleteThreadMutation,
        DeleteThreadVariables,
        DeleteThreadProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    DeleteThreadMutation,
    DeleteThreadVariables,
    DeleteThreadProps<TChildProps>
  >(DeleteThreadDocument, operationOptions);
}
export const GetAllCategoriesDocument = gql`
  query GetAllCategories {
    categoryGetAll {
      categories {
        id
        name
        createdAt
        updatedAt
        forumCount
      }
    }
  }
`;
export class GetAllCategoriesComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetAllCategoriesQuery, GetAllCategoriesVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetAllCategoriesQuery, GetAllCategoriesVariables>
        query={GetAllCategoriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllCategoriesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllCategoriesQuery, GetAllCategoriesVariables>
> &
  TChildProps;
export function GetAllCategoriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllCategoriesQuery,
        GetAllCategoriesVariables,
        GetAllCategoriesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllCategoriesQuery,
    GetAllCategoriesVariables,
    GetAllCategoriesProps<TChildProps>
  >(GetAllCategoriesDocument, operationOptions);
}
export const GetAllForumsDocument = gql`
  query GetAllForums {
    forumGetAll {
      forums {
        id
        name
        createdAt
        updatedAt
        threadCount
      }
    }
  }
`;
export class GetAllForumsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAllForumsQuery, GetAllForumsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAllForumsQuery, GetAllForumsVariables>
        query={GetAllForumsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllForumsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllForumsQuery, GetAllForumsVariables>
> &
  TChildProps;
export function GetAllForumsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllForumsQuery,
        GetAllForumsVariables,
        GetAllForumsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllForumsQuery,
    GetAllForumsVariables,
    GetAllForumsProps<TChildProps>
  >(GetAllForumsDocument, operationOptions);
}
export const GetPostDocument = gql`
  query GetPost($id: Int!) {
    postGet(id: $id) {
      id
      createdAt
      text
      authorId
      authorUsername
      threadId
      threadTitle
    }
  }
`;
export class GetPostComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetPostQuery, GetPostVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetPostQuery, GetPostVariables>
        query={GetPostDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetPostProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetPostQuery, GetPostVariables>
> &
  TChildProps;
export function GetPostHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetPostQuery,
        GetPostVariables,
        GetPostProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetPostQuery,
    GetPostVariables,
    GetPostProps<TChildProps>
  >(GetPostDocument, operationOptions);
}
export const GetAllPostsDocument = gql`
  query GetAllPosts {
    postGetAll {
      posts {
        id
        createdAt
        authorId
        authorUsername
        threadId
        threadTitle
      }
    }
  }
`;
export class GetAllPostsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAllPostsQuery, GetAllPostsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAllPostsQuery, GetAllPostsVariables>
        query={GetAllPostsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllPostsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllPostsQuery, GetAllPostsVariables>
> &
  TChildProps;
export function GetAllPostsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllPostsQuery,
        GetAllPostsVariables,
        GetAllPostsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllPostsQuery,
    GetAllPostsVariables,
    GetAllPostsProps<TChildProps>
  >(GetAllPostsDocument, operationOptions);
}
export const GetAllThreadsDocument = gql`
  query GetAllThreads {
    threadGetAll {
      threads {
        id
        title
        createdAt
        updatedAt
        postCount
      }
    }
  }
`;
export class GetAllThreadsComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAllThreadsQuery, GetAllThreadsVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAllThreadsQuery, GetAllThreadsVariables>
        query={GetAllThreadsDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllThreadsProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllThreadsQuery, GetAllThreadsVariables>
> &
  TChildProps;
export function GetAllThreadsHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllThreadsQuery,
        GetAllThreadsVariables,
        GetAllThreadsProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllThreadsQuery,
    GetAllThreadsVariables,
    GetAllThreadsProps<TChildProps>
  >(GetAllThreadsDocument, operationOptions);
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    userGetAll {
      users {
        id
        username
        email
        registerDate
        threadCount
        postCount
      }
    }
  }
`;
export class GetAllUsersComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetAllUsersQuery, GetAllUsersVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetAllUsersQuery, GetAllUsersVariables>
        query={GetAllUsersDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetAllUsersProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetAllUsersQuery, GetAllUsersVariables>
> &
  TChildProps;
export function GetAllUsersHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetAllUsersQuery,
        GetAllUsersVariables,
        GetAllUsersProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetAllUsersQuery,
    GetAllUsersVariables,
    GetAllUsersProps<TChildProps>
  >(GetAllUsersDocument, operationOptions);
}
export const GetCategoriesDocument = gql`
  query GetCategories {
    categoryGet {
      success
      categories {
        id
        name
        forums {
          id
          name
        }
      }
    }
  }
`;
export class GetCategoriesComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetCategoriesQuery, GetCategoriesVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetCategoriesQuery, GetCategoriesVariables>
        query={GetCategoriesDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetCategoriesProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetCategoriesQuery, GetCategoriesVariables>
> &
  TChildProps;
export function GetCategoriesHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetCategoriesQuery,
        GetCategoriesVariables,
        GetCategoriesProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetCategoriesQuery,
    GetCategoriesVariables,
    GetCategoriesProps<TChildProps>
  >(GetCategoriesDocument, operationOptions);
}
export const GetDashboardDocument = gql`
  query GetDashboard {
    dashboardGet {
      userCount
      categoryCount
      forumCount
      threadCount
      postCount
    }
  }
`;
export class GetDashboardComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetDashboardQuery, GetDashboardVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetDashboardQuery, GetDashboardVariables>
        query={GetDashboardDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetDashboardProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetDashboardQuery, GetDashboardVariables>
> &
  TChildProps;
export function GetDashboardHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetDashboardQuery,
        GetDashboardVariables,
        GetDashboardProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetDashboardQuery,
    GetDashboardVariables,
    GetDashboardProps<TChildProps>
  >(GetDashboardDocument, operationOptions);
}
export const GetForumDocument = gql`
  query GetForum($id: Int!, $offset: Int, $limit: Int) {
    forumGet(id: $id, offset: $offset, limit: $limit) {
      forum {
        id
        name
        createdAt
        category {
          name
        }
        threads {
          id
          title
          owner {
            username
          }
          createdAt
        }
      }
      threadCount
    }
  }
`;
export class GetForumComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetForumQuery, GetForumVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetForumQuery, GetForumVariables>
        query={GetForumDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetForumProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetForumQuery, GetForumVariables>
> &
  TChildProps;
export function GetForumHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetForumQuery,
        GetForumVariables,
        GetForumProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetForumQuery,
    GetForumVariables,
    GetForumProps<TChildProps>
  >(GetForumDocument, operationOptions);
}
export const GetThreadDocument = gql`
  query GetThread($id: Int!, $offset: Int) {
    threadGet(id: $id, offset: $offset) {
      thread {
        id
        title
        createdAt
        owner {
          username
        }
        posts {
          id
          text
          createdAt
          author {
            id
            username
            profileImageUrl
          }
        }
      }
      postCount
    }
  }
`;
export class GetThreadComponent extends React.Component<
  Partial<ReactApollo.QueryProps<GetThreadQuery, GetThreadVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<GetThreadQuery, GetThreadVariables>
        query={GetThreadDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetThreadProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetThreadQuery, GetThreadVariables>
> &
  TChildProps;
export function GetThreadHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetThreadQuery,
        GetThreadVariables,
        GetThreadProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetThreadQuery,
    GetThreadVariables,
    GetThreadProps<TChildProps>
  >(GetThreadDocument, operationOptions);
}
export const GetUploadUrlQueryDocument = gql`
  query GetUploadUrlQuery($contentType: String!, $extention: String!) {
    getUploadUrl(input: { contentType: $contentType, extention: $extention }) {
      success
      uploadKey
      uploadUrl
    }
  }
`;
export class GetUploadUrlQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<GetUploadUrlQueryQuery, GetUploadUrlQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<GetUploadUrlQueryQuery, GetUploadUrlQueryVariables>
        query={GetUploadUrlQueryDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type GetUploadUrlQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<GetUploadUrlQueryQuery, GetUploadUrlQueryVariables>
> &
  TChildProps;
export function GetUploadUrlQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        GetUploadUrlQueryQuery,
        GetUploadUrlQueryVariables,
        GetUploadUrlQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    GetUploadUrlQueryQuery,
    GetUploadUrlQueryVariables,
    GetUploadUrlQueryProps<TChildProps>
  >(GetUploadUrlQueryDocument, operationOptions);
}
export const MeDocument = gql`
  query Me {
    me {
      username
      email
      permissions
      profileImageUrl
      profile {
        id
        gender
        location
        occupation
      }
    }
  }
`;
export class MeComponent extends React.Component<
  Partial<ReactApollo.QueryProps<MeQuery, MeVariables>>
> {
  render() {
    return (
      <ReactApollo.Query<MeQuery, MeVariables>
        query={MeDocument}
        {...(this as any)["props"] as any}
      />
    );
  }
}
export type MeProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<MeQuery, MeVariables>
> &
  TChildProps;
export function MeHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        MeQuery,
        MeVariables,
        MeProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    MeQuery,
    MeVariables,
    MeProps<TChildProps>
  >(MeDocument, operationOptions);
}
