const express = require('express');
const dotenv = require('dotenv');

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
app.get('/', (req, res) => {
  // Way 1
  // res.sendStatus(400);
  // Way 2
  // res.status(400).json({ sucess: false });
  res.status(200).json({ success: true, data: { id: 1 } });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}.`
  );
});
