module.exports = {
	name: 'ping',
	permission: 1,
	main: function (bot, msg) {
		var start = new Date(msg.createdAt).getTime();
		msg.channel.send("Pong!")
			.then(msg => msg.edit("Pong! **" + (msg.createdAt.getTime() - start) + " ms**"))
			.catch(console.error);
	}
}