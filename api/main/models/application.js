const {Model} = require('./model');

class Application extends Model {

    constructor() {

        super();

        this.table = "applications";

        this.primaryKey = "id";

        this.model = {
            id: "",
            name: "",
            description: "",
            serverID: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

module.exports = Application;