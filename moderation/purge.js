module.exports = {
	name: 'purge',
	permission: 2,
	main: function(bot, msg) {
		if (msg.member.hasPermission('MANAGE_MESSAGES') || msg.author.id === require("../config.json").owner) {
			var num = msg.content;
			if (!isNaN(num)) {
				msg.channel.fetchMessages({limit: num})
					.then(messages => msg.channel.bulkDelete(messages))
					.catch(msg.channel.bulkDelete);

				msg.channel.sendMessage("Purged " + num + " messages!")
				.then(msg => setTimeout(function() {msg.delete()}, 5000));
			} else {
				msg.channel.sendMessage("Please specify a number!");
			}
		}
	}
};