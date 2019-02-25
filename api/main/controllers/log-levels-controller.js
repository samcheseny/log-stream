const {LogLevel} = require('../models');
const utils = require('../utils');

class LogLevelsController {

    getOne(request, response) {
        return new LogLevel().findOne(request.params.id)
            .then(logLevel => response.status(200).json(logLevel))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new LogLevel().findAll()
            .then(logLevels => response.status(200).json(logLevels))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let logLevel = new LogLevel();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            level: request.body.level,
            description: request.body.description,
            active: true
        };

        if (data.id === "" || data.id === undefined || data.id === null) {
            errors["id"] = "ID is missing from the payload";
        }

        if (data.level === "" || data.level === undefined || data.level === null) {
            errors["level"] = "Level is missing from the payload";
        }

        if (data.description === "" || data.description === undefined || data.description === null) {
            errors["description"] = "Description is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return logLevel.save(data)
            .then(logLevel => response.status(201).json(logLevel))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new LogLevelsController();