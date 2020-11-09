module.exports = {
    name: 'dbinit',
    permission: 2,
    main: async function (bot, msg) {
        const target = msg.guild.id;
        //bank
        let funcB = async() => {
            bot.guilds.cache.get(target).members.cache.forEach(async member => {
                await bot.bank.insert({
                    id: member.user.id,
                    balance: 0,
                    lastMessage: null,
                    items: {
                        pancakes: 0,
                        waffles: 0
                    }
                })
            })
        }        
        funcB()
        
        //streaks
        let funcSt = async() => {
            bot.guilds.cache.get(target).members.cache.forEach(async member => {
                await bot.streaks.insert({
                    id: member.user.id,
                    lastDaily: null,
                    streak: 0
                })
            })
        }
        funcSt()

        //stats
        let funcS = async() => {
            bot.guilds.cache.get(target).members.cache.forEach(async member => {
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
            })
        }     
        funcS()

        //fishing
        let funcF = async() => {
            bot.guilds.cache.get(target).members.cache.forEach(async member => {
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
            })
        }   
        funcF()

        //reminders
        let funcR = async() => {
            bot.guilds.cache.get(target).members.cache.forEach(async member => {
                await bot.reminders.insert({
                    id: member.user.id,
                })
            })
        }   
        funcR()

        console.log("Accounts generated for all users!");
        msg.reply("accounts generated!")
    }
};