module.exports = {
  name: 'balance',
  permission: 1,
  main: function(bot, msg) {
    let balance = Number(bot.bank[msg.author.id].balance)
    msg.reply(`your balance is **$${balance.toFixed(2)}**!`);
  }
};