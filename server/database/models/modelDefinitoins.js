const mongoose = require("mongoose")
const { BookingSchema } = require("../schemas/BookingSchema");
const { RoomSchema } = require("../schemas/RoomSchema");
const { UserSchema } = require("../schemas/UserSchema");

const User = mongoose.model('user', UserSchema);
const Booking = mongoose.model('booking', BookingSchema);
const Room = mongoose.model('room', RoomSchema);

module.exports = {
    User,
    Booking,
    Room,
}