module.exports = {
	name: 'restart',
	permission: 2,
	main: function(bot, msg){
		msg.channel.send(":wave: " + bot.user.username + " is restarting...");

		setTimeout(function() {
			process.exit();
		}, 1000);
	}
};
