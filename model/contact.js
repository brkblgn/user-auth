const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    address: {
        street: { type: String },
        town: { type: String },
        city: { type: String },
        country: { type: String },
    },
    jobPosition: { type: String },
    phone: { type: String },
    mobile: {type: String },
    website: {type: String },
    taxID: { type: String },
    contactType: {
        type: String,
        required: true,
        default: "person",
        enum:[ "person", "company" ]
    },
    parentID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contact'
    }

}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
