const config = require("../../config.json");

const { prefix } = config;

module.exports = {
  helpHandler(message) {
    message.channel.send(`
${prefix}about - About this bot
${prefix}help - Show available commands
    `);
  },
};
