module.exports = {
    name: 'give',
    permission: 1,
    main: async function (bot, msg) {
        const Discord = require('discord.js');
        const yup = bot.emojis.find(emoji => emoji.name == "yup");
        var recipient = msg.mentions.users.array()[0];
        var amt = Number(msg.content.split(' ').splice(1)[0]);
        var account = await bot.bank.get(msg.author.id);

        if (recipient != null && amt != null && account.items.pancakes.toFixed(0) >= amt && Number.isInteger(amt) && recipient.id != msg.author.id && recipient.id != bot.user.id) {
            account.items.pancakes -= amt
            var rec = (await bot.bank.get(recipient.id));
            rec.items.pancakes += amt
            msg.channel.send(yup + " | " + msg.author.username + ", you have transferred **" + amt + "** stack(s) of pancakes to " + recipient.username + "!")

            await bot.bank.update(account)
            await bot.bank.update(rec);
        } else {
            msg.reply("something went wrong! Make sure you have the right usage: `j!give [@user] [amount]` and that you have enough pancakes to give away!")
        }
    }
};