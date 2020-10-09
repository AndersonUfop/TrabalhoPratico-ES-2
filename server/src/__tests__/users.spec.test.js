const   CreateUser  = require('../modules/users/controllers/CreateUsersController');
const   FindUser  = require('../modules/users/controllers/CreateUsersController');

describe('Create User', () => {

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
