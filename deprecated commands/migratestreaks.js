module.exports = {
    name: 'migratestreaks',
    permission: 2,
    main: async function (bot, msg) {
        var bank = require('./bank.json');
        bot.users.forEach(async user => {
            let account = (await bot.bank.get(user.id)) || {};
            console.log(user.id + " - " + bank[user.id].streak);
            account.streak = bank[user.id].streak;
            await bot.bank.update(account);
            console.log("User migrated!");
        })
    }
}