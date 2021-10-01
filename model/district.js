const mongoose = require('mongoose');

const districtSchema = new mongoose.Schema({
    name: { type: String, required: true },
    town: { type: String, required: true },
    city: { type: String, required: true },
    neighborhoods: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Neighborhood' }],
});

module.exports = mongoose.model('District', districtSchema);