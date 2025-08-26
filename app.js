const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Hello Praveen Pandey. Welcome to Node.js with Express!'));
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`The app is now running on http://localhost:${port}`));