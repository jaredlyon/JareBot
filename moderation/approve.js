var Discord = require('discord.js');

module.exports = {
    name: 'approve',
    permission: 1,
    main: async function (bot, msg) {
        const yup = bot.emojis.cache.find(emoji => emoji.name == "yup").toString();
        var channel = msg.guild.channels.cache.get(bot.config.welcomeChannel); //atrium for jarebot
        var log = msg.guild.channels.cache.get(bot.config.logChannel);  //logs the stuff
        const target = msg.mentions.members.first();
        
        //customer id: 399740949707882497
        //employee id: 691518209177944115

        if (msg.channel.id == bot.config.welcomeChannel) {
            if (target != null) {
                if (!target.roles.cache.some(role => role.id === '399740949707882497') && !target.roles.cache.some(role => role.id === '691518209177944115')) {
                    var logEmbed = new Discord.MessageEmbed()
                        .setAuthor(msg.author.username, msg.author.avatarURL())
                        .addField('Member approved:', yup + ` **${target.username.toString()}#${target.discriminator} (${target.id}) was approved.**`)
                        .setFooter(bot.user.username, bot.user.avatarURL())
                        .setTimestamp()
                        .setColor(3447003);

                    await target.roles.add('399740949707882497');
                    await channel.send({
                        embed: logEmbed
                    })
                    await log.send({
                        embed: logEmbed
                    })
                } else {
                    msg.reply('this user has already been approved!');
                }
            } else {
                msg.reply("mention the target! Usage: `j!approve [@user]`");
            }
        } else {
            msg.reply("wrong channel, dummy!");
        }
    }
}