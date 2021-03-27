# TODO service

## Pending Issues
- When we run our app with docker-compose the app start faster than the database, we need a way to wait until the db is ready
- Find a way to load the environment variables from .env file when we run the dev npm script.
- Search if we could improve more the docker build e.g. install just one time all the dependencies
- Search if run the db migration on startup is the best way
- Search if we can remove babel, actually we are not using it by some issues

## Improvements
- Add unit testing

## Sequelize
We are using 
https://sequelize.org as ORM

- The `.sequelizerc` contains how to the folders for Sequelize will be organized. If don't exist everything will be placed in the root folder.
- After configuration file for Sequelize created we need to run a command to initialize Sequelize `npx sequelize init`
- Now we have our basic skeleton

### Migrations
- Create a model and migration `npx sequelize model:generate --name Task --attributes title:string,description:string,status:string`
- Run migrations: `npx sequelize db:migrate`
