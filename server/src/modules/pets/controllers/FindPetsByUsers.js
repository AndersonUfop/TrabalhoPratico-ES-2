const knex = require('../../../models/database/connection');

class FindPetsByUsers {

  async show(request, response) {

    const { id } = request.params;
    const pets = await knex('pets').select('*').where('user_id', id);

    return response.json(pets);
  }

}

module.exports = new FindPetsByUsers();