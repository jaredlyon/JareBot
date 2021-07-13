var Discord = require('discord.js');

exports.run = (bot, messageDelete) => {
    if (!messageDelete.author.bot) {
        messageDelete.guild.channels.cache.get(bot.config.messageDeleteLog).send(`The message: "${messageDelete.content || "(no content)"}" by **${messageDelete.author.tag}** was deleted from **${messageDelete.channel}**.`)
    } else {
        return;
    }
}