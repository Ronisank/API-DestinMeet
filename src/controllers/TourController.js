const Tour = require("../models/Tour");

class TourController {
  async getTours(req, res) {
    const tours = await Tour.findAll();
    res.json(tours);
  }
  async getTour(req, res) {
    const { id } = req.params;
    const tour = await Tour.findByPk(id);
    res.json(tour);
  }

  async createTour(req, res) {
    const { name, local, description, price, date, userId } = req.body;
    const tour = await Tour.create({ name, local, description, price, date, userId });
    res.json(tour);
  }
  async updateTour(req, res) {
    const { id } = req.params;
    const { name, local, description, price, date, userId } = req.body;
    const tour = await Tour.update({ name, local, description, price, date, userId }, { where: { id } });
    res.json(tour);
  }
  async deleteTour(req, res) {
    const { id } = req.params;
    await Tour.destroy({ where: { id } });
    res.json({ message: "Tour deleted" });
  }
}

module.exports = new TourController();