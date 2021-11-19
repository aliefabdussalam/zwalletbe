const { DataTypes } = require("sequelize");
const connection = require("../config/db")


const Transaction = connection.define(
    "transaction",
    {
        amount: {
            type: DataTypes.INTEGER
        },
        balance: {
            type: DataTypes.INTEGER
        },
        type: {
            type: DataTypes.ENUM('transfer', 'topup')
        },
        note:{
            type: DataTypes.TEXT
        },
        sender:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        receiver:{
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    },
    {
        freezeTableName: true,
        timestamps: false
    }
);

module.exports = Transaction