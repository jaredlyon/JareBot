module.exports = {
    name: "baited",
    permissiom: 1,
    main: async function (bot, msg) {
        var bait = Math.floor((Math.random() * 3));
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(target.id);
        var amt = account.balance;

        if (account.balance == 0) {
            msg.channel.send('🎰 | ' + msg.author.username + `, you don't have any monies to gamble with...`);
        } else if (bait == 0) {
            stats.baited.attempts += 1;
            stats.baited.won += 1;
            stats.baited.net += amt*2;
            account.balance *= 3;
            msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${account.balance.toFixed(2)}**!`);
        } else if (bait == 1 || 2) {
            stats.baited.attempts += 1;
            stats.baited.lost += 1;
            stats.baited.net -= amt;
            account.balance = 0;
            msg.channel.send('🎰 | ' + msg.author.username + `, you got jebaited and lost **$` + account.balance.toFixed(2) + `**! You don't have any monies anymore...`);
        } else {
            msg.channel.send("Uh oh, something went wrong...")
        }

        await bot.bank.update(account);
        await bot.stats.update(account);
    }
}