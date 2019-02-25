const ApplicationsController = require('./applications-controller');
const LogsController = require('./logs-controller');
const LogLevelsController = require('./log-levels-controller');
const ProfilesController = require('./profiles-controller');
const ServersController = require('./servers-controller');
const StreamsController = require('./streams-controller');
const UsersController = require('./users-controller');
const OauthController = require('./oauth-controller');

module.exports = {
    ApplicationsController,
    LogsController,
    LogLevelsController,
    ProfilesController,
    ServersController,
    StreamsController,
    UsersController,
    OauthController
};