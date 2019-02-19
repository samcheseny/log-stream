const {Model} = require('./model');

class Stream extends Model {

    constructor() {

        super();

        this.table = "streams";

        this.primaryKey = "id";

        this.model = {
            id: "",
            name: "",
            description: "",
            apiEndpoint: "",
            accessConfiguration: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

//A stream has many log levels,
module.exports = Stream;