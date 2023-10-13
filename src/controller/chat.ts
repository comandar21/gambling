import Users from '../database/models/user'
import ChatBox from '../database/models/chat'
import { emit } from '../libraries/socket'

const chatWindow = async (orderId: any, userId: any) => {
    try {
        const checkChatWindow = await ChatBox.findOne({ where: { orderId: orderId } })
        if (!checkChatWindow) {
            const newChatWindow = {
                orderId: orderId,
                userId: userId
            }
            const chatBox = await ChatBox.create(newChatWindow)
            return chatBox
        }
        return checkChatWindow
    }
    catch (e) {
        return e
    }
}

export const addChat = async (data: any, userId: String,) => {
    const chat: any = await chatWindow(data.orderId, userId)
    let newOrderChat = {}
    if (data.type === 'text') {
        newOrderChat = {
            userId: userId,
            msg: data.msg,
            chatBoxId: chat.id,
            type: 'text'
        }
    }

}

export const getChats = async (req: any, res: any) => {
    try {
        const chatBox = await ChatBox.findOne({ where: { orderId: req.body.orderId } })
        if (chatBox) {

        }
        else {
            res.send({ message: 'no chat found' })
        }
    } catch (e) {
        res.send(e)
    }
}

// export const sendImage = async (req: any, res: any) => {
//     try {
//         const imageUrl = process.env.BASE_URL + req.file.filename
//         const userData = await Users.findOne({ where: { id: req.user.id } })
//         if (userData) {
//             const chat: any = await chatWindow(req.body.orderId, userData.id)
//             const newOrderChat = {
//                 userId: userData.id,
//                 imgUri: imageUrl,
//                 chatBoxId: chat.id,
//                 type: 'image'
//             }
//             await OrderChat.create(newOrderChat)
//             const allChats = await OrderChat.findAll({ where: { chatBoxId: chat.id } })
//             emit(`${req.body.orderId}:chat_bubble`, allChats)
//         }
//     } catch (e) {
//         console.log(e);

//     }
// }