const knex = require('../../../models/database/connection');

class DeletePetsController {

  async delete (request, response) {

    const { id } = request.params;
    const id_pet = await knex('pets').where('id', id).delete();

    if (id_pet === 0 )
      return response.status(400).json({message: 'Erro! Animal não encontrado'});

    return response.status(204).send();
  }

}

module.exports = new DeletePetsController();