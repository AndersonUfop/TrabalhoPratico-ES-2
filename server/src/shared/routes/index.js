const express = require('express');

const multer = require('multer');
const multerConfig = require('../../config/multer');

const PetsCreate = require('../../modules/pets/controllers/CreatePetsController');
const PetsUpdate = require('../../modules/pets/controllers/UpdatePetsController');
const PetsView = require('../../modules/pets/controllers/FindByPetsController');
const PetsUsers = require('../../modules/pets/controllers/FindPetsByUsers');
const PetsDelete = require('../../modules/pets/controllers/DeletePetsController');

const UsersCreate = require('../../modules/users/controllers/CreateUsersController');
const UsersView = require('../../modules/users/controllers/FindByUsersController');

const routes = express.Router();
const upload = multer(multerConfig);

// Listar usuários
routes.get('/users', UsersView.index);

// Inserir usuários
routes.post('/users/create', UsersCreate.create);

// Listar pets
routes.get('/pets', PetsView.index);

// Listar pets de um usuario
routes.get('/pets/:id', PetsUsers.show);

// Editar pets
routes.put('/update/:id', PetsUpdate.update);
// Excluir pet
routes.delete('/delete/:id', PetsDelete.delete);

// Cadastrar pets
routes.post('/create', upload.single('image'), PetsCreate.create);


module.exports = routes;

