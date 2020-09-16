const knex = require('../database/connection');
const crypto = require('crypto');


module.exports = {

  async index(request, response) {
    const pets = await knex('pets').select('*');

    const serializedPets = pets.map(pet => {
      return {
        ...pets,
        image_url: `http://192.168.0.106:3333/uploads/${pet.image}`,
      };
    });

    return response.json(serializedPets);
  },



  async create (request, response) {
    const id = crypto.randomBytes(4).toString('HEX');

    const {
      type,
      sex,
      breed,
      coat
    } = request.body;


    await knex('pets').insert({
      id,
      image: request.file.filename,
      type,
      sex,
      breed,
      coat
    });

    return response.json({ pet: request.body })
  },

  async update (request, response) {
    const {
      image,
      type,
      sex,
      breed,
      coat
    } = request.body;

    const { id } = request.params;

    await knex('pets')
      .update({
        id,
        image,
        type,
        sex,
        breed,
        coat
       }).where({ id });

      return response.send();
  },

  async delete (request, response) {

    const { id } = request.params;
    await knex('pets').where('id', id).delete();

    return response.status(204).send();
  }
}
