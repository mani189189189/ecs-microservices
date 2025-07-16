const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/auth', (req, res) => {
  res.send('Hello from Auth Service');
});

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});

