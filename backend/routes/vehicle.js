const express = require('express');
const router = express.Router();
const Vehicle = require('../models/vehicleModel');

// Route to update vehicle location
router.post('/update-location', async (req, res) => {
  const { vehicleId, lat, lng } = req.body;
  if (!vehicleId || lat == null || lng == null) return res.status(400).json({ message: 'Missing data' });

  try {
    let vehicle = await Vehicle.findOne({ vehicleId });
    if (!vehicle) {
      vehicle = new Vehicle({ vehicleId, location: { lat, lng } });
    } else {
      vehicle.location = { lat, lng };
      vehicle.lastUpdated = Date.now();
    }

    await vehicle.save();
    res.status(200).json({ message: 'Location updated' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

// Route to fetch all tracked vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).json(vehicles);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
});

module.exports = router;