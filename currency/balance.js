module.exports = {
  name: 'balance',
  permission: 1,
  main: function(bot, msg) {
    msg.reply(`your balance is **$${bot.bank[msg.author.id].balance.toFixed(2)}**!`);
  }
};