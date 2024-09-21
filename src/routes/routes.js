const {Router} = require('express');

const userRoutes = require('./users.route');
const tourRoutes = require('./tours.route');
const bookingRoutes = require('./bookings.route');
const reviewRoutes = require('./review.route');

const routes = Router();

routes.use('/User',userRoutes);
routes.use('/Tour',tourRoutes);
routes.use('/Booking',bookingRoutes);
routes.use('/Review',reviewRoutes);

module.exports = routes;