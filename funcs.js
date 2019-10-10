const fs = require("fs");
var channel = null,
	stdin = process.openStdin();
var config = require("./config.json");

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

	bot.startDatabase = async function () {
		bot.r = require("rethinkdbdash")({
			port: 28015,
			host: config.rethink.ip,
			user: config.rethink.username,
			password: config.rethink.password,
			silent: false
		});
		bot.log("Successfully established database connection.");
		await bot.syncDatabase();
	}

	bot.syncDatabase = async function () {
		try {
			bot.r.dbCreate("jarebot");
		} catch (err) { }

		bot.bank = bot.r.db("jarebot").table("bank");
		bot.log("[BANK] Successfully connected to bank database!");

		bot.bank = bot.r.db("jarebot").table("stats");
		bot.log("[STATISTICS] Successfully connected to statistics database!");

		bot.fishing = bot.r.db("jarebot").table("fishing");
		bot.log("[FISHING] Successfully connected to fishing database!");

		bot.afk = bot.r.db("jarebot").table("afk");
		if (!bot.afk) {
			console.debug("Created AFK database.");
			bot.afk = [];
		} else {
			console.debug("AFK Users Synchronized.");
		}
	}

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

	/**
	 * Logging functions
	 */

	bot.logCommand = function (command, arguments, user, channel, server) {
		bot.log(`Command Executed: ${command} | User: ${user} | Arguments: ${arguments} | Server: ${server} | Channel: #${channel}`)
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