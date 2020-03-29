module.exports = {
    name: 'give',
    permission: 1,
    main: async function (bot, msg) {
        const Discord = require('discord.js');
        const yup = bot.emojis.cache.find(emoji => emoji.name == "yup").toString();
        var recipient = msg.mentions.users.array()[0];
        var amt = Number(msg.content.split(' ').splice(1)[0]);
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);

        if (recipient != null && amt != null && account.items.pancakes.toFixed(0) >= amt && Number.isInteger(amt) && recipient.id != msg.author.id && recipient.id != bot.user.id) {
            account.items.pancakes -= amt;
            stats.pancakes.given += amt;
            var recB = (await bot.bank.get(recipient.id));
            var recS = (await bot.stats.get(recipient.id));
            recB.items.pancakes += amt;
            recS.pancakes.received += amt;
            msg.channel.send(yup + " | " + msg.author.username + ", you have transferred **" + amt + "** stack(s) of pancakes to " + recipient.username + "!");

            await bot.bank.update(account);
            await bot.stats.update(stats);
            await bot.bank.update(recB);
            await bot.stats.update(recS);
        } else {
            msg.reply("something went wrong! Make sure you have the right usage: `j!give [@user] [amount]` and that you have enough pancakes to give away!");
        }
    }
};