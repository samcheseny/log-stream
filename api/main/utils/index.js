const uuid = require('uuid/v4');

exports.getUniqueID = (length) => {

    let uid = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charsLength = chars.length;

    for (let i = 0; i < length; ++i) {
        uid += chars[getRandomInteger(0, charsLength - 1)];
    }

    return uid;
};

exports.generateUUID = () => uuid();

exports.isObjectEmpty = (object) => (Object.getOwnPropertyNames(object).length === 0);

function isEmpty(object) {

    for (let key in object) {

        if (object.hasOwnProperty(key)) {
            return false;
        }

    }

    return true;
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}