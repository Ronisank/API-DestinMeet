const User = require("../models/User");

class UserController {

  async listar(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

    async criar(req, res) {
        const { name, email, password, phone, type_user } = req.body;
        const user = await User.create({ name, email, password, phone, type_user });
        res.json(user);
    }

}

module.exports = new UserController();