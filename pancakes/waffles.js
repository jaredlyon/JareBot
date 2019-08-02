module.exports = {
  name: 'waffles',
  permission: 1,
  main: async function (bot, msg) {
    let account = await bot.bank.get(msg.author.id);
    msg.reply(`you have **${account.items.waffles ? account.items.waffles.toFixed(0) : 0}** waffles!`);
  }
};