const {Server} = require('../models');
const utils = require('../utils');

class ServersController {

    getOne(request, response) {
        return new Server().findOne(request.params.id)
            .then(server => response.status(200).json(server))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new Server().findAll()
            .then(servers => response.status(200).json(servers))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let server = new Server();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            ip: request.body.ip,
            port: request.body.port,
            username: request.body.username,
            password: request.body.password,
            active: true
        };

        if (data.id === "" || data.id === undefined || data.id === null) {
            errors["id"] = "ID is missing from the payload";
        }

        if (data.ip === "" || data.ip === undefined || data.ip === null) {
            errors["ip"] = "IP is missing from the payload";
        }

        if (data.port === "" || data.port === undefined || data.port === null) {
            errors["port"] = "Port is missing from the payload";
        }

        if (data.username === "" || data.username === undefined || data.username === null) {
            errors["username"] = "Username is missing from the payload";
        }

        if (data.password === "" || data.password === undefined || data.password === null) {
            errors["password"] = "Password is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return server.save(data)
            .then(server => response.status(201).json(server))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new ServersController();