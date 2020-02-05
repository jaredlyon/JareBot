exports.run = async (bot, msg) => {
	if (msg.channel.type === "dm" && msg.author.id == bot.user.id) {
		console.log("[DM] " + bot.user.username + " -> " + msg.channel.recipient.username + " | " + msg.content)
		bot.channels.get(bot.config.logChannel).send(`The message: "${msg.content || "(no content)"}" by **${msg.author.tag}** was sent to me by another bot (or myself)!`)
	} else if (msg.channel.type === "dm" && msg.author.id != bot.user.id) {
		console.log("[DM] " + msg.channel.recipient.username + " -> " + bot.user.username + " | " + msg.content)
		bot.channels.get(bot.config.logChannel).send(`The message: "${msg.content || "(no content)"}" by **${msg.author.tag}** was sent to me!`)
	}

	if (!msg.channel.type === "text" || !msg.guild || msg.author.bot) return;

	bot.processMessage(msg);

	//reply array shenanigans
	const responseObject = {
		"input": "output"
	};
	if (responseObject[msg.content.toLowerCase()]) {
		msg.channel.send(responseObject[msg.content.toLowerCase()]);
	}

	const msg1 = msg.content.toLowerCase();
	if (msg1.includes("input")) {
		msg.channel.send("output")
	}

	//bank writes
	let account = (await bot.bank.get(msg.author.id)) || {};
	let stats = (await bot.stats.get(msg.author.id)) || {};
	if (!account) {
		account.id = msg.author.id;
		account.balance = 5.00;
		stats.passive.total += 5.00;
		account.lastMessage = new Date();
		await bot.bank.insert(account);
		await bot.stats.insert(stats);
	} else {
		if (new Date() - new Date(account.lastMessage) >= 30000) {
			account.balance += 5.00;
			stats.passive.total += 5.00;
			account.lastMessage = new Date();
			await bot.bank.update(account);
			await bot.stats.update(stats);
		}
	}
}