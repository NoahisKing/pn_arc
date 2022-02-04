const {Discord,Collection,Client} = require('discord.js')
require(`dotenv`).config();
const TOKEN = process.env.TOKEN
const client = new Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] })

require('dotenv').config();

client.commands = new Collection();
client.slashCommands = new Collection();
client.events = new Collection();
module.exports = client
require('./Handlers/Handler')(client,Discord,client.commands)
client.login(TOKEN)

