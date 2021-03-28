const TaskController = require('../controllers/TodosController');

module.exports = (app) => {
    // Task resource
    app.post('/api/todos', TaskController.createTask);
    app.get('/api/todos', TaskController.readAll);

    // Create a catch-all route for testing the installation.
    app.all('*', (req, res) => res.status(200).send({
        message: 'Hello World!',
    }));
};
