var Discord = require('discord.js');

exports.run = async (bot, member) => {
    var channel = member.guild.channels.get(bot.config.logChannel);
    var join = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setFooter(member.guild.name)
        .setTimestamp()
        .setTitle('Member joined!')
        .setColor(3447003);

    channel.send({
        embed: join
    })

    
    await bot.bank.insert({
        id: member.user.id,
        balance: 0,
        lastMessage: null,
        items: {
            pancakes: 0,
            waffles: 0
        }
    })

    await bot.streaks.insert({
        id: member.user.id,
        lastDaily: null,
        streak: 0,
    })

    
    await bot.fishing.insert({
        id: member.user.id,
        lastFish: null, //date
        trash: 0, //:volleyball:, :floppy_disk:, :paperclip:, :french_bread:
        fish1: 0, //:fish:
        fish2: 0, //:tropical_fish:
        crabs: 0, //:crab:
        crocodiles: 0, //:crocodile:
        whales: 0, //:whale2:
        dolphins: 0, //:dolphin:
        blowfish: 0, //:blowfish:
        squid: 0, //:squid:
        sharks: 0 //:shark:
    })

    await bot.stats.insert({
        id: member.user.id,
        dailies: {
            collected: 0,
            profit: 0
        },
        passive: {
            total: 0,
        },
        blackjack: {
            games: 0,
            won: 0,
            lost: 0,
            net: 0
        },
        baited: {
            attempts: 0,
            won: 0,
            lost: 0,
            net: 0
        },
        fishing: {
            casts: 0,
            trash: 0, //5
            fish1: 0, //12
            fish2: 0, //15
            crabs: 0, //50
            crocodiles: 0, //50
            whales: 0, //75
            dolphins: 0, //75
            blowfish: 0, //50
            squid: 0, //100
            sharks: 0, //100
            net: 0
        },
        pancakes: {
            bought: 0,
            given: 0,
            received: 0
        }
    })
}