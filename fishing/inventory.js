module.exports = {
  name: 'inventory',
  permission: 1,
  main: async function (bot, msg) {
    bot.config = require('../config.json');
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();

      let fishing = await bot.fishing.get(target.id);

      var a = fishing.trash
      var b = fishing.fish1
      var c = fishing.fish2
      var d = fishing.crabs
      var e = fishing.crocodiles
      var f = fishing.whales
      var g = fishing.dolphins
      var h = fishing.blowfish
      var i = fishing.squid
      var j = fishing.sharks
      var total = a*3 + b*20 + c*30 + d*500 + e*500 + f*750 + g*750 + h*500 + i*1000 + j*1000;
      msg.channel.send({
        embed:
        {
          color: 0x4e86f7,
          footer: {
            icon_url: msg.guild.iconURL(),
            text: bot.config.lastUpdateDate
          },
          author: {
            name: "Fishing Inventory for " + target.username,
            icon_url: target.avatarURL()
          },
          fields: [
            {
              name: "Fish:",
              value: `Trash: **` + fishing.trash + `**\nCommon Fish: **` + fishing.fish1 + `**\nRare Fish: **` + fishing.fish2 + `**\nCrabs: **` + fishing.crabs + `**\nCrocodiles: **` + fishing.crocodiles + `**\nWhales: **` + fishing.whales + `**\nDolphins: **` + fishing.dolphins + `**\nBlowfish: **` + fishing.blowfish + `**\nSquid: **` + fishing.squid + `**\nSharks: **` + fishing.sharks + `**`
            },
            {
              name: "Total Value:",
              value: `**$` + total.toFixed(2) + `**`
            }
          ]
        }
      });
    } else if (msg.mentions.users.first() == null) {
      let fishing = await bot.fishing.get(msg.author.id);

      var a = fishing.trash
      var b = fishing.fish1
      var c = fishing.fish2
      var d = fishing.crabs
      var e = fishing.crocodiles
      var f = fishing.whales
      var g = fishing.dolphins
      var h = fishing.blowfish
      var i = fishing.squid
      var j = fishing.sharks
      var total = a*3 + b*20 + c*30 + d*500 + e*500 + f*750 + g*750 + h*500 + i*1000 + j*1000;
      msg.channel.send({
        embed:
        {
          color: 0x4e86f7,
          footer: {
            icon_url: msg.guild.iconURL(),
            text: bot.config.lastUpdateDate
          },
          author: {
            name: "Fishing Inventory for " + msg.author.username,
            icon_url: msg.author.avatarURL()
          },
          fields: [
            {
              name: "Fish:",
              value: `Trash: **` + fishing.trash + `**\nCommon Fish: **` + fishing.fish1 + `**\nRare Fish: **` + fishing.fish2 + `**\nCrabs: **` + fishing.crabs + `**\nCrocodiles: **` + fishing.crocodiles + `**\nWhales: **` + fishing.whales + `**\nDolphins: **` + fishing.dolphins + `**\nBlowfish: **` + fishing.blowfish + `**\nSquid: **` + fishing.squid + `**\nSharks: **` + fishing.sharks + `**`
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