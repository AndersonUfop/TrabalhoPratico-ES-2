const crypto = require('crypto');
const express = require('express');
const knex = require('../database/connection');

const routes = express.Router();

routes.get('/pets', (request, response) => {
  return response.json({ message: 'Pets' });

});

routes.post('/create', async(request, response) => {
  const id = crypto.randomBytes(4).toString('HEX');

  const {
    image,
    type,
    sex,
    breed,
    coat
  } = request.body;

  await knex('pets').insert({
    id,
    image,
    type,
    sex,
    breed,
    coat
  });

  return response.json({ success: true })
});

module.exports = routes;

