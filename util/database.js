const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', '@ankit123#', {
  dialect: 'mysql',
  host: 'localhost',
  port:3306
});

module.exports = sequelize;
