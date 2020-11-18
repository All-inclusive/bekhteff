const { Model, Sequelize } = require('sequelize');
const sequelize = require('../Database/Config.js')
class Products extends Model {}
Products.init({
 name:Sequelize.STRING,
 oldPrice:Sequelize.INTEGER,
 newPrice:Sequelize.INTEGER,
 description:Sequelize.STRING,
 category:Sequelize.STRING,
 image:Sequelize.STRING,
 ownerId:Sequelize.INTEGER,
 expireddate:Sequelize.DATE,
 creationDate:Sequelize.DATE,
 device:Sequelize.STRING,
 humanKind:Sequelize.STRING,
 type:Sequelize.STRING,
}, { sequelize, modelName: 'products' });

module.exports = Products;