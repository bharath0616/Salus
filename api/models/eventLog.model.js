const mongoose = require('mongoose');

const eventLogSchema = new mongoose.Schema({
  eventId: { type: Number, unique: true, required: true },
  cameraId: { type: Number, required: true }, // Used as a primary key for synchronization
  address: { type: String, required: true }, // Displayed instead of camera ID
  timestamp: { type: Date, default: Date.now },
  eventDetails: { type: String, required: true }
});

module.exports = mongoose.model('EventLog', eventLogSchema);
