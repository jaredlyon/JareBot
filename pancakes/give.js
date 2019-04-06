module.exports = {
    name: 'give',
    permission: 1,
    main: function (bot, msg) {
        const Discord = require('discord.js');
        const yup = bot.emojis.find(emoji => emoji.name == "yup");
        var recipient = msg.mentions.users.array()[0];
        var amt = Number(msg.content.split(' ').splice(1)[0]);

        if (recipient != null && amt != null && bot.bank[msg.author.id].items.pancakes.toFixed(0) >= amt && Number.isInteger(amt) && recipient.id != msg.author.id && recipient.id != bot.user.id) {
            bot.bank[msg.author.id].items.pancakes -= amt
            bot.bank[recipient.id].items.pancakes += amt
            msg.channel.send(yup + " | " + msg.author.username + ", you have transferred **" + amt + "** stack(s) of pancakes to " + recipient.username + "!")
            console.log(amt)
        } else {
            msg.reply("something went wrong! Make sure you have the right usage: `j!give [@user] [amount]` and that you have enough pancakes to give away!")
            console.log(amt)
        }
    }
};