const express = require('express');

const PetsController = require('../controllers/PetsController');

const routes = express.Router();

// Cadastrar pets
routes.post('/create', PetsController.create);

// Listar pets
routes.get('/pets', PetsController.index);

// Editar pets
routes.put('/update/:id', PetsController.update);

// Excluir pet
routes.delete('/delete/:id', PetsController.delete);

module.exports = routes;

