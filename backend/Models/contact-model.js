const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        // unique: true,
        required: true
    },
    message: {
        type: String,
        required: true
    }
});

const contact = mongoose.model('Contactdata', contactSchema);

module.exports = contact;