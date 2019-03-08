import { decode } from 'jsonwebtoken';
import faker from 'faker';
import { graphql, GraphQLSchema } from 'graphql';
import Redis from 'ioredis';
import {
  testRegisterMutation,
  testLoginMutation,
  testResetPasswordMutation,
  testLogoutMutation,
  testCreateForumMutation,
  testCreateCategoryMutation,
  testCreateThreadMutation,
  testCreatePostMutation,
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
  get: (): any => null,
};

const mockResponse: { [key: string]: any } = {
  cookies: {},
  // tslint:disable-next-line
  cookie: function(key: string, val: string) {
    this.cookies[key] = val;
  },
};

export class TestClient {
  schema: GraphQLSchema;
  context: { [key: string]: any };
  constructor() {
    this.context = {
      request: mockRequest,
      response: mockResponse,
      redis: new Redis(REDIS_URL),
      userId: null,
    };
    this.schema = genSchema();
  }

  async gqlCall({ source, variableValues }: Options) {
    await this.authenticate();
    return graphql({
      schema: this.schema,
      source,
      variableValues,
      contextValue: this.context,
    });
  }

  async register(username: string, email: string, password: string) {
    const response = await this.gqlCall({
      source: testRegisterMutation,
      variableValues: {
        username,
        email,
        password,
      },
    });
    return response.data;
  }

  async authenticate() {
    if (this.context.request.cookies.token) {
      const { id }: any = await decode(this.context.request.cookies.token);
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
        password,
      },
    });
    return response.data;
  }

  async resetPassword(newPassword: string, key: string) {
    const response = await this.gqlCall({
      source: testResetPasswordMutation,
      variableValues: {
        newPassword,
        key,
      },
    });

    return response.data;
  }

  async logout() {
    const response = await this.gqlCall({ source: testLogoutMutation });

    return response.data;
  }

  async createUser(count: number = 1, permission = UserPermissions.User) {
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
        permissions: [permission],
      }).save();
      users.push({ id: user.id, username, email, password });
    }
    return users;
  }

  async createCategory() {
    const res = await this.gqlCall({
      source: testCreateCategoryMutation,
      variableValues: { name: faker.company.companyName() },
    });
    return res.data.categoryCreate;
  }

  async createForum(categoryId: number) {
    const res = await this.gqlCall({
      source: testCreateForumMutation,
      variableValues: { name: faker.company.companyName(), categoryId },
    });
    return res.data.forumCreate;
  }

  async createThread(forumId: number) {
    const res = await this.gqlCall({
      source: testCreateThreadMutation,
      variableValues: {
        title: faker.lorem.sentence(),
        text: faker.lorem.paragraph(),
        forumId,
      },
    });
    return res.data.threadCreate;
  }

  async createPost(threadId: number) {
    const res = await this.gqlCall({
      source: testCreatePostMutation,
      variableValues: { threadId, text: faker.lorem.paragraph() },
    });
    return res.data.postCreate;
  }

  async registerAndLogin(permission = UserPermissions.User) {
    const users = await this.createUser(1, permission);
    const { email, password, username, id } = users[0];
    await this.login(email, password);

    return { id, username, email, password };
  }

  async mutation<TVars>(mutation: string, variableValues?: TVars) {
    const response = await this.gqlCall({ source: mutation, variableValues });

    return response;
  }

  async query<TVars>(query: string, variableValues?: TVars) {
    const response = await this.gqlCall({ source: query, variableValues });
    return response;
  }
}
