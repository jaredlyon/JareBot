module.exports = {
  name: 'order',
  permission: 1,
  main: function(bot, msg) {
    var amt = Number(msg.content.split(' ').splice(0)[0]);

    if (bot.bank[msg.author.id] && bot.bank[msg.author.id].balance >= 17) {
      bot.bank[msg.author.id].balance -= 17;
        bot.bank[msg.author.id].items.pancakes += 1;
        msg.channel.send('🥞 | ' + msg.author.username + ', you have successfully ordered one stack of pancakes for **$17**!');
    } else if (bot.bank[msg.author.id] && amt != null && bot.bank[msg.author.id].balance >= 17 * amt && Number.isInteger(amt)) {
      bot.bank[msg.author.id].balance -= 17 * amt;
        bot.bank[msg.author.id].items.pancakes += 1 * amt;
        msg.channel.send(`🥞 | ` + msg.author.username + `, you have successfully ordered **` + amt + `** stack(s) pancakes for **$` + 17 * amt + `**!`);
    } else {
      msg.reply("something went wrong! Make sure you have the right usage: `j!buy [amount]` and that you have enough money!")
    }
  }
};