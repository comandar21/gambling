import { Server } from 'http'
import { Server as IOServer } from 'socket.io'
import { addChat } from '../controller/chat'
// import { transferFunds } from '../controller/user'
import Users from '../database/models/user'
const jwt = require('jsonwebtoken')

export let io: IOServer
let accessTokenSecret = 'gambling-bet'
export const init = (s: Server) => {

    io = new IOServer(s, {
        serveClient: false,

        // below are engine.IO options
        pingInterval: 10000,
        pingTimeout: 9000,
        cookie: false
    })

    io.sockets.on('connection', async (socket) => {
        const token = socket.handshake.query.token
        jwt.verify(token, accessTokenSecret, async (err: any, uid: any) => {
            const user = await Users.findOne({ where: { id: uid.id } })
            socket.on('new_comment', async (data: any) => {
                const chat = await addChat(data, user.id)
                io.emit(`${data.orderId}:chat_bubble`, chat)
            })

        })
    })
    return io
}


export const getIO = () => io
export const emit = async (label: string, data: any) => {
    if (io) io.sockets.emit(label, data)
}