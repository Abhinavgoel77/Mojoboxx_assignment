const db = require('../db/db');
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');


// Route to schedule a cab
router.post('/schedule', auth,(req, res) => {
  const { pickupLocation, dropLocation, date, time } = req.body;
  console.log(pickupLocation, dropLocation, date, time);

  // Insert the cab scheduling details into the database
  db.query('INSERT INTO cab_schedule (pickup_location, drop_location, date, time) VALUES (?, ?, ?, ?)',
    [pickupLocation, dropLocation, date, time],
    (err, results) => {
      if (err) {
        console.error('Cab scheduling error:', err);
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: 'Cab scheduled successfully' });
      }
    }
  );
});

module.exports = router;
