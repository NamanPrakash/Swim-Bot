console.log("Started Swimming");
require('dotenv').config();
commands = require('./commands');
discord = require('discord.js')
bot = new discord.Client();
bot.login(process.env.TOKEN);
bot.on('ready', () => {
    console.log("Swimming Completed");
});

bot.on('message', commands)
