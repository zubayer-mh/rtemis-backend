const {Schema} = require("mongoose")


const RoomSchema = new Schema({
    title: String,
    rent: String,
    facilities: Array,
    picture: String
});

module.exports = {
    RoomSchema
}