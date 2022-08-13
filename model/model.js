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
    }
});

//for test
const testDB = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = testDB;