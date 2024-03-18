// models/EventLog.js
import mongoose from 'mongoose';


const reportSchema = new mongoose.Schema({
  eventId: { type: Number, unique: true, required: true },
  cameraId: { type: Number, required: true },
  address: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
  eventDetails: { type: String, required: true }
});


const Report = mongoose.model('Report',reportSchema);

export default Report; 