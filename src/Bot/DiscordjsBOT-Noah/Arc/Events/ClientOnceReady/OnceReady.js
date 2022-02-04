const client = require("../../index");

client.on("ready",()=>{
    console.log(`${client.user.username} is Ready✅`)
    client.user.setActivity(`${client.guilds.cache.size} servers`, {
        type: "WATCHING"
      }); 
})