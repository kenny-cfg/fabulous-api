const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('You smell');
});

app.post('/create-user', (req, res) => {
  res.send('Got a POST request');
});

app.listen(port, () => {
  console.log(`Server really is now running on port ${port}`);
});