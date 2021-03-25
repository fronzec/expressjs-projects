import express from 'express';
import db from './src/db/todos'

// Setup our app
const app = express();
const port = 3000;

// Middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get('/api/todos', (req, res) => {
    res.status(200).send({
        success: 'true', message: 'todos retrieved successfully', todos: db
    })
});

app.listen(port, () => {
    console.log('Service started in port', port);
});
