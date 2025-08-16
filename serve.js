const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 1000;

// Serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve assets if needed
app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.listen(PORT, () => {
  console.log(`🚀 THUGKEED TECH Web Service running on port ${PORT}`);
});
