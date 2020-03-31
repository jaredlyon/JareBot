module.exports = {
    name: "shop",
    permission: 2,
    main: function(bot, msg) {
        var userSelection = msg.content.split(' ').splice(0)[0]; //buy?
        var userProduct = msg.content.split(' ').splice(1)[0]; //which item?

        if (userSelection == "buy") {
            if (userProduct == 1) {
                //buy 1 month
            } else if (userProduct == 2) {
                //buy 1 year
            }
        } else if (userSelection == null) {
            var menu = new Discord.MessageEmbed()
                .setAuthor("Shop Inventory", msg.guild.iconURL())
                .addField('One Month of Discord Nitro Classic', `1 item(s) available!`)
                .setFooter(bot.user.username, bot.user.avatarURL())
            
            channel.send({embed: menu});
        } else {
            msg.reply("something went wrong!");
        }
    }
}