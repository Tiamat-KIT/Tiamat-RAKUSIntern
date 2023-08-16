import {reactive} from "vue"
import { io } from "socket.io-client"

export const state = reactive({
    connected: false,
    messages: [] as string[]
})

const url = "http://localhost:5173"
const socket = io(url)

socket.on("connect",() => {
    state.connected = true
    socket.on("send",text => {
        state.messages.push(text)
        socket.emit("list",state.messages)
    })

})
socket.on("disconnect",() => state.connected = false)

export default socket