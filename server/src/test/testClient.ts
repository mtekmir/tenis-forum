import { decode } from 'jsonwebtoken';
import faker from 'faker';
import { graphql, GraphQLSchema } from 'graphql';
import Redis from 'ioredis';
import {
  testRegisterMutation,
  testLoginMutation,
  testResetPasswordMutation,
  testLogoutMutation
} from './testClientQueries';
import { genSchema } from '../schema';
import { User } from '../models/User';
import { UserPermissions } from '../models/User/permissions';

interface Options {
  source: string;
  variableValues?: { [key: string]: any };
}

const { REDIS_URL } = process.env;
const mockRequest: { [key: string]: any } = {
  get: (): any => null
};

const mockResponse: { [key: string]: any } = {
  cookies: {},
  cookie(key: string, val: string, opts: any) {
    this.cookies[key] = val;
  },
  clearCookie(key: string) {
    delete this.cookies[key];
  }
};

export class TestClient {
  schema: GraphQLSchema;
  context: { [key: string]: any };
  constructor() {
    this.context = {
      request: mockRequest,
      response: mockResponse,
      redis: new Redis(REDIS_URL),
      userId: null
    };
    this.schema = genSchema();
  }

  async gqlCall({ source, variableValues }: Options) {
    await this.authenticate();
    return graphql({
      schema: this.schema,
      source,
      variableValues,
      contextValue: this.context
    });
  }

  async register(username: string, email: string, password: string) {
    const response = await this.gqlCall({
      source: testRegisterMutation,
      variableValues: {
        username,
        email,
        password
      }
    });
    return response.data;
  }

  async authenticate() {
    if (this.context.response.cookies.token) {
      const { id }: any = await decode(this.context.response.cookies.token);
      this.context.userId = id;
    } else {
      this.context.userId = null;
    }
  }

  async login(email: string, password: string) {
    const response = await this.gqlCall({
      source: testLoginMutation,
      variableValues: {
        email,
        password
      }
    });
    return response.data;
  }

  async resetPassword(newPassword: string, key: string) {
    const response = await this.gqlCall({
      source: testResetPasswordMutation,
      variableValues: {
        newPassword,
        key
      }
    });

    return response.data;
  }

  async logout() {
    const response = await this.gqlCall({ source: testLogoutMutation });

    return response.data;
  }

  async createUser(count: number = 1) {
    const users = [];
    for (let i = 0; i < count; i++) {
      const username = faker.internet.userName();
      const email = faker.internet.email().toLowerCase();
      const password = faker.internet.password();
      const user = await User.create({
        username,
        email,
        password,
        confirmed: true,
        permissions: [UserPermissions.User]
      }).save();
      users.push({ id: user.id, username, email, password });
    }
    return users;
  }

  async registerAndLogin() {
    const users = await this.createUser();
    const { email, password, username, id } = users[0];
    await this.login(email, password);

    return { id, username, email, password };
  }

  async mutation<TData, TVars = {}>(
    mutation: string,
    variableValues?: TVars
  ): Promise<{ [key: string]: TData }> {
    const response = await this.gqlCall({ source: mutation, variableValues });
    return response.data;
  }

  async query<TData, TVars>(
    query: string,
    variableValues?: TVars
  ): Promise<{ [key: string]: TData }> {
    const response = await this.gqlCall({ source: query, variableValues });
    return response.data;
  }
}
