module.exports = {
  name: 'statistics',
  permission: 1,
  main: function (bot, msg) {
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();
      var one = Number(bot.stats[target.id].dailies.profit.toFixed(2))
      var two = Number(bot.stats[target.id].blackjack.net.toFixed(2))
      var three = Number(bot.stats[target.id].baited.net.toFixed(2))
      var four = Number(bot.stats[target.id].passive.total.toFixed(2))
      var five = Number(bot.stats[target.id].fishing.net.toFixed(2))
      var x = Number(one + two + three + four + five)
      msg.channel.send({
        embed: 
        { color: 0xffffff,
          footer: {
            icon_url: msg.guild.iconURL,
            text: "since 5/26/2019"
          },
          author: {
            name: "Currency Statistics for " + target.username,
            icon_url: target.avatarURL
          },
          fields: [
            {
              name: "Dailies:",
              value: `Collected: **` + bot.stats[target.id].dailies.collected + `**\nTotal Income: **$` + bot.stats[target.id].dailies.profit.toFixed(2) + `**`
            },
            {
              name: "Passive Income:",
              value: `Total Income: **$` + bot.stats[target.id].passive.total.toFixed(2) + `**`
            },
            {
              name: "Fishing:",
              value: `Casts: **` + bot.stats[target.id].fishing.casts + `**\nTotal Income: **$` + bot.stats[target.id].fishing.net.toFixed(2) + `**`
            },
            {
              name: "Blackjack:",
              value: `Games Played: **` + bot.stats[target.id].blackjack.games + `**\nGames Won: **` + bot.stats[target.id].blackjack.won + `**\nGames Lost: **` + bot.stats[target.id].blackjack.lost + `**\nNet Winnings/Losses: **$` + bot.stats[target.id].blackjack.net.toFixed(2) + `**`
            },
            {
              name: "Baits:",
              value: `Attempts: **` + bot.stats[target.id].baited.attempts + `**\nSuccessful Attempts: **` + bot.stats[target.id].baited.won + `**\nFailed Attempts: **` + bot.stats[target.id].baited.lost + `**\nNet Winnings/Losses: **$` + bot.stats[target.id].baited.net.toFixed(2) + `**`
            },
            {
              name: "Total:",
              value: `**$` + x.toFixed(2) + `**`
            }
          ]
        }
      });
    } else if (msg.mentions.users.first() == null) {
      var one = Number(bot.stats[msg.author.id].dailies.profit.toFixed(2))
      var two = Number(bot.stats[msg.author.id].blackjack.net.toFixed(2))
      var three = Number(bot.stats[msg.author.id].baited.net.toFixed(2))
      var four = Number(bot.stats[msg.author.id].passive.total.toFixed(2))
      var five = Number(bot.stats[msg.author.id].fishing.net.toFixed(2))
      var x = Number(one + two + three + four + five)
      msg.channel.send({
        embed: 
        { color: 0xffffff,
          footer: {
            icon_url: msg.guild.iconURL,
            text: "since 5/26/2019"
          },
          author: {
            name: "Currency Statistics for " + msg.author.username,
            icon_url: msg.author.avatarURL
          },
          fields: [
            {
              name: "Dailies:",
              value: `Collected: **` + bot.stats[msg.author.id].dailies.collected + `**\nTotal Income: **$` + bot.stats[msg.author.id].dailies.profit.toFixed(2) + `**`
            },
            {
              name: "Passive Income:",
              value: `Total Income: **$` + bot.stats[msg.author.id].passive.total.toFixed(2) + `**`
            },
            {
              name: "Fishing:",
              value: `Casts: **` + bot.stats[msg.author.id].fishing.casts + `**\nTotal Income: **$` + bot.stats[msg.author.id].fishing.net.toFixed(2) + `**`
            },
            {
              name: "Blackjack:",
              value: `Games Played: **` + bot.stats[msg.author.id].blackjack.games + `**\nGames Won: **` + bot.stats[msg.author.id].blackjack.won + `**\nGames Lost: **` + bot.stats[msg.author.id].blackjack.lost + `**\nNet Winnings/Losses: **$` + bot.stats[msg.author.id].blackjack.net.toFixed(2) + `**`
            },
            {
              name: "Baits:",
              value: `Attempts: **` + bot.stats[msg.author.id].baited.attempts + `**\nSuccessful Attempts: **` + bot.stats[msg.author.id].baited.won + `**\nFailed Attempts: **` + bot.stats[msg.author.id].baited.lost + `**\nNet Winnings/Losses: **$` + bot.stats[msg.author.id].baited.net.toFixed(2) + `**`
            },
            {
              name: "Total:",
              value: `**$` + x.toFixed(2) + `**`
            }
          ]
        }
      });
    } else {
      msg.reply("something went wrong!")
    }
  }
}