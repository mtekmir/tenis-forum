/* tslint:disable */
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
  User = "USER"
}

export type Date = any;

export type DateTime = any;

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

  originalPost: GetThreadOriginalPost;

  posts: GetThreadPosts[];
};

export type GetThreadOwner = {
  __typename?: "ThreadOwner";

  username: string;
};

export type GetThreadOriginalPost = {
  __typename?: "Post";

  id: number;

  text: string;
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
};

export type MeVariables = {};

export type MeQuery = {
  __typename?: "Query";

  me: Maybe<MeMe>;
};

export type MeMe = {
  __typename?: "Me";

  username: string;

  email: string;

  profileImageUrl: string;

  profile: MeProfile;
};

export type MeProfile = {
  __typename?: "UserProfile";

  id: number;

  gender: string;
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
      originalPost {
        id
        text
      }
      posts {
        id
        text
        createdAt
        author {
          id
          username
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
export const MeDocument = gql`
  query Me {
    me {
      username
      email
      profileImageUrl
      profile {
        id
        gender
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
