module.exports = {
    name: 'pancakes',
    permission: 1,
    main: function(bot, msg) {
      if (msg.mentions.users.first()) {
        var target = msg.mentions.users.first();
        var tpancakes = Number(bot.bank[target.id].items.pancakes);
        msg.channel.send(`${target.username} has **${tpancakes}** stack(s) of pancakes!`);
      } else if (msg.mentions.users.first() == null) {
        msg.reply(`you have **${bot.bank[msg.author.id].items.pancakes}** stack(s) of pancakes!`);
      } else {
        msg.reply("something went wrong!")
      }
    }
  };