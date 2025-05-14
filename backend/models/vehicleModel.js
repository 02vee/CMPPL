const vehicleSchema = new mongoose.Schema({
  vehicleId: { 
    type: String, 
    required: true, 
    unique: true 
  },
  location: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  tracking: {
    type: Boolean,
    default: true // Indicates if tracking is active
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
