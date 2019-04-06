module.exports = {
    name: 'uptime',
    permission: 1,
    main: function (bot, msg) {
        var date = new Date(bot.uptime);
        var Date1 = '**';
        Date1 += date.getUTCDate() - 1 + ' days, ';
        Date1 += date.getUTCHours() + ' hours, ';
        Date1 += date.getUTCMinutes() + ' minutes, ';
        Date1 += date.getUTCSeconds() + ' seconds**';
        msg.channel.send(`JareBot's uptime is:\n` + Date1);
    },
};