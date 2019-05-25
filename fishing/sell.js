module.exports = {
    name: 'sell',
    permission: 1,
    main: function (bot, msg) {
        var x = msg.content.split(' ').splice(0)[0];

        if (x != null && x == 'trash') {
            var y = bot.fishing[msg.author.id].trash;

            bot.fishing[msg.author.id].trash = 0;
            bot.bank[msg.author.id].balance += 5*y;
            bot.stats[msg.author.id].fishing.net -= 5;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** trash for **$` + 5*y + `**!`)
        } else if (x != null && x == 'common') {
            var y = bot.fishing[msg.author.id].fish1;

            bot.fishing[msg.author.id].fish1 = 0;
            bot.bank[msg.author.id].balance += 12*y;
            bot.stats[msg.author.id].fishing.net += 2;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** common fish for **$` + 12*y + `**!`)
        } else if (x != null && x == 'rare') {
            var y = bot.fishing[msg.author.id].fish2;

            bot.fishing[msg.author.id].fish2 = 0;
            bot.bank[msg.author.id].balance += 15*y;
            bot.stats[msg.author.id].fishing.net += 5;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** rare fish for **$` + 15*y + `**!`)
        } else if (x != null && x == 'crabs') {
            var y = bot.fishing[msg.author.id].crabs;

            bot.fishing[msg.author.id].crabs = 0;
            bot.bank[msg.author.id].balance += 50*y;
            bot.stats[msg.author.id].fishing.net += 40;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crabs for **$` + 50*y + `**!`)
        } else if (x != null && x == 'crocodiles') {
            var y = bot.fishing[msg.author.id].crocodiles;

            bot.fishing[msg.author.id].crocodiles = 0;
            bot.bank[msg.author.id].balance += 50*y;
            bot.stats[msg.author.id].fishing.net += 40;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crocodiles for **$` + 50*y + `**!`)
        } else if (x != null && x == 'whales') {
            var y = bot.fishing[msg.author.id].whales;

            bot.fishing[msg.author.id].whales = 0;
            bot.bank[msg.author.id].balance += 75*y;
            bot.stats[msg.author.id].fishing.net += 65;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** whales for **$` + 75*y + `**!`)
        } else if (x != null && x == 'dolphins') {
            var y = bot.fishing[msg.author.id].dolphins;

            bot.fishing[msg.author.id].dolphins = 0;
            bot.bank[msg.author.id].balance += 75*y;
            bot.stats[msg.author.id].fishing.net += 65;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** dolphins for **$` + 75*y + `**!`)
        } else if (x != null && x == 'blowfish') {
            var y = bot.fishing[msg.author.id].blowfish;

            bot.fishing[msg.author.id].blowfish = 0;
            bot.bank[msg.author.id].balance += 50*y;
            bot.stats[msg.author.id].fishing.net += 40;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** blowfish for **$` + 50*y + `**!`)
        } else if (x != null && x == 'squid') {
            var y = bot.fishing[msg.author.id].squid;

            bot.fishing[msg.author.id].squid = 0;
            bot.bank[msg.author.id].balance += 100*y;
            bot.stats[msg.author.id].fishing.net += 90;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** squid for **$` + 100*y + `**!`)
        } else if (x != null && x == 'sharks') {
            var y = bot.fishing[msg.author.id].sharks;

            bot.fishing[msg.author.id].sharks = 0;
            bot.bank[msg.author.id].balance += 100*y;
            bot.stats[msg.author.id].fishing.net += 90;
            msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** sharks for **$` + 100*y + `**!`)
        } else if (x != null && x == 'all') {
            var a = bot.fishing[msg.author.id].trash
            var b = bot.fishing[msg.author.id].fish1
            var c = bot.fishing[msg.author.id].fish2
            var d = bot.fishing[msg.author.id].crabs
            var e = bot.fishing[msg.author.id].crocodiles
            var f = bot.fishing[msg.author.id].whales
            var g = bot.fishing[msg.author.id].dolphins
            var h = bot.fishing[msg.author.id].blowfish
            var i = bot.fishing[msg.author.id].squid
            var j = bot.fishing[msg.author.id].sharks

            var z = a*5 + b*12 + c*15 + d*50 + e*50 + f*75 + g*75 + h*50 + i*100 + j*100;
            bot.bank[msg.author.id].balance += z;

            var u = b*2 + c*5 + d*40 + e*40 + f*65 + g*65 + h*40 + i*90 + j*90 - a*5;
            bot.stats[msg.author.id].fishing.net += u;

            bot.fishing[msg.author.id].trash = 0;
            bot.fishing[msg.author.id].fish1 = 0;
            bot.fishing[msg.author.id].fish2 = 0;
            bot.fishing[msg.author.id].crabs = 0;
            bot.fishing[msg.author.id].crocodiles = 0;
            bot.fishing[msg.author.id].whales = 0;
            bot.fishing[msg.author.id].dolphins = 0;
            bot.fishing[msg.author.id].blowfish = 0;
            bot.fishing[msg.author.id].squid = 0;
            bot.fishing[msg.author.id].sharks = 0;

            msg.channel.send(`:moneybag: | You sold your entire inventory for **$` + z + `**!`)
        } else {
            msg.send('something went wrong! Be sure to specify if which part of your inventory you intend to sell: **trash**, **common**, **rare**, **crabs**, **crocodiles**, **whales**, **dolphins**, **blowfish**, **squid**, **sharks**, **all**.')
        }
    }
}