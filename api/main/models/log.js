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

    async filter(data) {

        if (typeof data !== 'object') {
            throw TypeError("Data must be an object");
        }

        if (data === {}) {
            throw Error("Data cannot be empty");
        }

        let criteria = "";

        Object.entries(data)
            .forEach(([key, value]) => criteria += ` ${key} IN (${value.join(",")}) AND `);

        criteria = criteria.substring(0, criteria.lastIndexOf("AND"));

        let query = `SELECT * FROM ${this.table} WHERE ${criteria} `;

        try {

            let {rows} = await this.query(query);

            let data = [];

            rows.forEach(row => data.push(Object.assign(this.model, row)));

            return data;

        } catch (error) {
            throw Error(error);
        }
    }
}

module.exports = Log;