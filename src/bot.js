const Discord = require("discord.js");
const logger = require("./logger");
const { getDiscordBotToken } = require("./validate-env");

const { aboutHandler } = require("./command-handlers/about");
const { helpHandler } = require("./command-handlers/help");

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
        // Don't process bot message
        if (message.author.bot) return;
        // Don't process message without correct prefix
        if (!message.content.startsWith(config.prefix)) return;

        const commandBody = message.content.slice(config.prefix.length);
        const args = commandBody.split(" ");
        const command = args.shift().toLowerCase();

        if (command === "help") {
          helpHandler(message);
        }
        if (command === "about") {
          aboutHandler(message);
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
