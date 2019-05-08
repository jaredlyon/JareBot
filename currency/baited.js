module.exports = {
    name: "baited",
    permissiom: 1,
    main: async function (bot, msg) {
        var bait = Math.floor((Math.random() * 3));
        var account = await bot.bank.get(msg.author.id);

        if (account.balance == 0) {
            msg.channel.send('🎰 | ' + msg.author.username + `, you don't have any monies to gamble with...`);
        } else if (bait == 0) {
            account.balance *= 3;
            msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${account.balance.toFixed(2)}**!`);
        } else if (bait == 1 || 2) {
            account.balance = 0;
            msg.channel.send('🎰 | ' + msg.author.username + `, you got jebaited and lost **$` + account.balance.toFixed(2) + `**! You don't have any monies anymore...`);
        } else {
            msg.channel.send("Uh oh, something went wrong...")
        }

        await bot.bank.update(account);
    }
}