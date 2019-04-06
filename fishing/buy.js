module.exports = {
    name: 'buy',
    permission: 1,
    main: function(bot, msg) {
        var x = msg.content.split(' ').splice(0)[0];
        const yup = bot.emojis.find("name", "yup");
        const nope = bot.emojis.find("name", "nope");

        if (x == "rod") {
            if (bot.bank[msg.author.id].balance >= 59.99 && bot.fishing[msg.author.id].rod == null) {
                bot.bank[msg.author.id].balance -= 59.99;
                bot.bank[msg.author.id].rod == true;
                msg.channel.send(yup + ' | ' + msg.author.username + ', you have successfully purchased a fishing rod for **$59.99**!');
                bot.fishing[msg.author.id].lastFish = new Date();
            } else if (new Date() - new Date(bot.fishing[msg.author.id].lastFish) >= 10000) {
                msg.channel.send(nope + ' | ' + msg.author.username + `, slow down! The fishing database refreshes much slower than the bank, and you can only execute this command once every ten seconds!`);
            } else if (bot.bank[msg.author.id].balance <= 59.99 && bot.fishing[msg.author.id].rod == null) {
                msg.channel.send(nope + ' | ' + msg.author.username + `, you don't have enough money for this transaction!`);
            } else if (bot.fishing[msg.author.id].rod == true) {
                msg.channel.send(yup + ' | ' + msg.author.username + `, you already have a fishing rod!`);
            } else {
                msg.channel.send(`Uh oh, something went wrong!`);
            }
        } else if (x == "bait") {
            if (bot.bank[msg.author.id].balance >= 15) {
                bot.bank[msg.author.id].balance -= 15;
                bot.bank[msg.author.id].items.bait += 3;
                msg.channel.send(yup + ' | ' + msg.author.username + ', you have successfully purchased a can of bait!');
            } else if (bot.bank[msg.author.id].balance <= 15) {
                msg.channel.send(nope + ' | ' + msg.author.username + `, you don't have enough money for this transaction!`);
            } else {
                msg.channel.send(`Uh oh, something went wrong!`);
            }
        } else {
            msg.channel.send(`Uh oh, something went wrong! Make sure you specify what you're trying to purchase!`);
        }
    }
}