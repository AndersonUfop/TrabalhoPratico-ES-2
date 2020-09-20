const knex = require('../../../models/database/connection');

module.exports = {

  async index(request, response) {
    const users = await knex('users').select('*').distinct();

    return response.json(users);
  }

}