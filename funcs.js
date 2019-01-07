const fs = require("fs");
var channel = null,
	stdin = process.openStdin();

module.exports = (bot) => {
	/**
	 * Core message processing functions
	 */

	bot.permLevel = function (msg) {
		if (msg.author.id == bot.config.owner)
			return 2;
		else
			return 1;
	}

	bot.processMessage = function (msg) {
		if (channel && msg.channel.id == channel) bot.log(msg.guild.name + " | " + msg.channel.name + " | " + msg.member.displayName + " | " + msg.cleanContent);

		if (msg.author.bot) return;

		if (msg.content.startsWith(bot.config.prefix)) {
			try {
				msg.args = msg.content.split(/\s+/g)
				msg.content = msg.content.substring(msg.content.indexOf(" ") + 1, msg.content.length) || null
				var command = msg.args.shift().slice(bot.config.prefix.length).toLowerCase()
				var cmd = bot.commands.get(command)
				var perms = bot.permLevel(msg)
				if (!cmd) return;
				else if (perms < cmd.permission) return msg.reply("you do not have permission to do this!")
				else {
					bot.logCommand(command, msg.content, msg.author.username, msg.channel.name, msg.guild.name)
					try {
						cmd.main(bot, msg);
					} catch (err) {
						msg.channel.send("Oh no! We encountered an error:\n```" + err.stack + "```")
					}
				}
			} catch (err) {
				msg.channel.send("Oh no! We encountered an error:\n```" + err.stack + "```");
				bot.error(err.stack);
			}
		}
	}

	/**
	 * Core bot functions
	 */

	bot.awaitConsoleInput = function () {
		stdin.addListener("data", function (d) {
			d = d.toString().trim()
			if (d.startsWith("channels")) {
				bot.channels.forEach(channel => {
					if (channel.type == "text" && channel.permissionsFor(channel.guild.me).has(["READ_MESSAGES", "SEND_MESSAGES"]))
						bot.log(channel.guild.name + " | #" + channel.name + " | (" + channel.id + ")")
				})
			} else if (d.startsWith("bind") && channel) {
				d = d.substring(d.indexOf(" ") + 1, d.length)
				if (bot.channels.get(d)) {
					channel = d;
					bot.log("Console rebound to channel " + bot.channels.get(d).name + " in " + bot.channels.get(d).guild.name + "!");
				}
			} else if (channel) {
				try {
					bot.channels.get(channel).send(d);
				} catch (err) {
					bot.log(err);
				}
			} else {
				if (bot.channels.get(d)) {
					channel = d;
					bot.log("Console bound to channel " + bot.channels.get(d).name + " in " + bot.channels.get(d).guild.name + "!");
				}
			}
		});
	}

	//bank
	bot.setupBank = function () {
		bot.bank = require('./bank.json');

		bot.users.forEach(user => {
			if (!bot.bank[user.id] && !user.bot) {
				bot.bank[user.id] = {
					balance: 0,
					lastDaily: null,
					lastMessage: null,
					streak: 0,
					items: {
						pancakes: 0,
						waffles: 0
					}
				}
			}
		})

		writeBank();

		setInterval(function () {
			writeBank();
		}, 6000);

		function writeBank() {
			var bankJson = fs.readFileSync("./bank.json"),
				bankParsed = JSON.parse(bankJson)
			if (JSON.stringify(bankParsed) == JSON.stringify(bot.bank)) return; // Only writes if there's a difference

			fs.writeFileSync("./bank.json", JSON.stringify(bot.bank, null, 3));
			console.log("[BANK] | Bank successfully saved to file!")
			return "Bank successfully saved to file!";
		}
	}

	//fishing
	bot.setupFishing = function () {
		bot.fishing = require('./fishing.json');

		bot.users.forEach(user => {
			if (!bot.fishing[user.id] && !user.bot) {
				bot.fishing[user.id] = {
					rod: null,
					lastFish: null,
					items: {
						bait: 0,
						bigFish: 0,
						littleFish: 0
					}
				}
			}
		})

		writeFishing();

		setInterval(function () {
			writeFishing();
		}, 360000);

		function writeFishing() {
			var fishingJson = fs.readFileSync("./fishing.json"),
				fishingParsed = JSON.parse(fishingJson)
			if (JSON.stringify(fishingParsed) == JSON.stringify(bot.fishing)) return; // Only writes if there's a difference

			fs.writeFileSync("./fishing.json", JSON.stringify(bot.fishing, null, 3));
			console.log("[FISHING] | Fishing Inventories successfully saved to file!")
			return "Fishing Inventories successfully saved to file!";
		}
	}

	//afk
	

	/**
	 * Logging functions
	 */

	bot.logCommand = function (command, arguments, user, channel, server) {
		bot.log(`\n**Command Executed:** ${command}\n**User:** ${user}\n**Arguments:** ${arguments}\n**Server:** ${server}\n**Channel:**# ${channel}`)
	}

	bot.error = function (err) {
		console.log(this.timestamp() + " [ERROR] | " + err.stack)
	}

	bot.debug = function (txt) {
		console.log(this.timestamp() + " [DEBUG] | " + txt)
	}

	bot.warn = function (txt) {
		console.log(this.timestamp() + " [WARN]  | " + txt)
	}

	bot.log = function (txt) {
		console.log(this.timestamp() + "  [LOG]  | " + txt)
	}

	bot.timestamp = function () {
		var currentTime = new Date(),
			hours = currentTime.getHours(),
			minutes = currentTime.getMinutes(),
			seconds = currentTime.getSeconds()
		if (minutes < 10)
			minutes = "0" + minutes;
		if (seconds < 10)
			seconds = "0" + seconds;
		return '[' + hours + ':' + minutes + ':' + seconds + ']';
	}
}