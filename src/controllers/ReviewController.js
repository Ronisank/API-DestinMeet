const Review = require("../models/Review");

class ReviewController {
  async create(req, res) {
    const review = await Review.create(req.body);
    res.json(review);
  }
    async list(req, res) {
        const reviews = await Review.findAll();
        res.json(reviews);
    }
}

module.exports = new ReviewController();