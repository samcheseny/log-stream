const {Log} = require('../models');
const utils = require('../utils');

class LogsController {

    getOne(request, response) {
        return new Log().findOne(request.params.id)
            .then(log => response.status(200).json(log))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new Log().findAll()
            .then(logs => response.status(200).json(logs))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let log = new Log();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            applicationID: request.body.applicationID,
            logLevelID: request.body.logLevelID,
            logPath: request.body.logPath,
            active: true
        };

        if (data.id === "" || data.id === undefined || data.id === null) {
            errors["id"] = "ID is missing from the payload";
        }

        if (data.applicationID === "" || data.applicationID === undefined || data.applicationID === null) {
            errors["applicationID"] = "ApplicationID is missing from the payload";
        }

        if (data.logLevelID === "" || data.logLevelID === undefined || data.logLevelID === null) {
            errors["logLevelID"] = "LogLevelID is missing from the payload";
        }

        if (data.logPath === "" || data.logPath === undefined || data.logPath === null) {
            errors["logPath"] = "LogPath is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        //Todo: Add validation to check if file exist or the
        // engine to create file if it does not exist

        return log.save(data)
            .then(log => response.status(201).json(log))
            .catch(error => response.status(400).send(error));
    }

    filter(request, response) {

        let data = {
            applicationIDs: request.body.applicationIDs || [],
            logLevelIDs: request.body.logLevelIDs || [],
            serverIDs: request.body.serverIDs || [],
        };

        let errors = {};

        if (!Array.isArray(data.applicationIDs)) {
            errors["applicationIDs"] = "ApplicationIDs should be an array";
        }

        if (!Array.isArray(data.logLevelIDs)) {
            errors["logLevelIDs"] = "LogLevelIDs should be an array";
        }

        if (!Array.isArray(data.serverIDs)) {
            errors["serverIDs"] = "ServerIDs should be an array";
        }

        if (data.serverIDs.length > 0 && !data.serverIDs.every(utils.isNumber)) {
            errors["serverIDs"] = "ServerIDs should be an array of numbers";
        }

        if (data.logLevelIDs.length > 0 && !data.logLevelIDs.every(utils.isNumber)) {
            errors["logLevelIDs"] = "LogLevelIDs should be an array of numbers";
        }

        if (data.applicationIDs.length > 0 && !data.applicationIDs.every(utils.isNumber)) {
            errors["applicationIDs"] = "ApplicationIDs should be an array of numbers";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return new Log().filter(data)
            .then(logs => response.status(201).json(logs))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new LogsController();