const {Stream} = require('../models');
const utils = require('../utils');

class StreamsController {

    getOne(request, response) {
        return new Stream().findOne(request.params.id)
            .then(stream => response.status(200).json(stream))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new Stream().findAll()
            .then(streams => response.status(200).json(streams))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let stream = new Stream();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            name: request.body.name,
            description: request.body.description,
            apiEndpoint: request.body.apiEndpoint,
            accessConfiguration: request.body.accessConfiguration,
            active: true
        };

        if (data.id === "" || data.id === undefined || data.id === null) {
            errors["id"] = "ID is missing from the payload";
        }

        if (data.name === "" || data.name === undefined || data.name === null) {
            errors["name"] = "Name is missing from the payload";
        }

        if (data.description === "" || data.description === undefined || data.description === null) {
            errors["description"] = "Description is missing from the payload";
        }

        if (data.apiEndpoint === "" || data.apiEndpoint === undefined || data.apiEndpoint === null) {
            errors["apiEndpoint"] = "APIEndpoint is missing from the payload";
        }

        if (data.accessConfiguration === "" || data.accessConfiguration === undefined || data.accessConfiguration === null) {
            errors["accessConfiguration"] = "AccessConfiguration is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return stream.save(data)
            .then(stream => response.status(201).json(stream))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new StreamsController();