const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/auth', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Auth Service</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f2f2f2;
          text-align: center;
          padding-top: 50px;
        }
        h1 {
          color: #4CAF50;
        }
        .card {
          background: white;
          display: inline-block;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>🚀 Auth Service</h1>
        <p>Your authentication microservice is <strong>running</strong>!</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
