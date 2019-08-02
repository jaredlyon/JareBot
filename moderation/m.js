module.exports = {
    name: 'm',
    permission: 2,
    main: function(bot, msg) {
        const args = msg.content.slice(2).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        let message = args.splice(0).join(' ');

        var channel = msg.mentions.channels.first();

        channel.send(message)
    }
}