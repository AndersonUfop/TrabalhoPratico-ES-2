const knex = require('../../../models/database/connection');

module.exports = {

  async update (request, response) {
    const {
      name,
      specie,
      breed,
      port,
      age,
      sex,
      city
    } = request.body;

    const { id } = request.params;
    const id_pet = await knex('pets')
      .update({
        id,
        name,
        specie,
        breed,
        port,
        age,
        sex,
        city
       }).where({ id });

       if (id_pet === 0)
        return response.status(400).json({ message: 'Erro! Animal não encontrado!'})

      return response.json({ pet: request.body });
  }

};