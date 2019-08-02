module.exports = {
  name: 'pancakes',
  permission: 1,
  main: async function (bot, msg) {
    let account = await bot.bank.get(msg.author.id);
    msg.reply(`you have **${account.items.pancakes ? account.items.pancakes.toFixed(0) : 0}** stack(s) of pancakes!`);
  }
};
