const knex = require('../../../models/database/connection');

module.exports = {

  async index(request, response) {
    const pets = await knex('pets').select('*').distinct();

    const serializedPets =  pets.map(pet => {
        return {
        ...pet,
        image_url: `http://192.168.0.106:3333/uploads/${pet.image}`,
      };
    });

    return response.json(serializedPets);
  }

}