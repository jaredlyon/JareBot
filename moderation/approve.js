var Discord = require('discord.js');

module.exports = {
    name: 'approve',
    permission: 1,
    main: function (bot, msg) {
        const yup = bot.emojis.cache.find(emoji => emoji.name == "yup").toString();
        var channel = msg.guild.channels.cache.get(bot.config.welcomeChannel); //atrium for jarebot
        var log = msg.guild.channels.cache.get(bot.config.logChannel);  //logs the stuff
        var target = msg.mentions.users.array()[0]; //new person

        if (msg.channel.id == bot.config.welcomeChannel) {
            if (target != null) {
                if (!target.roles) {
                    var logEmbed = new Discord.MessageEmbed()
                        .setAuthor(msg.author.username, msg.author.avatarURL())
                        .addField('Member approved:', yup + ` **${target.username.toString()}#${target.discriminator} (${target.id}) was approved.**`)
                        .setFooter(bot.user.username, bot.user.avatarURL())
                        .setTimestamp()
                        .setColor(3447003);

                    msg.mentions.members.forEach(member => {
                        member.roles.add(msg.guild.roles.cache.find(role => role.name === "• Customers")).then(member => {
                            channel.send({
                                embed: logEmbed
                            })
                            log.send({
                                embed: logEmbed
                            })
                        });
                    })
                } else if (target.roles) {
                    msg.reply("user has already been approved!");
                } else {
                    msg.reply("something went wrong!");
                }
            } else {
                msg.reply("mention the target! Usage: `j!approve [@user]`");
            }
        } else {
            msg.reply("wrong channel, dummy!");
        }
    }
}