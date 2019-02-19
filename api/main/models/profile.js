const {Model} = require('./model');

class Profile extends Model {

    constructor() {

        super();

        this.table = "profiles";

        this.primaryKey = "id";

        this.model = {
            id: "",
            userID: "",
            profilePicture: "",
            active: false,
            createdAt: "",
            updatedAt: ""
        };

    }
}

module.exports = Profile;