const knex = require('../../../models/database/connection');

class DeleteUsersController {

  async delete (request, response) {

    const { id } = request.params;
    const id_user = await knex('users').where('id', id).delete();

    if (id_user === 0 )
      return response.status(400).json({message: 'Erro! Usuario não encontrado!'});

    return response.status(204).send();
  }

}

module.exports = new DeleteUsersController();