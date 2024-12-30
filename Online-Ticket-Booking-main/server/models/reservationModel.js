const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customerName: {
        type: String,
        required: true,
        trim: true,
    },
    customerEmail: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email address.'],
    },
    customerPhone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please provide a valid phone number with 10 digits.'],
    },
    numberOfGuests: {
        type: Number,
        required: true,
        min: [1, 'At least one guest is required.'],
    },
    reservationDate: {
        type: Date,
        required: true,
    },
    reservationTime: {
        type: String,
        required: true,
        match: [/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Please provide time in HH:mm format.'],
    },
    specialRequests: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Reservation', reservationSchema);
