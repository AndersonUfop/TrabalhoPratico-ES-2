const knex = require('../../../models/database/connection');

module.exports = {

  async show(request, response) {

    const { id } = request.params;
    const pets = await knex('pets').select('*').where('user_id', id);

    return response.json(pets);
  }

}