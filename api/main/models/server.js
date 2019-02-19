const {Model} = require('./model');

class Server extends Model {

    constructor() {

        super();

        this.table = "servers";

        this.primaryKey = "id";

        this.model = {
            id: "",
            ip: "",
            port: "",
            username: "",
            password: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

module.exports = Server;