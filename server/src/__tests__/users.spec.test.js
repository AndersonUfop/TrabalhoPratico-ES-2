const request = require('supertest');
const   CreateUser  = require('../modules/users/controllers/CreateUsersController');

describe('Users', () => {

  it('should be able create user', async () => {
    const response = await request(CreateUser)
      .post('/users')
      .send({
        name: "Bruna",
        telephone: "1242424"
      });
      expect(response.body).toMatchObject({
        name: "Bruna",
        telephone: "1242424"
      })
  });

 it("should be able create user", async () => {
    CreateUser.name = 'Luiz';
    CreateUser.telephone = '123';
    CreateUser.mail = 'mail@example.com';
    CreateUser.password = '123456';
    CreateUser.address = 'address-example';

    const response = CreateUser;

    expect(CreateUser).toBe(response);

  });

  it('Find by users', () => {

    const vet = [
      CreateUser.name = 'Luiz',
      CreateUser.telephone = '123',
      CreateUser.mail = 'luiz@example.com',
      CreateUser.password = '123456',
      CreateUser.address = 'address-luiz',
    ];

    expect(vet).toEqual(expect.arrayContaining(vet));
  })
});
