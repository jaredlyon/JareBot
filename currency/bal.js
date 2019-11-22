module.exports = {
    name: 'bal',
    permission: 1,
    main: async function (bot, msg) {
      if (msg.mentions.users.first()) {
        var target = msg.mentions.users.first();
        let account = (await bot.bank.get(target.id)) || {};
        if (account.balance >= 0) {
          msg.channel.send(target.username + `'s balance is **$${account.balance.toFixed(2)}**!`);
        } else {
          msg.channel.send(target.username + ` either does not have an account setup yet or is out of money!`);
        }
      } else if (msg.mentions.users.first() == null) {
        let account = (await bot.bank.get(msg.author.id)) || {};
        if (account.balance >= 0) {
          msg.reply(`your balance is **$${account.balance.toFixed(2)}**!`);
        } else {
          msg.reply("you either do not have an account setup yet or are out of money!");
        }
      }
    }
  };