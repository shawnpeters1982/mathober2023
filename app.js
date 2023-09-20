const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/sketches/:fileName', (req, res) => {
  const fileName = req.params.fileName;
  res.sendFile(path.join(__dirname, 'sketches', fileName));
});

// Define a route to render the index page
app.get('/sketch/:id', (req, res) => {
  const sketchId = req.params.id;
  

  // Check if the requested sketch JavaScript file exists
  
    // Render the index.ejs template with the sketchId
    res.render('index', { sketchId });
  
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
