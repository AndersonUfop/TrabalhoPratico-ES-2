const knex = require('../../../models/database/connection');
const crypto = require('crypto');

module.exports = {

  async create (request, response) {
    const id = crypto.randomBytes(4).toString('HEX');

    const {
      name,
      specie,
      breed,
      port,
      age,
      sex,
      city,
      user_id,
    } = request.body;


    await knex('pets').insert({
      id,
      image: request.file.filename,
      name,
      specie,
      breed,
      port,
      age,
      sex,
      city,
      user_id,
    });

    return response.json({ pet: request.body })
  }

};