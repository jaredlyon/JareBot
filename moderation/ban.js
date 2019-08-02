var Discord = require('discord.js');

module.exports = {
    name: 'ban',
    permission: 2,
    main: function (bot, msg) {
        var channel = msg.guild.channels.get("399740385221672974");
        var log = msg.guild.channels.get("399743950568685571");
        var banee = msg.mentions.users.array()[0];
        var user = bot.users.get(banee.id);
        var reason = msg.content.split(' ').splice(1).join(' ');
        if (reason === '') {
            reason = 'No reason was specified.'
        };
        var ban = new Discord.RichEmbed()
            .setAuthor(user.username, user.avatarURL)
            .addField('Member banned:', `**:hammer: ${user.username}#${user.discriminator} (${user.id}) was banned from the server.**`)
            .addField('Reason:', reason)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp()
            .setColor(3447003);

        if (msg.mentions.members) {
            msg.mentions.members.forEach(member => {
                member.ban(0).then(member => {
                    msg.reply(member + " has been banned!")

                    channel.send({
                        embed: ban
                    })
                    log.send({
                        embed: ban
                    })
                });
            })
        } else {
            msg.reply("mention someone!")
        }
    }
};