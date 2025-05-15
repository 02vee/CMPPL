const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicleId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  location: {
    lat: { type: Number, required: true },  // Latitude
    lng: { type: Number, required: true },  // Longitude
  },
  tracking: {
    type: Boolean,
    default: true // Indicates if tracking is active
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
