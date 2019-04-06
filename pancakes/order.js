module.exports = {
  name: 'order',
  permission: 1,
  main: function(bot, msg) {
    if (msg.args[0] && !isNaN(msg.args[0]) && Number(msg.args[0]) >= 0) {
      amt = Number(msg.args[0]);
      if (bot.bank[msg.author.id].balance >= 17*amt && !(amt <= 0)) {
        bot.bank[msg.author.id].balance -= 17*amt;
        bot.bank[msg.author.id].items.pancakes += amt;
        msg.channel.send(`🥞 | ` + msg.author.username + `, you have successfully ordered **` + amt + `** stack(s) pancakes for **$` + 17*amt + `**!`);
      } else if (amt <= 0) {
        msg.reply("you can't place an order for that amount!")
        return;
      } else {
        msg.reply("something went wrong! Make sure you have the right usage: `j!buy [amount]` and that you have enough money!")
        return;
      }
    } else {
      amt = 1;
      if (bot.bank[msg.author.id].balance >= 17) {
        bot.bank[msg.author.id].balance -= 17;
        bot.bank[msg.author.id].items.pancakes += 1;
        msg.channel.send(`🥞 | ` + msg.author.username + `, you have successfully ordered **` + amt + `** stack(s) pancakes for **$` + 17*amt + `**!`);
      } else if (amt <= 0) {
        msg.reply("you can't place an order for that amount!")
        return;
      } else {
        msg.reply("something went wrong! Make sure you have the right usage: `j!buy [amount]` and that you have enough money!")
        return;
      }
    }
  }
}