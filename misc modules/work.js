module.exports = {
    name: 'work',
    permission: 2,
    main: function (bot, msg) {
        if (bot.work) {
            bot.work = false;
            msg.reply("set to true!");
        } else if (!bot.work) {
            bot.work = true;
            msg.reply("set to false!");
        } else {
            msg.reply("oops, something went wrong!");
        }
    },
};