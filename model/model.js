require('dotenv').config();
const Sequlize = require('sequelize');

const sequelize = new Sequlize('postgres://postgres:parsaP1378@localhost:5433/postgres');


const User = sequelize.define('User', {
    firstName: {
        type: Sequlize.DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: Sequlize.DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: Sequlize.DataTypes.STRING,
        allowNull: false
    },
    code: {
        type: Sequlize.DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'Users'
});

module.exports = {
    User
};