const Booking = require("../models/Booking");

class BookingController{
    async getBookings(req, res) {
        const booking = await Booking.findAll();
        res.json(booking);
    }
    async getBooking(req, res) {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        res.json(booking);
    }
    async createBooking(req, res) {
        const { status, tourId, userId } = req.body;
        const booking = await Booking.create({ status, tourId, userId });
        res.json(booking);
    }
    async deleteBooking(req, res) {
        const { id } = req.params;
        await Booking.destroy({ where: { id } });
        res.json({ message: "Booking deleted" });
    }

}

module.exports = new BookingController();