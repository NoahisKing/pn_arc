const { Client } = require("discord.js")

module.exports = {
  name: "ping",
  description: "Return Pong!",

  run: async(Arc, interaction, args) => {
    interaction.followUp({ content: "Pong!"})
  }
}