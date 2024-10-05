const {Router} = require('express');
const UserController = require('../controllers/UserController');

const userRoutes = new Router();

userRoutes.get('/', UserController.listar);
userRoutes.post('/', UserController.criar);

module.exports = userRoutes;