module.exports = {
    name: 'waffles',
    permission: 1,
    main: function(bot, msg) {
      msg.reply(`you have **${bot.bank[msg.author.id].items.waffles.toFixed(0)}** waffles!`);
    }
  };