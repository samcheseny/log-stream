const {Model} = require('./model');

class Log extends Model {

    constructor() {

        super();

        this.table = "logs";

        this.primaryKey = "id";

        this.model = {
            id: "",
            applicationID: "",
            logLevelID: "",
            logPath: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

module.exports = Log;