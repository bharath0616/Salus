// routes/eventLogs.js
const express = require('express');
const router = express.Router();
const EventLog = require('../models/EventLog');

router.get('/eventLogs', async (req, res) => {
  try {
    const logs = await EventLog.find();
    res.json(logs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
