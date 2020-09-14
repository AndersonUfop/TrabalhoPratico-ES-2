const knex = require('../database/connection');
const crypto = require('crypto');


module.exports = {

  async index(request, response) {
    const pets = await knex('pets').select('*');

    return response.json(pets);
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
      image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=120q=80',
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
