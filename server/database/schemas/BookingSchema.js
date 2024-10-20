const { Schema } = require("mongoose");

const BookingSchema = new Schema({
    userID: String,
    roomID: String,
    dates: Array,
    isAdmin: Boolean
});

module.exports = {
    BookingSchema
}