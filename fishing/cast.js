module.exports = {
    name: 'cast',
    permission: 1,
    main: function (bot, msg) {
        if (new Date() - new Date(bot.fishing[msg.author.id].lastFish) >= 12000 && bot.bank[msg.author.id].balance >= 5) {
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

                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].trash += 1;
                bot.stats[msg.author.id].fishing.trash += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(trashEmoji + ' | You only caught some trash, ' + msg.author.username + '...')
            } else if (roll > 750 && roll <= 900) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].fish1 += 1;
                bot.stats[msg.author.id].fishing.fish1 += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':fish: | You caught a common fish, ' + msg.author.username + '!')
            } else if (roll > 900 && roll <= 1000) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].fish2 += 1;
                bot.stats[msg.author.id].fishing.fish2 += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':tropical_fish: | You caught a rare fish, ' + msg.author.username + '!')
            } else if (roll == 1001) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].crabs += 1;
                bot.stats[msg.author.id].fishing.crabs += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':crab: | You caught a crab, ' + msg.author.username + '!')
            } else if (roll == 1002) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].crocodiles += 1;
                bot.stats[msg.author.id].fishing.crocodiles += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':crocodile: | You caught a crocodile?! How did that even happen, ' + msg.author.username + '?')
            } else if (roll == 1003) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].whales += 1;
                bot.stats[msg.author.id].fishing.whales += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':whale2: | You caught a whale!! Is your line made of steel cable, ' + msg.author.username + '?')
            } else if (roll == 1004) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].dolphins += 1;
                bot.stats[msg.author.id].fishing.dolphins += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(`:dolphin: | You caught a dolphin, ` + msg.author.username + `!`)
            } else if (roll == 1005) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].blowfish += 1;
                bot.stats[msg.author.id].fishing.blowfish += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(':blowfish: | You caught a blowfish, ' + msg.author.username + '!')
            } else if (roll == 1006) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].squid += 1;
                bot.stats[msg.author.id].fishing.squid += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(`:squid: | You caught a squid, ` + msg.author.username + `!`)
            } else if (roll == 1007) {
                bot.fishing[msg.author.id].lastFish = new Date();
                bot.bank[msg.author.id].balance -= 5;
                bot.fishing[msg.author.id].sharks += 1;
                bot.stats[msg.author.id].fishing.sharks += 1;
                bot.stats[msg.author.id].fishing.casts += 1;
                msg.channel.send(`:shark: | You caught a shark?! You should get signed for Shark Week, ` + msg.author.username + `!`)
            }
        } else if (new Date() - new Date(bot.fishing[msg.author.id].lastFish) <= 12000) {
            msg.reply("you can only fish every **12** seconds!")
        } else if (bot.bank[msg.author.id].balance <= 5) {
            var balance = Number(bot.bank[msg.author.id].balance);
            var absbalance = Math.abs(balance);
            msg.reply(`it costs **$5** to cast! Your current balance is **$${absbalance.toFixed(2)}**!`)
        } else {
            msg.reply("uh oh, something went wrong!")
        }
    }
}