const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 8000;
const userRoutes = require('./routes/user')
const cabBooking = require('./routes/booking')

app.use(cors());
// Middleware
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/cab',cabBooking);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
