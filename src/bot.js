const Discord = require("discord.js");
const logger = require("./logger");
const { getDiscordBotToken } = require("./validate-env");

const config = require("../config.json");

function createBot() {
  const client = new Discord.Client();
  /**
   * The ready event is vital, it means that only _after_ this will your bot start reacting to information
   * received from Discord
   */
  client.on("ready", () => {
    logger.log({
      level: "info",
      message: "Machibot is ready for mission!",
    });
  });
  return {
    startListening() {
      // Create an event listener for messages
      client.on("message", (message) => {
        if (message.content[0] === config.prefix) {
          message.channel.send("OK!");
        }
      });

      // Log our bot in using the token from https://discordapp.com/developers/applications/me
      client.login(getDiscordBotToken());
    },
  };
}

module.exports = {
  createBot,
};
