const { Router } = require('express');
const TourController = require('../controllers/TourController');

const tourRoutes = new Router();

tourRoutes.get('/', TourController.getTours);
tourRoutes.post('/', TourController.createTour);

module.exports = tourRoutes;