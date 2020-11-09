var Discord = require('discord.js');

module.exports = {
    name: 'ban',
    permission: 2,
    main: async function (bot, msg) {
        var channel = msg.guild.channels.cache.get(bot.config.generalChannel);
        var log = msg.guild.channels.cache.get(bot.config.logChannel);
        const banee = msg.mentions.users.first();
        var reason = msg.content.split(' ').splice(1).join(' ');
        if (reason === '') {
            reason = 'No reason was specified.'
        };

        if (banee != null) {
            var ban = new Discord.MessageEmbed()
                .setAuthor(banee.username, banee.avatarURL())
                .addField('Member banned:', `**:hammer: ${banee.username}#${banee.discriminator} (${banee.id}) was banned from the server.**`)
                .addField('Reason:', reason)
                .setFooter(bot.user.username, bot.user.avatarURL())
                .setTimestamp()
                .setColor(3447003);

                await msg.guild.members.ban(banee);
                await channel.send({
                    embed: ban
                })
                await log.send({
                    embed: ban
                })
        } else {
            msg.reply("mention someone!")
        }
    }
};