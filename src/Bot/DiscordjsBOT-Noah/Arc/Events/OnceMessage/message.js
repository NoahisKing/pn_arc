const client = require('../..');

require('dotenv').config();
const prefix = process.env.Prefix

client.on("message",message =>{
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) ||
        client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    try {
        command.execute(message, args, cmd, client);
    } catch (err) {
        
        console.log(err);
    }
})