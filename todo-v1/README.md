# TODO service

## Sequelize
We are using 
https://sequelize.org as ORM

- The `.sequelizerc` contains how to the folders for Sequelize will be organized. If don't exist everything will be placed in the root folder.
- After configuration file for Sequelize created we need to run a command to initialize Sequelize `npx sequelize init`
- Now we have our basic skeleton

### Migrations
- Create a model and migration `npx sequelize model:generate --name Task --attributes title:string,description:string,status:string,created_at:date,updated_at:date`
- Run migrations: `npx db:migrate`
