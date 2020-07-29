const { sequelize } = require("./models");

const password = "1F@ptoyournan";

module.exports = password;

mysql --version;
npx sequelize init;
mysql -u root -p;
npm i sequelize-cli sequelize mysql2;

crud_with_sequelize;
SELECT * FROM todos;
use crud_with_sequelize;

SELECT * FROM todos;

npx sequelize init;
npx sequelize init:migrations;
//Successfully created migrations folder at "/Users/macbookpro/code/local-classwork/intro-sequalize/migrations".

npx sequelize migration:generate --name <word>;
//New migration was created at...
npx sequelize db:migrate;
npx sequelize db:migrate:undo;

why:
rm -rf seeders
not make folder normal way for models 
when 
did t add the fnames mickey and alvi 