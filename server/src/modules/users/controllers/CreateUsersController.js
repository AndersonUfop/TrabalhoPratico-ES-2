const knex = require('../../../models/database/connection');
const crypto = require('crypto');

module.exports = {

  async create (request, response) {
    const id = crypto.randomBytes(4).toString('HEX');

    const {
      name,
      telephone,
      mail,
      password,
      address
    } = request.body;


    await knex('users').insert({
      id,
      name,
      telephone,
      mail,
      password,
      address
    });

    return response.json({ user: request.body })
  }

};