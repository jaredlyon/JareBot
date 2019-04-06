module.exports = {
  name: 'leaderboard',
  permission: 1,
  main: function (bot, msg) {
    var Discord = require('discord.js'), bank = [];
    for (var val in bot.bank) {
      bot.bank[val].userID = val;
      bank.push(bot.bank[val])
    }
    bank.sort((a, b) => parseFloat(b.items.pancakes) - parseFloat(a.items.pancakes));

    var lb = new Discord.RichEmbed()
      .setColor(msg.guild.me.displayHexColor)
      .setTitle('🥞 Pancakes Leaderboard 🥞')
      .setFooter("© JL's Diner 2019", msg.guild.iconURL);

    for (var i = 0; i < 12; i++) {
    var bankee = bot.users.get(bank[i].userID)

      if (bankee == null) {
        bankee = 'User Left Server'
      } else {
        bankee = bot.users.get(bank[i].userID).username
      }

      lb.addField(`${i + 1}: ${bankee}`, bank[i].items.pancakes, true);
    }

    msg.channel.send({ embed: lb });
  }
};