const model = require('../models');
const {Task} = model;

const STATUS_OK = 'DONE';
const STATUS_PENDING = 'PENDING';

module.exports = {
    async createTask(req, res) {
        const {title, description} = req.body;
        const status = STATUS_PENDING;
        try {
            const newTask = await Task.create({
                title,
                description,
                status,
            });
            // Return the created task
            return res.status(201).send(newTask);
        } catch (e) {
            console.log(e);
            return res.status(500)
                .send(
                    {message: 'Could not perform operation at this time, kindly try again later.'});
        }
    },
    async readAll(req, res) {
        try {
            const tasks = await Task.findAll();
            return res.status(200).send({tasks: tasks});
        } catch (e) {
            console.log(e);
            return res.status(500)
                .send(
                    {message: 'Could not perform operation at this time, kindly try again later.'});
        }
    }
}
