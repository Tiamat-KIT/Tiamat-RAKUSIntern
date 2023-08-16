<template>
    <ul id="messages">
        <li v-for="message in messages">{{ message }}</li>
    </ul>
    <input id="send-msg" type="text" autocomplete="off" v-model="textInput" />
    <button :click.prevent="sendMessage">Send</button>
</template>

<script lang="ts">
    import socket from "../socket"
    import Vue, { onMounted } from "vue"
    
    export default({
        data() {
            return {
                textInput: "",
                messages: []
            }
        },
        methods: {
            sendMessage(){
                console.log(this.textInput)
                socket.emit("send",this.textInput)
                this.textInput=""
            }
        },
        onMounted(){
            socket.on("list",list => {
                this.messages = list
            })
        }
    })
</script>