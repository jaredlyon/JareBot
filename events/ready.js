exports.run = (bot, msg) => {
	bot.config = require('../config.json');
	bot.awaitConsoleInput();
	bot.setupBank();
	bot.setupFishing();
	bot.setupStats();

	bot.user.setPresence({ status: 'online', game: { name: 'Lego Legions | j!help', type: 0 } });
	//bot.user.setPresence({ status: 'online', game: { name: "It's not delivery, it's DiBjorno", type: 0 } });

	bot.log(`${bot.user.username} is online and ready to serve in ${bot.channels.size} channels on ${bot.guilds.size} servers!`);
}