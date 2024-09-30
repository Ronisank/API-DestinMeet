const {Router} = require('express');

const AuthController = require('../controllers/AuthController');

const authRoutes = new Router();

authRoutes.post('/', AuthController.login);

module.exports = authRoutes;