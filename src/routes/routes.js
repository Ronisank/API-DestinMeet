const {Router} = require('express');

const userRoutes = require('./users.route');
const tourRoutes = require('./tours.route');
const bookingRoutes = require('./bookings.route');
const reviewRoutes = require('./review.route');
const authRoutes = require('./auth.route');
const { auth } = require('../middlewares/auth');

const routes = Router();

routes.use('/User', userRoutes);
routes.use('/Tour', auth, tourRoutes);
routes.use('/Booking',bookingRoutes);
routes.use('/Review',reviewRoutes);
routes.use('/Login',authRoutes);

module.exports = routes;