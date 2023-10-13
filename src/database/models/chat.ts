const { Sequelize } = require('sequelize')
const sequelize = require('../../database')

const ChatBox = sequelize.define('ChatBox', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    orderId: {
        type: Sequelize.STRING,
        allowNull: false,
    },
})

export default ChatBox