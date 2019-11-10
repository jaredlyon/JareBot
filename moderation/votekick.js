module.exports = {
    name: 'votekick',
    permission: 1,
    main: function (bot, msg) {
        /** Need to add
         * Calculate votes needed
         * majority system
         * remove from voice
         * figure out what channels to embed into
         */


        var channel = ;
        var log = ;
        var target = msg.mentions.users.array()[0];
        var user = bot.users.get(target.id);
        var reason = msg.content.split(' ').splice(1).join(' ');
        if (reason === '') {
            reason = 'No reason was specified.'
        };
        var kick = new Discord.RichEmbed()
            .setAuthor(user.username, user.avatarURL)
            .addField('Member kicked:', ``)
            .addField('Reason:', reason)
            .setFooter(bot.user.username, bot.user.avatarURL)
            .setTimestamp()
            .setColor(3447003);

        if (msg.mentions.members) {
            msg.mentions.members.forEach(member => {
                member./*kick from voice*/.then(member => {
                    msg.reply(member + " has been banned!")

                    channel.send({
                        embed: kick
                    })
                    log.send({
                        embed: kick
                    })
                });
            })
        } else {
            msg.reply("mention someone!")
        }
    }
};