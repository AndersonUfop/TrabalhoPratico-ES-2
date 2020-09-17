const express = require('express');

const multer = require('multer');
const multerConfig = require('../../config/multer');

const PetsCreate = require('../../controllers/CreatePetsController');
const PetsUpdate = require('../../controllers/UpdatePetsController');
const PetsView = require('../../controllers/FindByPetsController');
const PetsDelete = require('../../controllers/DeletePetsController');

const routes = express.Router();
const upload = multer(multerConfig);

// Listar pets
routes.get('/pets', PetsView.index);
// Editar pets
routes.put('/update/:id', PetsUpdate.update);
// Excluir pet
routes.delete('/delete/:id', PetsDelete.delete);

// Cadastrar pets
routes.post('/create', upload.single('image'), PetsCreate.create);


module.exports = routes;

