const model = require ('../models');

const {Task} = model;

const STATUS_OK = 'DONE';
const STATUS_PENDING = 'PENDING';

module.exports = {
    async createTask(req, res) {
        const {title, description} = req.body;
        const status = STATUS_PENDING;
        try {
            await Task.create({
                title,
                description,
                status,
            });
            return res.status(201).send({message: 'Task created successfully'});
        } catch (e) {
            console.log(e);
            return res.status(500)
                .send(
                    {message: 'Could not perform operation at this time, kindly try again later.'});
        }
    }
}
