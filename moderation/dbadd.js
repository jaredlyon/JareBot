module.exports = {
    name: "dbadd",
    permission: 2,
    main: async function(bot, msg) {
        var target = msg.mentions.users.array()[0];
        var selection = msg.content.split(' ').splice(1)[0];
        var amount = Number(msg.content.split(' ').splice(2)[0]);

        if (target != null) {
            let account = await bot.bank.get(target.id);
            var channel = bot.channels.cache.get(bot.config.logChannel);
            if (selection == "money") {
                if (amount != null) {
                    account.balance += amount;
                    await bot.bank.update(account);
                    channel.send(msg.author.toString() + " added $" + amount + " to " + target.toString() + "'s account.");
                    msg.reply("success! Log generated.")
                } else {
                    msg.reply("input amount, dummy!");
                }
            } else if (selection == "pancakes") {
                account.items.pancakes += amount;
                await bot.bank.update(account);
                channel.send(msg.author.toString() + " added " + amount + " stack(s) of pancakes to " + target.toString() + "'s account.");
                msg.reply("success! Log generated.")
            } else {
                msg.reply("input amount, dummy!");
            }
        } else {
            msg.reply("mention someone, dummy!");
        }
    }
}