module.exports = {
    name: 'ping',
    description: "Return Pong!",
    execute(message) {
        message.channel.send("Pong!")
    }
}