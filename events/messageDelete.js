var Discord = require('discord.js');

exports.run = (bot, messageDelete) => {
    if (!messageDelete.author.bot) {
        messageDelete.guild.channels.get("438161676517244959").send(`The message: "${messageDelete.content || "(no content)"}" by **${messageDelete.author.tag}** was deleted.`)
    } else {
        return;
    }
}