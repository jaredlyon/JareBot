module.exports = {
  name: 'order',
  permission: 1,
  main: async function (bot, msg) {
    let account = await bot.bank.get(msg.author.id);

    if (msg.args[0] && !isNaN(msg.args[0]) && Number(msg.args[0]) >= 0) {
      amt = Number(msg.args[0]);
      if (account.balance >= 17 * amt && !(amt <= 0)) {
        account.balance -= 17 * amt;
        account.items.pancakes += amt;
        msg.channel.send(`🥞 | ` + msg.author.username + `, you have successfully ordered **` + amt + `** stack(s) pancakes for **$` + 17 * amt + `**!`);
      } else if (amt <= 0) {
        msg.reply("you can't place an order for that amount!")
        return;
      } else {
        msg.reply("something went wrong! Make sure you have the right usage: `j!order [amount]` and that you have enough money!")
        return;
      }
    } else {
      amt = 1;
      if (account.balance >= 17) {
        account.balance -= 17;
        account.items.pancakes += 1;
        msg.channel.send(`🥞 | ` + msg.author.username + `, you have successfully ordered **` + amt + `** stack(s) pancakes for **$` + 17 * amt + `**!`);
      } else if (amt <= 0) {
        msg.reply("you can't place an order for that amount!")
        return;
      } else {
        msg.reply("something went wrong! Make sure you have the right usage: `j!order [amount]` and that you have enough money!")
        return;
      }
    }
    await bot.bank.update(account);
  }
}