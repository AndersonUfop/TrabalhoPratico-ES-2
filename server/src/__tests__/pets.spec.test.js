const request = require('supertest');
const GetPets = require('../modules/pets/controllers/FindByPetsController');

describe('Pets', () => {

  it('Should be abe get pets', async () => {
    const pet = await request(GetPets)
      .post('/pets')
      .send({
        name: "Romeu",
        specie: "Cachorro",
        breed: "Persa",
      });

      const response = await request(GetPets).get('/pets');

      expect(response.body).toEqual(
        arrayContaining([
        {
          id: pet.body.id,
          name: "Romeu",
          specie: "Cachorro",
        }
      ])
      );
  })
});