// Create web server
// Create route for /comments
// Send back a response with some text
// Start server and test it out

// Load modules
const express = require('express');
const path = require('path');
const fs = require('fs');

// Create app
const app = express();

// Set up static assets
app.use(express.static(path.join(__dirname, 'public')));

// Create route for /comments
app.get('/comments', (req, res) => {
  // Read comments file
  fs.readFile('./data/comments.json', 'utf8', (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('Internal Server Error');
    } else {
      // Parse comments file
      const comments = JSON.parse(data);
      // Send back comments as JSON
      res.json(comments);
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});