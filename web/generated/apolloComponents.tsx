/* tslint:disable */
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

export type GetForumVariables = {
  id: number;
};

export type GetForumQuery = {
  __typename?: "Query";

  forumGet: Maybe<GetForumForumGet>;
};

export type GetForumForumGet = {
  __typename?: "Forum";

  id: number;

  name: string;

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
};

export type GetThreadQuery = {
  __typename?: "Query";

  threadGet: GetThreadThreadGet;
};

export type GetThreadThreadGet = {
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

  profileImageUrl: Maybe<string>;

  profile: MeProfile;
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
export const GetForumDocument = gql`
  query GetForum($id: Int!) {
    forumGet(id: $id) {
      id
      name
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
  query GetThread($id: Int!) {
    threadGet(id: $id) {
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
