module.exports = {
    name: 'cast',
    permission: 1,
    main: async function (bot, msg) {
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);
        let fishing = await bot.fishing.get(msg.author.id);

        if (new Date() - new Date(fishing.lastFish) >= 7000 && account.balance.toFixed(2) >= 5) {
            var roll = Math.floor(Math.random() * 1008); //rolls number 0-1007

            if (roll <= 500) {
                var trashRoll = Math.floor(Math.random() * 4); //rolls number 0-3
                if (trashRoll == 0) {
                    var trashEmoji = ':volleyball:'
                } else if (trashRoll == 1) {
                    var trashEmoji = ':floppy_disk:'
                } else if (trashRoll == 2) {
                    var trashEmoji = ':paperclip:'
                } else if (trashRoll == 3) {
                    var trashEmoji = ':french_bread:'
                }

                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.trash += 1;
                stats.fishing.trash += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(trashEmoji + ' | You only caught some trash, ' + msg.author.username + '...')
            } else if (roll > 500 && roll <= 900) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.fish1 += 1;
                stats.fishing.fish1 += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':fish: | You caught a common fish, ' + msg.author.username + '!')
            } else if (roll > 900 && roll <= 1000) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.fish2 += 1;
                stats.fishing.fish2 += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':tropical_fish: | You caught a rare fish, ' + msg.author.username + '!')
            } else if (roll == 1001) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.crabs += 1;
                stats.fishing.crabs += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':crab: | You caught a crab, ' + msg.author.username + '!')
            } else if (roll == 1002) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.crocodiles += 1;
                stats.fishing.crocodiles += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':crocodile: | You caught a crocodile?! How did that even happen, ' + msg.author.username + '?')
            } else if (roll == 1003) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.whales += 1;
                stats.fishing.whales += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':whale2: | You caught a whale!! Is your line made of steel cable, ' + msg.author.username + '?')
            } else if (roll == 1004) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.dolphins += 1;
                stats.fishing.dolphins += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(`:dolphin: | You caught a dolphin, ` + msg.author.username + `!`)
            } else if (roll == 1005) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.blowfish += 1;
                stats.fishing.blowfish += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(':blowfish: | You caught a blowfish, ' + msg.author.username + '!')
            } else if (roll == 1006) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.squid += 1;
                stats.fishing.squid += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(`:squid: | You caught a squid, ` + msg.author.username + `!`)
            } else if (roll == 1007) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.sharks += 1;
                stats.fishing.sharks += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                await bot.fishing.update(fishing);
                await bot.stats.update(stats);
                await bot.bank.update(account);
                msg.channel.send(`:shark: | You caught a shark?! You should get signed for Shark Week, ` + msg.author.username + `!`)
            }
        } else if (new Date() - new Date(fishing.lastFish) <= 7000) {
            msg.reply("you can only fish every **seven** seconds!")
        } else if (account.balance.toFixed(2) <= 5) {
            var balance = Number(account.balance);
            var absbalance = Math.abs(balance);
            msg.reply(`it costs **$5** to cast! Your current balance is **$${absbalance.toFixed(2)}**!`)
        } else {
            msg.reply("uh oh, something went wrong!")
        }
    }
}