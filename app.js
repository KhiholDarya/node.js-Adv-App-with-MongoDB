const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const adsRoutes = require('./routes/ads');
const { logRequest } = require('./utils/logger');
const path = require('path');
const { format } = require('date-fns');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const CONNECTION_STRING = process.env.CONNECTION_STRING;

mongoose.connect(CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json());

app.use((req, res, next) => {
  if (process.argv.includes('debug')) {
    logRequest(req);
  }
  next();
});

app.get('/heartbeat', (req, res) => {
  const formattedDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  res.send(formattedDate);
});

app.use('/ads', adsRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.jpg'));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});