/**
 * Throws error if discord tokens are not present in the env var
 */

function validateEnv() {
  if (typeof process.env.BOT_TOKEN !== "string") {
    throw new Error(
      "Discord bot token is not found, please follow the instruction in README.md"
    );
  }
}
module.exports = {
  validateEnv,
  getDiscordBotToken() {
    validateEnv();
    return process.env.BOT_TOKEN;
  },
};
