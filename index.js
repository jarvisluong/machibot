const { validateEnv } = require("./src/validate-env");
const { createBot } = require("./src/bot");

validateEnv();
const bot = createBot();

bot.startListening();
