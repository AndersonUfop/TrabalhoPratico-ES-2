const express = require('express');

const multer = require('multer');
const multerConfig = require('../config/multer');

const PetsController = require('../controllers/PetsController');

const routes = express.Router();
const upload = multer(multerConfig);

// Listar pets
routes.get('/pets', PetsController.index);
// Editar pets
routes.put('/update/:id', PetsController.update);
// Excluir pet
routes.delete('/delete/:id', PetsController.delete);

// Cadastrar pets
routes.post('/create', upload.single('image'), PetsController.create);


module.exports = routes;

