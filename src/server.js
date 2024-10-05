const express = require('express');
const cors = require('cors');
const { connection } = require('./database/connection');
const routes = require('./routes/routes');

const PORT_API = process.env.PORT_API

class Server {
    constructor(server = express()) {
        this.middlewares(server);
        this.database();
        server.use(routes);
        this.initializeServer(server);
    }
    async middlewares(app) {
        app.use(cors());
        app.use(express.json());
    }
    async database() {
        try {
            await connection.authenticate();
            console.log('Connection has been established successfully.');
        } catch (error) {
            console.error('Unable to connect to the database:', error);
            throw error.message;
        }
    }
    async initializeServer(app) {
        app.listen(PORT_API, () => console.log(`Server is running on port ${PORT_API}`));
    }
    
}

module.exports = { Server }; //? Export the Server class