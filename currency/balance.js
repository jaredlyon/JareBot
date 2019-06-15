module.exports = {
  name: 'balance',
  permission: 1,
  main: async function (bot, msg) {
    let account = (await bot.bank.get(msg.author.id)) || {};
    if (account.balance) {
      msg.reply(`your balance is **$${account.balance.toFixed(2)}**!`);
    } else {
      msg.reply("you either do not have an account setup yet or are out of money!");
    }
  }
};