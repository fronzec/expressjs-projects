import {
    Model
} from 'sequelize';

export default (sequelize, DataTypes) => {
    class Task extends Model {

        toJSON() {
            return {...this.get()};
        }

        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    Task.init({
        title: DataTypes.STRING,
        description: DataTypes.STRING,
        status: {
            type: Sequelize.ENUM,
            values: ['DONE', 'PENDING']
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'Task',
    });
    return Task;
};
