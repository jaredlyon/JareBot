module.exports = {
    name: 'cast',
    permission: 1,
    main: async function (bot, msg) {
        let account = await bot.bank.get(msg.author.id);
        let stats = await bot.stats.get(msg.author.id);
        let fishing = await bot.fishing.get(msg.author.id);

        if (new Date() - new Date(fishing.lastFish) >= 12000 && account.balance.toFixed(2) >= 5) {
            var roll = Math.floor(Math.random() * 1008); //rolls number 0-1007

            if (roll <= 750) {
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
                msg.channel.send(trashEmoji + ' | You only caught some trash, ' + msg.author.username + '...')
                await bot.fishing.update({trash});
                await bot.stats.update({trash});
            } else if (roll > 750 && roll <= 900) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.fish1 += 1;
                stats.fishing.fish1 += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':fish: | You caught a common fish, ' + msg.author.username + '!')
                await bot.fishing.update({fish1});
                await bot.stats.update({fish1});
            } else if (roll > 900 && roll <= 1000) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.fish2 += 1;
                stats.fishing.fish2 += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':tropical_fish: | You caught a rare fish, ' + msg.author.username + '!')
                await bot.fishing.update({fish2});
                await bot.stats.update({fish2});
            } else if (roll == 1001) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.crabs += 1;
                stats.fishing.crabs += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':crab: | You caught a crab, ' + msg.author.username + '!')
                await bot.fishing.update({crabs});
                await bot.stats.update({crabs});
            } else if (roll == 1002) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.crocodiles += 1;
                stats.fishing.crocodiles += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':crocodile: | You caught a crocodile?! How did that even happen, ' + msg.author.username + '?')
                await bot.fishing.update({crocodiles});
                await bot.stats.update({crocodiles});
            } else if (roll == 1003) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.whales += 1;
                stats.fishing.whales += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':whale2: | You caught a whale!! Is your line made of steel cable, ' + msg.author.username + '?')
                await bot.fishing.update({whales});
                await bot.stats.update({whales});
            } else if (roll == 1004) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.dolphins += 1;
                stats.fishing.dolphins += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(`:dolphin: | You caught a dolphin, ` + msg.author.username + `!`)
                await bot.fishing.update({dolphins});
                await bot.stats.update({dolphins});
            } else if (roll == 1005) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.blowfish += 1;
                stats.fishing.blowfish += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(':blowfish: | You caught a blowfish, ' + msg.author.username + '!')
                await bot.fishing.update({blowfish});
                await bot.stats.update({blowfish});
            } else if (roll == 1006) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.squid += 1;
                stats.fishing.squid += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(`:squid: | You caught a squid, ` + msg.author.username + `!`)
                await bot.fishing.update({squid});
                await bot.stats.update({squid});
            } else if (roll == 1007) {
                fishing.lastFish = new Date();
                account.balance -= 5;
                fishing.sharks += 1;
                stats.fishing.sharks += 1;
                stats.fishing.casts += 1;
                stats.fishing.net -= 5;
                msg.channel.send(`:shark: | You caught a shark?! You should get signed for Shark Week, ` + msg.author.username + `!`)
                await bot.fishing.update({sharks});
                await bot.stats.update({sharks});
            }
        } else if (new Date() - new Date(fishing.lastFish) <= 12000) {
            msg.reply("you can only fish every **12** seconds!")
        } else if (account.balance.toFixed(2) <= 5) {
            var balance = Number(account.balance);
            var absbalance = Math.abs(balance);
            msg.reply(`it costs **$5** to cast! Your current balance is **$${absbalance.toFixed(2)}**!`)
        } else {
            msg.reply("uh oh, something went wrong!")
        }
    }
}