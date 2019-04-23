module.exports = {
  name: 'balance',
  permission: 1,
  main: function(bot, msg) {
    let balance = Number(bot.bank[msg.author.id].balance)
    let absbalance = Math.abs(balance)
    msg.reply(`your balance is **$${absbalance.toFixed(2)}**!`);
  }
};