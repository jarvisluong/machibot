const Discord = require("discord.js");
const logger = require("./logger");
const { getDiscordBotToken } = require("./validate-env");

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
        // If the message is "ping"
        if (message.content === "ping") {
          // Send "pong" to the same channel
          message.channel.send("pong");
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
