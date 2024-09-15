const {Router} = require('express');

const userRoutes = require('./users.route');
const tourRoutes = require('./tours.route');

const routes = Router();

routes.use('/User',userRoutes);
routes.use('/Tour',tourRoutes)

module.exports = routes;