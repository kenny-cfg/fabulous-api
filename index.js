const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server really is now running on port ${port}`);
});