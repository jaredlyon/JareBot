module.exports = {
  name: 'statistics',
  permission: 1,
  main: async function (bot, msg) {
    bot.config = require('../config.json');
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();
      let stats = await bot.stats.get(target.id);
      let account = await bot.bank.get(target.id);

      var one = Number(stats.dailies.profit.toFixed(2))
      var two = Number(stats.blackjack.net.toFixed(2))
      var three = Number(stats.baited.net.toFixed(2))
      var four = Number(stats.passive.total.toFixed(2))
      var five = Number(stats.fishing.net.toFixed(2))
      var x = Number(one + two + three + four + five)
      msg.channel.send({
        embed:
        {
          color: 0xffffff,
          footer: {
            icon_url: msg.guild.iconURL,
            text: bot.config.lastUpdateDate
          },
          author: {
            name: "Currency Statistics for " + target.username,
            icon_url: target.avatarURL()
          },
          fields: [
            {
              name: "Dailies:",
              value: `Collected: **` + stats.dailies.collected + `**\nTotal Income: **$` + stats.dailies.profit.toFixed(2) + `**`
            },
            {
              name: "Passive Income:",
              value: `Total Income: **$` + stats.passive.total.toFixed(2) + `**`
            },
            {
              name: "Fishing:",
              value: `Casts: **` + stats.fishing.casts + `**\nTotal Income: **$` + stats.fishing.net.toFixed(2) + `**`
            },
            {
              name: "Blackjack:",
              value: `Games Played: **` + stats.blackjack.games + `**\nGames Won: **` + stats.blackjack.won + `**\nGames Lost: **` + stats.blackjack.lost + `**\nGames Pushed: **` + (stats.blackjack.games - (stats.blackjack.won + stats.blackjack.lost)) + `**\nNet Winnings/Losses: **$` + stats.blackjack.net.toFixed(2) + `**`
            },
            {
              name: "Baits:",
              value: `Attempts: **` + stats.baited.attempts + `**\nSuccessful Attempts: **` + stats.baited.won + `**\nFailed Attempts: **` + stats.baited.lost + `**\nNet Winnings/Losses: **$` + stats.baited.net.toFixed(2) + `**`
            },
            {
              name: "Pancakes:",
              value: `Stacks Purchased: **` + stats.pancakes.bought + `**\nStacks Received: **` + stats.pancakes.received + `**\nStacks Donated: **` + stats.pancakes.given + `**\nTotal Stacks: **` + (stats.pancakes.bought + stats.pancakes.received - stats.pancakes.given) + `**`
            },
            {
              name: "Totals:",
              value: `Aggregate Revenue: **$` + x.toFixed(2) + `**\nAggregate Expenditures: **$` + (stats.pancakes.bought * 17).toFixed(2) + `**\nCurrent Balance: **$` + account.balance.toFixed(2) + `**`
            }
          ]
        }
      });
    } else if (msg.mentions.users.first() == null) {
      let account = await bot.bank.get(msg.author.id);
      let stats = await bot.stats.get(msg.author.id);

      var one = Number(stats.dailies.profit.toFixed(2))
      var two = Number(stats.blackjack.net.toFixed(2))
      var three = Number(stats.baited.net.toFixed(2))
      var four = Number(stats.passive.total.toFixed(2))
      var five = Number(stats.fishing.net.toFixed(2))
      var x = Number(one + two + three + four + five)
      msg.channel.send({
        embed:
        {
          color: 0xffffff,
          footer: {
            icon_url: msg.guild.iconURL(),
            text: bot.config.lastUpdateDate
          },
          author: {
            name: "Currency Statistics for " + msg.author.username,
            icon_url: msg.author.avatarURL()
          },
          fields: [
            {
              name: "Dailies:",
              value: `Collected: **` + stats.dailies.collected + `**\nTotal Income: **$` + stats.dailies.profit.toFixed(2) + `**`
            },
            {
              name: "Passive Income:",
              value: `Total Income: **$` + stats.passive.total.toFixed(2) + `**`
            },
            {
              name: "Fishing:",
              value: `Casts: **` + stats.fishing.casts + `**\nTotal Income: **$` + stats.fishing.net.toFixed(2) + `**`
            },
            {
              name: "Blackjack:",
              value: `Games Played: **` + stats.blackjack.games + `**\nGames Won: **` + stats.blackjack.won + `**\nGames Lost: **` + stats.blackjack.lost + `**\nGames Pushed: **` + (stats.blackjack.games - (stats.blackjack.won + stats.blackjack.lost)) + `**\nNet Winnings/Losses: **$` + stats.blackjack.net.toFixed(2) + `**`
            },
            {
              name: "Baits:",
              value: `Attempts: **` + stats.baited.attempts + `**\nSuccessful Attempts: **` + stats.baited.won + `**\nFailed Attempts: **` + stats.baited.lost + `**\nNet Winnings/Losses: **$` + stats.baited.net.toFixed(2) + `**`
            },
            {
              name: "Pancakes:",
              value: `Stacks Purchased: **` + stats.pancakes.bought + `**\nStacks Received: **` + stats.pancakes.received + `**\nStacks Donated: **` + stats.pancakes.given + `**\nTotal Stacks: **` + (stats.pancakes.bought + stats.pancakes.received - stats.pancakes.given) + `**`
            },
            {
              name: "Totals:",
              value: `Aggregate Revenue: **$` + x.toFixed(2) + `**\nAggregate Expenditures: **$` + (stats.pancakes.bought * 17).toFixed(2) + `**\nCurrent Balance: **$` + account.balance.toFixed(2) + `**`
            }
          ]
        }
      });
    } else {
      msg.reply("something went wrong!")
    }
  }
}