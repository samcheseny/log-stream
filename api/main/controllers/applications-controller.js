const {Application} = require('../models');
const utils = require('../utils');

class ApplicationsController {

    getOne(request, response) {
        return new Application().findOne(request.params.id)
            .then(application => response.status(200).json(application))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new Application().findAll()
            .then(applications => response.status(200).json(applications))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let application = new Application();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            name: request.body.name,
            description: request.body.description,
            serverID: request.body.serverID,
            active: true
        };

        if (data.name === "" || data.name === undefined || data.name === null) {
            errors["name"] = "Name is missing from the payload";
        }

        if (data.description === "" || data.description === undefined || data.description === null) {
            errors["description"] = "Description is missing from the payload";
        }

        if (data.serverID === "" || data.serverID === undefined || data.serverID === null) {
            errors["serverID"] = "ServerID is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return application.save(data)
            .then(application => response.status(201).json(application))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new ApplicationsController();