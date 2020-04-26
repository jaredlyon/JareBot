module.exports = {
    name: "dbadd",
    permission: 2,
    main: async function(bot, msg) {
        var target = msg.mentions.users.array()[0];
        var selection = msg.content.split(' ').splice(1)[0];
        var amount = msg.content.split(' ').splice(2)[0];

        if (target != null) {
            let account = await bot.bank.get(target.id);
            let stats = await bot.stats.get(target.id);
            var channel = bot.channels.cache.get(bot.config.logChannel);
            if (selection == "money") {
                if (amount != null) {
                    account.balance += amount;
                    channel.send(msg.author.id + " added $" + amount + " to " + target.toString() + "'s account.");
                } else {
                    msg.reply("input amount, dummy!");
                }
            } else if (selection == "pancakes") {
                account.items.pancakes += amount;
                channel.send(msg.author.id + " added " + amount + " stack(s) of pancakes to " + target.toString() + "'s account.");
            } else {
                msg.reply("input amount, dummy!");
            }
        } else {
            msg.reply("mention someone, dummy!");
        }
    }
}