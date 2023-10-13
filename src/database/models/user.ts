const { Sequelize } = require('sequelize')
const sequelize = require('../../database')

export interface UserAttributes {
    id: string;
}

const Users = sequelize.define('Users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
})

export default Users