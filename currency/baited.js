module.exports = {
    name: "baited",
    permissiom: 1,
    main: function (bot, msg) {
        var bait = Math.floor((Math.random() * 3));
        var amt = bot.bank[msg.author.id].balance

        if (bot.bank[msg.author.id].balance == 0) {
            msg.channel.send('🎰 | ' + msg.author.username + `, you don't have any monies to gamble with...`);
        } else if (bait == 0) {
            bot.bank[msg.author.id].balance *= 3;
            msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${bot.bank[msg.author.id].balance.toFixed(2)}**!`);
        } else if (bait == 1 || 2) {
            bot.bank[msg.author.id].balance -= amt;
            msg.channel.send('🎰 | ' + msg.author.username + `, you got jebaited and lost **$` + amt.toFixed(2) + `**! You don't have any monies anymore...`);
        } else {
            msg.channel.send("Uh oh, something went wrong...")
        }
    }
}