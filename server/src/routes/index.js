const crypto = require('crypto');
const express = require('express');
const knex = require('../database/connection');

const routes = express.Router();

// Listar pets
routes.get('/pets', async(request, response) => {
  const pets = await knex('pets').select('*');

  return response.json(pets);

});

// Cadastrar pets
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

// Excluir pet
routes.delete('/delete/:id', async(request, response) => {
  const { id } = request.params;

  await knex('pets').where('id', id).delete();

  return response.status(204).send();
})

// Editar pet

routes.put('/update/:id', async(request, response) => {
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
})

module.exports = routes;

