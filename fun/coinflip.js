module.exports = {
    name: 'coinflip',
    permission: 1,
    main: function (bot, msg) {
        var flip = Math.floor((Math.random() * 1));
        
        if (flip == 0) {
            msg.reply("you flipped **heads**!");
        } else if (flip == 1) {
            msg.reply("you flipped **tails**!");
        }
    }
};