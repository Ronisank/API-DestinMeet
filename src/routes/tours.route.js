const { Router } = require('express');
const TourController = require('../controllers/TourController');

const tourRoutes = new Router();

tourRoutes.get('/', TourController.getTours);
tourRoutes.post('/', TourController.createTour);
tourRoutes.get('/:id', TourController.getTour);
tourRoutes.put('/:id', TourController.updateTour);
tourRoutes.delete('/:id', TourController.deleteTour);

module.exports = tourRoutes;