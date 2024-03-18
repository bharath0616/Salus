// models/EventLog.js
const mongoose = require('mongoose');

const eventLogSchema = new mongoose.Schema({
  eventId: { type: Number, unique: true, required: true },
  cameraId: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
  eventDetails: { type: String, required: true }
});

module.exports = mongoose.model('EventLog', eventLogSchema);
