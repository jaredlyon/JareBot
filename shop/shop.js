module.exports = {
    name: "shop",
    permission: 1,
    main: async function(bot, msg) {
        var userSelection = msg.content.split(' ').splice(0)[0]; //buy?
        var userProduct = msg.content.split(' ').splice(1)[0]; //which item?
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);
        var channel = bot.channels.cache.get(bot.config.logChannel);

        if (userSelection == "buy") {
            if (userProduct == 1) {
                account.items.pancakes -= 1000;
                stats.pancakes.given += amt;
                await bot.bank.update(account);
                await bot.stats.update(stats);
                msg.reply("purchase successful!");
                channel.send(msg.author.id + " has purchased one month of nitro!");
            } else if (userProduct == 2) {
                msg.reply("this item is currently unavailable! Sorry...")
            } else {
                msg.reply("please indicate which item you would like to purchase!\n Usage: `j!shop buy [1]`")
            }
        } else if (userSelection == null) {
            var menu = new Discord.MessageEmbed()
                .setAuthor("Shop Inventory", msg.guild.iconURL())
                .addField('1. One Month of Discord Nitro Classic', `1000 pancakes`)
                .addField('2. One Year of Discord Nitro Classic', `Unavailable`)
                .setFooter(bot.user.username, bot.user.avatarURL())
            
            channel.send({embed: menu});
        } else {
            msg.reply("something went wrong!");
        }
    }
}