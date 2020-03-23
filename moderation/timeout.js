module.exports = {
    name: 'timeout',
    permission: 2,
    main: function (bot, msg) {
        const nope = bot.emojis.cache.find(emoji => emoji.name == "nope").toString();
        var time = Number(msg.content.split(' ').splice(0)[0]);; //get length argument in...seconds. yes, seconds.

        if (!isNaN(time)) {
            let targetRole = msg.guild.roles.cache.find(role => role.name == `• Customers`).id;
            let currentPermissionOverwrites = msg.channel.permissionOverwrites;

            msg.channel.updateOverwrite(targetRole, {SEND_MESSAGES: false}).then(
                msg.channel.send(nope + ` | **This channel has been timed out for ${time} seconds by ${msg.author}!**`).then(
                    msg2 => {
                        setTimeout(() => {
                            msg2.edit("**The timeout period has elapsed.**");
                            msg2.channel.updateOverwrite(targetRole, {SEND_MESSAGES: null});
                        }, time * 1000);
                    }
                )
            )
        } else {
            msg.reply("something went wrong!");
        }
    }
}