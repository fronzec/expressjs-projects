import express from 'express';

//TODO move to a fixture or something similar
const todos = [
    {
        id: 1,
        description: "Awesome task",
        title: "lunch"
    }
];

// Setup our app
const app = express();
const port = 3000;

app.get('/api/todos', (req, res) => {
    res.status(200).send({
        success: 'true', message: 'todos retrieved successfully', todos: todos
    })
});

app.listen(port, () => {
    console.log('Service started in port', port);
});
