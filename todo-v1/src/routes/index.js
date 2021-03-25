import TaskController from '../controllers/TodosController'

export default (app) => {
    // POST allow create a task aka TODO
    app.post('/api/todos', TaskController.createTask);

// Create a catch-all route for testing the installation.
    app.all('*', (req, res) => res.status(200).send({
        message: 'Hello World!',
    }));
};
