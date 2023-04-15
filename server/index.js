const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const port= 5000;
const app = express();

app.use(bodyParser.json());

// Enable CORS for all routes
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // replace * with your allowed domain
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// handle POST requests to /submit
app.post('/api/data', (req, res) => {
  // handle the request
  const attendanceData = req.body;
  console.log(attendanceData);
  res.send('Received attendance data');
});

// start the server
app.listen(port, () => {
  console.log('Server listening on port 5000');
});
