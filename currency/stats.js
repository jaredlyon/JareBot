module.exports = {
    name: 'stats',
    permission: 1,
    main: function (bot, msg) {
        var one = Number(bot.stats[msg.author.id].dailies.profit.toFixed(2))
        var two = Number(bot.stats[msg.author.id].blackjack.net.toFixed(2))
        var three = Number(bot.stats[msg.author.id].baited.net.toFixed(2))
        var total = Number(one + two + three)
        msg.channel.send({
          embed: 
          { color: 0xffffff,
            footer: {
              icon_url: msg.guild.iconURL,
              text: "since 5/14/2019" 
            },
            author: {
              name: "Currency Statistics for " + msg.author.username,
              icon_url: msg.author.avatarURL
            },
            fields: [
              {
                name: "Dailies:",
                value: `Collected: **` + bot.stats[msg.author.id].dailies.collected + `**\nTotal Profit: **$` + bot.stats[msg.author.id].dailies.profit.toFixed(2) + `**`
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
                value: `**$` + total.toFixed(2) + `**`
              }
            ]
          }
        });
    }
}