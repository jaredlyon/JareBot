module.exports = {
  name: 'leaderboard',
  permission: 1,
  main: async function (bot, msg) {
    var x = msg.content.split(' ').splice(0)[0];

    if (x != null && x == "pancakes") {
      var Discord = require('discord.js');
      let topEighteen = await bot.bank
        .orderBy(bot.r.desc(bot.r.row('items')('pancakes')))
        .limit(18);

      var lb = new Discord.MessageEmbed()
        .setColor(msg.guild.me.displayHexColor)
        .setTitle('🥞 Pancakes Leaderboard 🥞')
        .setFooter(msg.guild.name, msg.guild.iconURL());

      let i = 1;
      topEighteen.forEach(user => {
        lb.addField(`${i}: ${bot.users.get(user.id)
          ? bot.users.get(user.id).username
          : "User Left Server"}`, user.items ? user.items.pancakes : 0, true);
        i++;
      });
      msg.channel.send({ embed: lb });
    } else if (x != null && x == "currency") {
      var Discord = require('discord.js');
      let topEighteen = await bot.bank
        .orderBy(bot.r.desc(bot.r.row('balance')))
        .limit(18);

      var lb = new Discord.MessageEmbed()
        .setColor(msg.guild.me.displayHexColor)
        .setTitle('💰 Currency Leaderboard 💰')
        .setFooter(msg.guild.name, msg.guild.iconURL());

      let i = 1;
      topEighteen.forEach(user => {
        lb.addField(`${i}: ${bot.users.get(user.id)
          ? bot.users.get(user.id).username
          : "User Left Server"}`, user ? user.balance.toFixed(2) : 0, true);
        i++;
      });
      msg.channel.send({ embed: lb });
    } else {
      var Discord = require('discord.js');
      let topEighteen = await bot.bank
        .orderBy(bot.r.desc(bot.r.row('items')('pancakes')))
        .limit(18);

      var lb = new Discord.MessageEmbed()
        .setColor(msg.guild.me.displayHexColor)
        .setTitle('🥞 Pancakes Leaderboard 🥞')
        .setFooter(msg.guild.name, msg.guild.iconURL());

      let i = 1;
      topEighteen.forEach(user => {
        lb.addField(`${i}: ${bot.users.get(user.id)
          ? bot.users.get(user.id).username
          : "User Left Server"}`, user.items ? user.items.pancakes : 0, true);
        i++;
      });
      msg.channel.send({ embed: lb });
    }
  }
};