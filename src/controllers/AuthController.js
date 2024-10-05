const { User } = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController{
    async login(req, res){
        try {
            const { email, password } = req.body;
            console.log('Dados recebidos:', email, password);
            const usuario = await User.findOne({ where: { email: email } });
            console.log('Usuário encontrado:', usuario);

            if (!usuario) {
                return res.status(404).send('Usuário não encontrado');
            }

            const senhaCorreta = await bcrypt.compare(password, usuario.password);

            if (!senhaCorreta) {
                console.log('Senha incorreta');
                return res.status(401).send('Senha incorreta');
            }

            const token = jwt.sign({ id: usuario.id, email: usuario.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.json({ user: { id: usuario.id, nome: usuario.name, email: usuario.email }, token: token });
        } catch (err) {
            console.error(err);
            res.status(500).send('Erro no servidor');
        }
    }
}

module.exports = new AuthController();