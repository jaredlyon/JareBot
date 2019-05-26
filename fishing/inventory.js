module.exports = {
    name: 'inventory',
    permission: 1,
    main: function (bot, msg) {
      if (msg.mentions.users.first()) {
        var target = msg.mentions.users.first();
        var a = bot.fishing[target.id].trash
        var b = bot.fishing[target.id].fish1
        var c = bot.fishing[target.id].fish2
        var d = bot.fishing[target.id].crabs
        var e = bot.fishing[target.id].crocodiles
        var f = bot.fishing[target.id].whales
        var g = bot.fishing[target.id].dolphins
        var h = bot.fishing[target.id].blowfish
        var i = bot.fishing[target.id].squid
        var j = bot.fishing[target.id].sharks
        var total = a*3 + b*8 + c*15 + d*50 + e*50 + f*75 + g*75 + h*50 + i*100 + j*100
        msg.channel.send({
          embed: 
          { color: 0x4e86f7,
            footer: {
              icon_url: msg.guild.iconURL,
              text: "since 5/26/2019" 
            },
            author: {
              name: "Fishing Inventory for " + target.username,
              icon_url: target.avatarURL
            },
            fields: [
              {
                name: "Fish:",
                value: `Trash: **` + bot.fishing[target.id].trash + `**\nCommon Fish: **` + bot.fishing[target.id].fish1 + `**\nRare Fish: **` + bot.fishing[target.id].fish2 + `**\nCrabs: **` + bot.fishing[target.id].crabs + `**\nCrocodiles: **` + bot.fishing[target.id].crocodiles + `**\nWhales: **` + bot.fishing[target.id].whales + `**\nDolphins: **` + bot.fishing[target.id].dolphins + `**\nBlowfish: **` + bot.fishing[target.id].blowfish + `**\nSquid: **` + bot.fishing[target.id].squid + `**\nSharks: **` + bot.fishing[target.id].sharks + `**`
              },
              {
                name: "Total Value:",
                value: `**$` + total.toFixed(2) + `**`
              }
            ]
          }
        });
      } else if (msg.mentions.users.first() == null) {
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
        var total = a*3 + b*8 + c*15 + d*50 + e*50 + f*75 + g*75 + h*50 + i*100 + j*100
        msg.channel.send({
          embed: 
          { color: 0x4e86f7,
            footer: {
              icon_url: msg.guild.iconURL,
              text: "since 5/26/2019" 
            },
            author: {
              name: "Fishing Inventory for " + msg.author.username,
              icon_url: msg.author.avatarURL
            },
            fields: [
              {
                name: "Fish:",
                value: `Trash: **` + bot.fishing[msg.author.id].trash + `**\nCommon Fish: **` + bot.fishing[msg.author.id].fish1 + `**\nRare Fish: **` + bot.fishing[msg.author.id].fish2 + `**\nCrabs: **` + bot.fishing[msg.author.id].crabs + `**\nCrocodiles: **` + bot.fishing[msg.author.id].crocodiles + `**\nWhales: **` + bot.fishing[msg.author.id].whales + `**\nDolphins: **` + bot.fishing[msg.author.id].dolphins + `**\nBlowfish: **` + bot.fishing[msg.author.id].blowfish + `**\nSquid: **` + bot.fishing[msg.author.id].squid + `**\nSharks: **` + bot.fishing[msg.author.id].sharks + `**`
              },
              {
                name: "Total Value:",
                value: `**$` + total.toFixed(2) + `**`
              }
            ]
          }
        });
      } else {
        msg.reply("something went wrong!")
      }
    }
}