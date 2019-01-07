module.exports = {
    name: 'pancakes',
    permission: 1,
    main: function(bot, msg) {
      msg.reply(`you have **${bot.bank[msg.author.id].items.pancakes.toFixed(0)}** stack(s) of pancakes!`);
    }
  };