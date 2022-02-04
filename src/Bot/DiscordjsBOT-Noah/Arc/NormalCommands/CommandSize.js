module.exports = {
    name: 'cmd',
    description: "Command size",
    execute(message, args, cmd, client, Discord, profileData) {
        message.channel.send(`Size is ${client.commands.size}`)//Return with The Bois Command Size
    }
}