const mongoose = require('mongoose');

const neighborhoodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    district: { type: String, required: true },
    town: { type: String, required: true },
    city: { type: String, required: true },
    zip_code: { type: String, required: true }
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);