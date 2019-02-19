const {Model} = require('./model');

class LogLevel extends Model {

    constructor() {

        super();

        this.table = "logLevels";

        this.primaryKey = "id";

        this.model = {
            id: "",
            level: "",
            description: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

module.exports = LogLevel;