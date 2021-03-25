const express = require ('express');
const route = require ('./routes');

// Setup our app
const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Route our app
route(app);

app.listen(port, () => {
    console.log('------>Service started in port', port);
});
