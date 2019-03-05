import faker from 'faker';
import { Connection } from 'typeorm';
import { createDbConnection } from '../../../../utils/createDbConnection';
import { TestClient } from '../../../../test/testClient';
import { UserPermissions } from '../../../../models/User/permissions';
import { Category } from '../../../../models/Category';
import { Forum } from '../../../../models/Forums';

const client = new TestClient();
let category: Category;

let connection: Connection;
beforeAll(async () => {
  connection = await createDbConnection('TEST');
  await client.registerAndLogin(UserPermissions.Admin);
  category = await Category.create({
    name: faker.company.companyName()
  }).save();
});

afterAll(async () => {
  await connection.close();
});

const mutation = `
  mutation($name: String!, $categoryId: Int!) {
    forumCreate(input: { name: $name, categoryId: $categoryId }) {
        name
        category {
          name
        }
    }
  }
`;

describe('[Create Forum]', () => {
  test('Create', async () => {
    const name = faker.company.companyName();
    const res = await client.mutation(mutation, {
      categoryId: category.id,
      name
    });

    expect(res.data.forumCreate.name).toBe(name);
    expect(res.data.forumCreate.category.name).toEqual(category.name);

    const updatedCategory = await connection
      .getRepository(Category)
      .findOne({ where: { id: category.id }, relations: ['forums'] });
    expect(updatedCategory.forums[0].name).toBe(name);

    const forum = await Forum.findOne({
      where: { name },
      relations: ['category']
    });
    expect(forum.category.name).toBe(category.name);
  });
});
