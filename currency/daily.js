module.exports = {
  name: 'daily',
  permission: 1,
  main: function (bot, msg) {
    const yup = bot.emojis.find("name", "yup");
	  const nope = bot.emojis.find("name", "nope");

    if (!bot.bank[msg.author.id].lastDaily) {
      bot.bank[msg.author.id].balance += 25.4;
      bot.bank[msg.author.id].lastDaily = new Date();
      msg.channel.send(yup + " | You have recieved your daily allowance of **$25.40**, " + msg.author.username + "!")
    } else if (new Date() - new Date(bot.bank[msg.author.id].lastDaily) >= 86400000 && new Date() - new Date(bot.bank[msg.author.id].lastDaily) <= 172800000) {
      bot.bank[msg.author.id].streak += 1;
      bot.bank[msg.author.id].balance += 25.4;
      bot.bank[msg.author.id].balance += 2.54 * bot.bank[msg.author.id].streak;
      bot.bank[msg.author.id].lastDaily = new Date();
      msg.channel.send(yup + " | You have recieved your daily allowance of **$25.40**! You've also been given a bonus of **$" + (2.54 * bot.bank[msg.author.id].streak).toFixed(2) + "** due to your **" + bot.bank[msg.author.id].streak + "** day streak, " + msg.author.username + "!")
    } else if (new Date() - new Date(bot.bank[msg.author.id].lastDaily) >= 86400000 && new Date() - new Date(bot.bank[msg.author.id].lastDaily) >= 172800000 && bot.bank[msg.author.id].streak >= 0) {
      bot.bank[msg.author.id].streak = 0;
      bot.bank[msg.author.id].balance += 25.4;
      bot.bank[msg.author.id].lastDaily = new Date();
      msg.channel.send(yup + " | You have recieved your daily allowance of **$25.40**, but you unfortunately have lost your streak, " + msg.author.username + "!")
    } else if (new Date() - new Date(bot.bank[msg.author.id].lastDaily) >= 86400000 && new Date() - new Date(bot.bank[msg.author.id].lastDaily) >= 172800000 && bot.bank[msg.author.id].streak == 0) {
      bot.bank[msg.author.id].balance += 25.4;
      bot.bank[msg.author.id].lastDaily = new Date();
      msg.channel.send(yup + " | You have recieved your daily allowance of **$25.40**, " + msg.author.username + "!")
    } else {
      msg.channel.send(nope + ` | Not so fast! You still have to wait **${convert(new Date(), new Date(bot.bank[msg.author.id].lastDaily))}** to claim your daily allowance, ` + msg.author.username + `!`)
    }

    function convert(d1, d2) {
      console.log(d1);
      console.log(d2);
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