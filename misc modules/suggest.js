const Discord = require("discord.js");

module.exports = {
	name: 'suggest',
	permission: 1,
	main: function (bot, msg) {
		msg.reply("your suggestion has been sent!");
		var f = new Discord.MessageEmbed()
			.setColor(0x1675DB)
			.setAuthor(msg.author.username, msg.author.avatarURL())
			.addField('Suggestion Recieved', msg.content)
			.setFooter(bot.user.username, bot.user.avatarURL())
			.setTimestamp()
		bot.channels.cache.get(bot.config.logChannel).send({ embed: f });
		msg.delete();
	}
};