const {Schema} = require("mongoose")

const UserSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
});

module.exports = {
    UserSchema
}