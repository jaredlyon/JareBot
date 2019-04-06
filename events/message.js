const config = require("../config.json");
const fs = require("fs");

exports.run = (bot, msg) => {
	if (msg.channel.type === "dm" && msg.author.id == bot.user.id) {
		console.log("[DM] " + bot.user.username + " -> " + msg.channel.recipient.username + " | " + msg.content)
		bot.channels.get("399743950568685571").send(`The message: "${msg.content || "(no content)"}" by **${msg.author.tag}** was sent to me by another bot (or myself)!`)
	} else if (msg.channel.type === "dm" && msg.author.id != bot.user.id) {
		console.log("[DM] " + msg.channel.recipient.username + " -> " + bot.user.username + " | " + msg.content)
		bot.channels.get("399743950568685571").send(`The message: "${msg.content || "(no content)"}" by **${msg.author.tag}** was sent to me!`)
	}

	if (!msg.channel.type === "text" || !msg.guild || msg.author.bot) return;

	bot.processMessage(msg);

	if (msg.channel.id === '445717143640604672' && (!msg.attachments.first() || !msg.attachments.first().height)) {
		msg.delete();
	}

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

	//teens that care
	const yup = bot.emojis.find(emoji => emoji.name == "yup");
	const nope = bot.emojis.find(emoji => emoji.name == "nope");
	const meh = bot.emojis.find(emoji => emoji.name == "meh");
	if (msg.channel.id == '457797747580600331') {
		msg.react(yup)
		msg.react(meh)
		msg.react(nope)
	}

	//bank writes
	if (!bot.bank[msg.author.id] && msg.channel.id != '399746060404260864') {
		bot.bank[msg.author.id].balance += 2.54;
		bot.bank[msg.author.id].lastMessage = new Date();
	} else {
		if (new Date() - new Date(bot.bank[msg.author.id].lastMessage) >= 60000 && msg.channel.id != '399746060404260864') {
			bot.bank[msg.author.id].balance += 2.54;
			bot.bank[msg.author.id].lastMessage = new Date();
		}
	}
}