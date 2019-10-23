module.exports = {
    name: 'genacc',
    permission: 2,
    main: async function (bot, msg) {
      if (msg.mentions.users.first()) {
        var target = msg.mentions.users.first();
        await bot.bank.insert({
            id: target.id,
            balance: 0,
            lastDaily: null,
            lastMessage: null,
            streak: 0,
            items: {
                pancakes: 0,
                waffles: 0
            }
        })
    
        
        await bot.fishing.insert({
            id: target.id,
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
            id: target.id,
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
                }
        })

        console.log("Account generated for " + target.id + "!");
        msg.reply("account generated!")
      } else if (msg.mentions.users.first() == null) {
        await bot.bank.insert({
            id: msg.author.id,
            balance: 0,
            lastDaily: null,
            lastMessage: null,
            streak: 0,
            items: {
                pancakes: 0,
                waffles: 0
            }
        })
    
        
        await bot.fishing.insert({
            id: msg.author.id,
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
            id: msg.author.id,
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
                }
        })

        console.log("Account generated for " + msg.author.id + "!");
        msg.reply("account generated!")
      }
    }
  };