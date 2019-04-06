module.exports = {
  name: 'orderall',
  permission: 1,
  main: function(bot, msg) {
    var amt = Math.floor(bot.bank[msg.author.id].balance / 17)
    var cost = amt * 17

    if (bot.bank[msg.author.id] && bot.bank[msg.author.id].balance >= 17) {
      bot.bank[msg.author.id].balance -= 17 * amt;
      bot.bank[msg.author.id].items.pancakes += amt;
      msg.channel.send('🥞 | ' + msg.author.username + ', you have successfully ordered **' + amt + '** stack(s) of pancakes for **$' + cost + `**!`);
    } else if (bot.bank[msg.author.id].balance < 17) {
      msg.channel.send('🥞 | ' + msg.author.username + ', you don\'t have enough money to order this!');
    } else {
      msg.reply('something went wrong! Please make sure you have a balance and have at least $17 in your name!')
    }
  }
};