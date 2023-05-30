const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Product = sequelize.define('sellerProduct', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  sellingPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  productName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  category: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports=Product;