const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static HTML
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, '0.0.0.0', () => {
  console.log(`DevOps profile running at http://0.0.0.0:${port}`);
});
