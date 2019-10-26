module.exports = {
  name: 'orderall',
  permission: 1,
  main: async function (bot, msg) {
    let account = await bot.bank.get(msg.author.id);
    var amt = Math.floor(account.balance / 17)
    var cost = amt * 17

    if (account && account.balance >= 17) {
      account.balance -= 17 * amt;
      if (!account.items) account.items = { pancakes: 0 };
      account.items.pancakes += amt;
      msg.channel.send('🥞 | ' + msg.author.username + ', you have successfully ordered **' + amt + '** stack(s) of pancakes for **$' + cost + `**!`);
    } else if (account.balance < 17) {
      msg.channel.send('🥞 | ' + msg.author.username + ', you don\'t have enough money to order this!');
    } else {
      msg.reply('something went wrong! Please make sure you have a balance and have at least $17 in your name!')
    }
    await bot.bank.update(account);
  }
};