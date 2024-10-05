const { Router } = require('express');

const BookingController = require('../controllers/BookingController');

const bookingRoutes = new Router();

bookingRoutes.get('/', BookingController.getBookings);
bookingRoutes.post('/', BookingController.createBooking);
bookingRoutes.get('/:id', BookingController.getBooking);
bookingRoutes.delete('/:id', BookingController.deleteBooking);

module.exports = bookingRoutes;