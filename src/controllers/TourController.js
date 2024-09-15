const Tour = require("../models/Tour");

class TourController {
  async getTours(req, res) {
    const tours = await Tour.findAll();
    res.json(tours);
  }

  async createTour(req, res) {
    const { name, local, description, price, date, userId } = req.body;
    const tour = await Tour.create({ name, local, description, price, date, userId });
    res.json(tour);
  }
}

module.exports = new TourController();