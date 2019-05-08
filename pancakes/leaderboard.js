module.exports = {
  name: 'leaderboard',
  permission: 1,
  main: async function (bot, msg) {
    var Discord = require('discord.js');
    let topEighteen = await bot.bank
      .orderBy(bot.r.desc(bot.r.row('items')('pancakes')))
      .limit(18);

    var lb = new Discord.RichEmbed()
      .setColor(msg.guild.me.displayHexColor)
      .setTitle('🥞 Pancakes Leaderboard 🥞')
      .setFooter("© JL's Diner 2019", msg.guild.iconURL);

    let i = 1;
    topEighteen.forEach(user => {
      lb.addField(`${i}: ${bot.users.get(user.id)
        ? bot.users.get(user.id).username
        : "User Left Server"}`, user.items ? user.items.pancakes : 0, true);
      i++;
    });

    msg.channel.send({ embed: lb });
  }
};