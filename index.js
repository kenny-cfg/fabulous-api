const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('You smell');
});

app.post('/create-user', (req, res) => {
  /*
  const { username } = req.body;
  */
  const username = req.body.username;
  // TODO: shove this user into the database
  res.json({
    message: 'You created a user',
    username: username,
  })
});

app.put('/update-user/:id', (req, res) => {
  const userId = req.params.id;
  res.json({
    message: 'You updated a user',
    userId: userId
  });
});

app.listen(port, () => {
  console.log(`Server really is now running on port ${port}`);
});