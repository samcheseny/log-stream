const {Profile} = require('../models');
const utils = require('../utils');

class ProfilesController {

    getOne(request, response) {
        return new Profile().findOne(request.params.id)
            .then(profile => response.status(200).json(profile))
            .catch(error => response.status(400).send(error));
    }

    getAll(request, response) {
        return new Profile().findAll()
            .then(profiles => response.status(200).json(profiles))
            .catch(error => response.status(400).send(error));
    }

    create(request, response) {

        let profile = new Profile();

        let errors = {};

        let data = {
            id: utils.generateUUID(),
            userID: request.body.userID,
            profilePicture: request.body.profilePicture,
            active: true
        };

        if (data.id === "" || data.id === undefined || data.id === null) {
            errors["id"] = "ID is missing from the payload";
        }

        if (data.userID === "" || data.userID === undefined || data.userID === null) {
            errors["userID"] = "UserID is missing from the payload";
        }

        if (data.profilePicture === "" || data.profilePicture === undefined || data.profilePicture === null) {
            errors["profilePicture"] = "ProfilePicture is missing from the payload";
        }

        if (!utils.isObjectEmpty(errors)) {
            return response.status(422).send(errors);
        }

        return profile.save(data)
            .then(profile => response.status(201).json(profile))
            .catch(error => response.status(400).send(error));
    }

}

module.exports = new ProfilesController();