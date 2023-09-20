const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000;

app.use('/sketches', express.static(path.join(__dirname, 'sketches')));

app.get('/sketch/:id', (req, res) => {
  const sketchId = req.params.id;
  res.sendFile(path.join(__dirname, `sketches/sketch${sketchId}.js`));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});