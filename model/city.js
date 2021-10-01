const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    towns: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Town' }],
    geolocation: {
        lat: String,
        lon: String,
        polygons: [],
        bounding_box: []
    }
});

module.exports = mongoose.model('City', citySchema);