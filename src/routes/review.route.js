const { Router } = require('express');

const ReviewController = require('../controllers/ReviewController');

const reviewRoutes = new Router();

reviewRoutes.get('/', ReviewController.list);
reviewRoutes.post('/', ReviewController.create);

module.exports = reviewRoutes;