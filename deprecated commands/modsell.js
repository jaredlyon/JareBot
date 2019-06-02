module.exports = {
    name: 'modsell',
    permission: 2,
    main: function(bot, msg) {
        bot.users.forEach(user => {
            if (!user.bot) {
                var a = bot.fishing[user.id].trash
                var b = bot.fishing[user.id].fish1
                var c = bot.fishing[user.id].fish2
                var d = bot.fishing[user.id].crabs
                var e = bot.fishing[user.id].crocodiles
                var f = bot.fishing[user.id].whales
                var g = bot.fishing[user.id].dolphins
                var h = bot.fishing[user.id].blowfish
                var i = bot.fishing[user.id].squid
                var j = bot.fishing[user.id].sharks
                console.log('Variables defined!')
        
                var z = a*3 + b*8 + c*15 + d*50 + e*50 + f*75 + g*75 + h*50 + i*100 + j*100;
                bot.bank[user.id].balance += z;
                console.log('Balances set!')
        
                var u = b*3 + c*10 + d*45 + e*45 + f*70 + g*70 + h*45 + i*95 + j*95 - a*2;
                bot.stats[user.id].fishing.net += u;
                console.log('Statistics set!')
        
                bot.fishing[user.id].trash = 0;
                bot.fishing[user.id].fish1 = 0;
                bot.fishing[user.id].fish2 = 0;
                bot.fishing[user.id].crabs = 0;
                bot.fishing[user.id].crocodiles = 0;
                bot.fishing[user.id].whales = 0;
                bot.fishing[user.id].dolphins = 0;
                bot.fishing[user.id].blowfish = 0;
                bot.fishing[user.id].squid = 0;
                bot.fishing[user.id].sharks = 0;
                console.log('Inventories reset!')
            }
        })
    }
};