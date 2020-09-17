const knex = require('../models/database/connection');
const crypto = require('crypto');

module.exports = {

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
  }

};