const knex = require('../../../models/database/connection');

class FindByUsersController {

  async index(request, response) {
    const users = await knex('users').select('*').distinct();

    return response.json(users);
  }

}

module.exports = new FindByUsersController();