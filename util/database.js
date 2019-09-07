const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'sequel568', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
