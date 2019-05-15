module.exports = {
    name: "baited",
    permissiom: 1,
    main: function (bot, msg) {
        var bait = Math.floor((Math.random() * 3));
        var amt = bot.bank[msg.author.id].balance

        if (msg.author.id == '133350262420013056') {
            bot.stats[msg.author.id].baited.attempts += 1;
            bot.stats[msg.author.id].baited.won += 1;
            bot.stats[msg.author.id].baited.net += amt*3;
            bot.bank[msg.author.id].balance *= 3;
            msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${bot.bank[msg.author.id].balance.toFixed(2)}**!`);
        } else if (bot.bank[msg.author.id].balance == 0) {
            msg.channel.send('🎰 | ' + msg.author.username + `, you don't have any monies to gamble with...`);
        } else if (bait == 0) {
            bot.stats[msg.author.id].baited.attempts += 1;
            bot.stats[msg.author.id].baited.won += 1;
            bot.stats[msg.author.id].baited.net += amt*3;
            bot.bank[msg.author.id].balance *= 3;
            msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${bot.bank[msg.author.id].balance.toFixed(2)}**!`);
        } else if (bait == 1 || 2) {
            bot.stats[msg.author.id].baited.attempts += 1;
            bot.stats[msg.author.id].baited.lost += 1;
            bot.stats[msg.author.id].baited.net -= amt;
            bot.bank[msg.author.id].balance -= amt;
            msg.channel.send('🎰 | ' + msg.author.username + `, you got jebaited and lost **$` + amt.toFixed(2) + `**! You don't have any monies anymore...`);
        } else {
            msg.channel.send("Uh oh, something went wrong...")
        }
    }
}