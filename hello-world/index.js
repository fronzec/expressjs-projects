const express = require('express');
const app = express();
const port = 3000;

// We define a basic route / usually called root URL. Other paths will respond with 404
app.get('/', (req, res) => {
    console.debug("[ROOT]:: Incoming request");
    res.send('Hello World from ExpressJs!');
});

// Start a server and listens on port 3000 for connections
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
