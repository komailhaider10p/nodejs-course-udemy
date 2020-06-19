const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize('udemycoursedb', 'user', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;