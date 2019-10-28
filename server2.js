const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// app.get('/', (req, res) => {
//   res.send('<h1>Hello from express</h1>');
// });

// If you want to send json data is better this way
// app.get('/', (req, res) => {
//   res.json({ name: 'Eduardo' });
// });

// You can send status directly
// app.get('/', (req, res) => {
//   // Way 1
//   // res.sendStatus(400);
//   // Way 2
//   // res.status(400).json({ sucess: false });
//   res.status(200).json({ success: true, data: { id: 1 } });
// });

// Middleware example
// const logger = (req, res, next) => {
//   console.log(
//     `Middleware ran: ${req.method} ${req.protocol}://${req.get('host')}${
//       req.originalUrl
//     }`
//   );
//   next();
// };

// Use logger middleware
app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  );
});
