module.exports = {
  name: 'balance',
  permission: 1,
  main: async function (bot, msg) {
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();
      let account = (await bot.bank.get(target.id)) || {};
      if (account.balance) {
        msg.reply(`your balance is **$${account.balance.toFixed(2)}**!`);
      } else {
        msg.reply("you either do not have an account setup yet or are out of money!");
      }
    } else if (msg.mentions.users.first() == null) {
      let account = (await bot.bank.get(msg.author.id)) || {};
      if (account.balance) {
        msg.reply(`your balance is **$${account.balance.toFixed(2)}**!`);
      } else {
        msg.reply("you either do not have an account setup yet or are out of money!");
      }
    }
  }
};