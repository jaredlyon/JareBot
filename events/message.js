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
		"<@330486484287356928> you're hungover": "You prove it or I kill you!",
		"omae wa mou shinderu": "***NANI???***",
		"おまえはもしんでる": "***何?***",
		"hat hat hat": "https://youtu.be/vyVkyakC6xk",
		"send it": "https://www.youtube.com/watch?v=5Vi4HcyNam0",
		"full send": "https://www.youtube.com/watch?v=5Vi4HcyNam0",
		"53nd it": "https://www.youtube.com/watch?v=5Vi4HcyNam0",
		"it's not delivery": "It's DiBjorno!",
		"it's not delivery,": "It's DiBjorno!",
		"its not delivery": "It's DiBjorno!",
		"its not delivery,": "It's DiBjorno!",
		"it's delivery": "It's...wait, what?",
		"it's delivery,": "It's...okay, why are you like this?",
		"its delivery": "Bjorn doesn't deserve to be disrespected like this.",
		"its delivery,": "Bjorn with a Ch probably hates your guts."
	};
	if (responseObject[msg.content.toLowerCase()]) {
		msg.channel.send(responseObject[msg.content.toLowerCase()]);
	}

	const msg1 = msg.content.toLowerCase();
	if (msg1.includes("execute order 66")) {
		msg.channel.send("It is done, my lord.")
	}
	if (msg1.includes("darth plagueis")) {
		msg.channel.send("I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.")
	}
	if (msg1.includes("spanish inquisition")) {
		msg.channel.send("I never expected it!")
	}
	if (msg1.includes("go bells")) {
		msg.channel.send("Vamos Campanas!")
	}
	if (msg1.includes("papa bless")) {
		msg.channel.send("https://i.imgur.com/xxZ2ImZ.png")
	}
	if (msg1.includes("nico nico")) {
		msg.channel.send("https://www.youtube.com/watch?v=I93gAPPdKXQ")
	}
	if (msg1.includes("press f")) {
		msg.channel.send("F")
	}

//teens that care
	const yup = bot.emojis.find("name", "yup");
	const nope = bot.emojis.find("name", "nope");
	const meh = bot.emojis.find("name", "meh");
	if (msg.channel.id == '457797747580600331') {
		msg.react(yup)
		msg.react(meh)
		msg.react(nope)
	}

//bank writes
	if (!bot.bank[msg.author.id] && msg.channel.id != '399746060404260864') {
		bot.bank[msg.author.id].balance += 2.54;
		bot.stats[msg.author.id].passive.total += 2.54;
		bot.bank[msg.author.id].lastMessage = new Date();
	} else {
		if (new Date() - new Date(bot.bank[msg.author.id].lastMessage) >= 60000 && msg.channel.id != '399746060404260864') {
			bot.bank[msg.author.id].balance += 2.54;
			bot.stats[msg.author.id].passive.total += 2.54;
			bot.bank[msg.author.id].lastMessage = new Date();
		}
	}
}