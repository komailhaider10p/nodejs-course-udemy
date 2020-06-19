const Sequelize = require('sequelize');
const sequelize = require('../util/database');

const Product = sequelize.define('product', {
  // attributes
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: Sequelize.STRING
    // allowNull defaults to true
  },
  price: {
    type: Sequelize.DOUBLE,
    // allowNull defaults to true
    allowNull: false
  }
});

module.exports = Product;