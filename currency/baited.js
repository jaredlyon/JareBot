module.exports = {
    name: "baited",
    permission: 1,
    main: async function (bot, msg) {
        var bait = Math.floor((Math.random() * 3));
        let account = await bot.bank.get(msg.author.id);
        var amt = account.balance;

        if (bot.blackjackInProgress.has(msg.author.id)) {
            msg.channel.send("You cannot bait while in a game of blackjack!");
        } else {
            if (account.balance == 0) {
                msg.channel.send('🎰 | ' + msg.author.username + `, you don't have any monies to gamble with...`);
            } else if (bait == 0) {
                account.balance *= 3;
                await bot.bank.update(account);
                msg.channel.send('🎰 | ' + msg.author.username + `, you have successfully TRIPLED your balance! You now have **$${account.balance.toFixed(2)}**!`);
            } else if (bait == 1 || 2) {
                account.balance = 0;
                await bot.bank.update(account);
                msg.channel.send('🎰 | ' + msg.author.username + `, you got jebaited and lost **$` + amt.toFixed(2) + `**! You don't have any monies anymore...`);
            } else {
                msg.channel.send("Uh oh, something went wrong...");
            }
        }
    }
}