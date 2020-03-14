module.exports = {
  name: 'daily',
  permission: 1,
  main: async function (bot, msg) {
    const yup = bot.emojis.find(emoji => emoji.name == "yup");
    const nope = bot.emojis.find(emoji => emoji.name == "nope");
    let account = (await bot.bank.get(msg.author.id)) || {};
    let stats = (await bot.stats.get(msg.author.id)) || {};
    let streaks = (await bot.streaks.get(msg.author.id)) || {};
    if (!stats.dailies) stats.dailies = {};

    if (!streaks.lastDaily) {
      stats.dailies.collected += 1;
      stats.dailies.profit += 25.4;
      account.balance += 25.4;
      streaks.lastDaily = new Date();
      await bot.bank.update(account);
      await bot.stats.update(stats);
      await bot.streaks.update(streaks);
      msg.channel.send(yup + " | You have received your daily allowance of **$25.40**, " + msg.author.username + "!")
    } else if (new Date() - new Date(streaks.lastDaily) >= 86400000 && new Date() - new Date(streaks.lastDaily) <= 172800000) {
      streaks.streak += 1;
      account.balance += 25.4;
      await bot.streaks.update(streaks);
      account.balance += 2.54 * streaks.streak;
      stats.dailies.collected += 1;
      stats.dailies.profit += 25.4;
      stats.dailies.profit += 2.54 * streaks.streak;
      streaks.lastDaily = new Date();
      await bot.bank.update(account);
      await bot.stats.update(stats);
      await bot.streaks.update(streaks);
      msg.channel.send(yup + " | You have received your daily allowance of **$25.40**! You've also been given a bonus of **$" + (2.54 * streaks.streak).toFixed(2) + "** due to your **" + streaks.streak + "** day streak, " + msg.author.username + "!")
    } else if (new Date() - new Date(streaks.lastDaily) >= 86400000 && new Date() - new Date(streaks.lastDaily) >= 172800000 && streaks.streak >= 0) {
      streaks.streak = 0;
      account.balance += 25.4;
      stats.dailies.collected += 1;
      stats.dailies.profit += 25.4;
      streaks.lastDaily = new Date();
      await bot.bank.update(account);
      await bot.stats.update(stats);
      await bot.streaks.update(streaks);
      msg.channel.send(yup + " | You have received your daily allowance of **$25.40**, but you unfortunately have lost your streak, " + msg.author.username + "!")
    } else if (new Date() - new Date(streaks.lastDaily) >= 86400000 && new Date() - new Date(streaks.lastDaily) >= 172800000 && streaks.streak == 0) {
      account.balance += 25.4;
      stats.dailies.collected += 1;
      stats.dailies.profit += 25.4;
      streaks.lastDaily = new Date();
      await bot.bank.update(account);
      await bot.stats.update(stats);
      await bot.streaks.update(streaks);
      msg.channel.send(yup + " | You have received your daily allowance of **$25.40**, " + msg.author.username + "!")
    } else {
      msg.channel.send(nope + ` | Not so fast! You still have to wait **${convert(new Date(), new Date(streaks.lastDaily))}** to claim your daily allowance, ` + msg.author.username + `!`)
    }

    function convert(d1, d2) {
      // console.log(d1);
      // console.log(d2);
      var t1 = d1.getTime();
      var t2 = d2.getTime();
      var duration = 86400000 - (t1 - t2);

      var milliseconds = parseInt((duration % 1000) / 100),
        seconds = parseInt((duration / 1000) % 60),
        minutes = parseInt((duration / (1000 * 60)) % 60),
        hours = parseInt((duration / (1000 * 60 * 60)) % 24);

      hours = (hours < 10) ? "0" + hours : hours;
      minutes = (minutes < 10) ? "0" + minutes : minutes;
      seconds = (seconds < 10) ? "0" + seconds : seconds;

      return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
    }
  }
}