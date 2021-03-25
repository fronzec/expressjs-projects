# TODO service

## Sequelize
We are using 
https://sequelize.org as ORM

- The `.sequelizerc` contains how to the folders for Sequelize will be organized. If don't exist everything will be placed in the root folder.
- After configuration file for Sequelize created we need to run a command to initialize Sequelize `npx sequelize init`
- Now we have our basic skeleton

### Migrations
`npx sequelize model:generate --name User --attributes name:string,email:string,phone:string,password:string,status:string,last_login_at:date,last_ip_address:string`
