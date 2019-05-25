module.exports = {
  name: 'balance',
  permission: 1,
  main: function(bot, msg) {
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();
      var tbalance = Number(bot.bank[target.id].balance);
      var tabsbalance = Math.abs(tbalance);
      msg.channel.send(`${target.username}'s balance is **$${tabsbalance.toFixed(2)}**!`);
    } else if (msg.mentions.users.first() == null) {
      var balance = Number(bot.bank[msg.author.id].balance);
      var absbalance = Math.abs(balance);
      msg.reply(`your balance is **$${absbalance.toFixed(2)}**!`);
    } else {
      msg.reply("something went wrong!")
    }
  }
};