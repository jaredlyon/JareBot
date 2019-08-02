const Discord = require("discord.js");

module.exports = {
	name: 'suggest',
	permission: 1,
	main: function (bot, msg, get, sendMessage) {
		msg.reply("your suggestion has been sent!");
		var f = new Discord.RichEmbed()
			.setColor(0x1675DB)
			.setAuthor(msg.author.username, msg.author.avatarURL)
			.addField('Suggestion Recieved', msg.content)
			.setFooter(bot.user.username, bot.user.avatarURL)
			.setTimestamp()
		//var dest = bot.channels.get('378643772810199040');
		//bot.channels.get('id').send()
		bot.channels.get('399743950568685571').send({ embed: f });

		msg.delete();
	}
};