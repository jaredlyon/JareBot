module.exports = {
    name: 'slots',
    permission: 2,
    main: function(bot, msg) {
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);
        var bet = Number(msg.args[0]);

        var roll = Math.floor(Math.random() * 100); //rolls number 0-99

        if (roll > 25) {
            //lose all money
        } else if (roll <= 25 && roll >)
    }
}