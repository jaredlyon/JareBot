module.exports = {
  name: 'pancakes',
  permission: 1,
  main: async function (bot, msg) {
    if (msg.mentions.users.first()) {
      var target = msg.mentions.users.first();
      let account = (await bot.bank.get(target.id)) || {};
      if (account.items.pancakes.toFixed(0) >= 0) {
        msg.channel.send(target.username + ` has **${account.items.pancakes.toFixed(0)}** stack(s) of pancakes!`);
      } else {
        msg.channel.send(target.username + ` either does not have an account setup yet or have no stacks!`);
      }
    } else if (msg.mentions.users.first() == null) {
      let account = (await bot.bank.get(msg.author.id)) || {};
      if (account.items.pancakes.toFixed(0) >= 0) {
        msg.reply(`you have **${account.items.pancakes ? account.items.pancakes.toFixed(0) : 0}** stack(s) of pancakes!`);
      } else {
        msg.reply("you either do not have an account setup yet or have no stacks!");
      }
    }
  }
};
