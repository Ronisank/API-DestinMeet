const {User} = require("../models/User");
const bcrypt = require('bcrypt');

class UserController {

  async listar(req, res) {
    const users = await User.findAll();
    return res.json(users);
  }

    async criar(req, res) {
      try {
        
        const { name, email, password, phone, type_user } = req.body;
        if (!name || !email || !password || !phone || !type_user) {
            return res.status(400).json({ message: "Dados obrigatórios faltando" });
        }
        const userExists = await User.findOne({ where: { email: email } });
        if (userExists) {
            return res.status(400).json({ message: "Email já cadastrado" });
        }
        const encryptedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({ name, email, password: encryptedPassword, phone, type_user });
        
        res.json(newUser);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao salvar usuário", error: error });
      }
    }

}

module.exports = new UserController();