function Log() {
    console.log("I am Ready")
}
const { Discord, Client } = require("discord.js")
const Arc = new Client({
    intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"],
});
function Ready() {
    Arc.on('ready', () => {
        console.log(`${Arc.user.username} is online✅`)
        Arc.user.setActivity(`${Arc.guilds.cache.size}`, {
            type: "WATCHING"
        })
    })
}
function pn_arcs() {
    require('../src/Bot/index')
}
function pn_start() {
    require('../src/NoahMake/noahmake')
}
module.exports = { Ready,Log, pn_arcs, pn_start }
