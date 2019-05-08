module.exports = {
  name: 'balance',
  permission: 1,
  main: async function (bot, msg) {
    let dbUser = (await bot.bank.get(msg.author.id)) || {};
    if (dbUser.balance) {
      msg.reply(`your balance is **$${dbUser.balance.toFixed(2)}**!`);
    } else {
      msg.reply("you either do not have an account setup yet or are out of money!");
    }
  }
};