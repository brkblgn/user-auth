const mongoose = require('mongoose');

const townSchema = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    districts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'District' }],
    geolocation: {
        lat: String,
        lon: String,
        polygons: [],
        bounding_box: []
    }
});

module.exports = mongoose.model('Town', townSchema);