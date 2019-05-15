const Discord = require('discord.js');
const bot = new Discord.Client(require("./config.json").opts);
require('./funcs.js')(bot);
const readdir = require("fs").readdir;

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

//load directories
readdir('./misc modules/', (err, files) => {
	bot.log(`Loading ${files.length} miscellaneous modules!`);
	files.forEach(f => {
		try {
			var name = require(`./misc modules/${f}`).name
			bot.commands.set(name, require(`./misc modules/${f}`));
		} catch (e) {
			bot.log(`Unable to load command ${f}: ${e}`);
		}
	});
	bot.log(`Miscellaneous modules loaded!`);
});

readdir('./help/', (err, files) => {
	bot.log(`Loading ${files.length} help modules!`);
	files.forEach(fhelp => {
		try {
			var name = require(`./help/${fhelp}`).name
			bot.commands.set(name, require(`./help/${fhelp}`));
		} catch (ehelp) {
			bot.log(`Unable to load command ${fhelp}: ${ehelp}`);
		}
	});
	bot.log(`Help modules loaded!`);
});

readdir('./pancakes/', (err, files) => {
	bot.log(`Loading ${files.length} pancake modules!`);
	files.forEach(fpan => {
		try {
			var name = require(`./pancakes/${fpan}`).name
			bot.commands.set(name, require(`./pancakes/${fpan}`));
		} catch (epan) {
			bot.log(`Unable to load command ${fpan}: ${epan}`);
		}
	});
	bot.log(`Pancake modules loaded!`);
});

readdir('./moderation/', (err, files) => {
	bot.log(`Loading ${files.length} moderation modules!`);
	files.forEach(fmoderation => {
		try {
			var name = require(`./moderation/${fmoderation}`).name
			bot.commands.set(name, require(`./moderation/${fmoderation}`));
		} catch (emoderation) {
			bot.log(`Unable to load command ${fmoderation}: ${emoderation}`);
		}
	});
	bot.log(`Moderation modules loaded!`);
});

readdir('./self-assignable roles/', (err, files) => {
	bot.log(`Loading ${files.length} role modules!`);
	files.forEach(frole => {
		try {
			var name = require(`./self-assignable roles/${frole}`).name
			bot.commands.set(name, require(`./self-assignable roles/${frole}`));
		} catch (erole) {
			bot.log(`Unable to load command ${frole}: ${erole}`);
		}
	});
	bot.log(`Role modules loaded!`);
});

readdir('./fishing/', (err, files) => {
	bot.log(`Loading ${files.length} fishing modules!`);
	files.forEach(ffish => {
		try {
			var name = require(`./fishing/${ffish}`).name
			bot.commands.set(name, require(`./fishing/${ffish}`));
		} catch (efish) {
			bot.log(`Unable to load command ${ffish}: ${efish}`);
		}
	});
	bot.log(`Fishing modules loaded!`);
});

readdir('./currency/', (err, files) => {
	bot.log(`Loading ${files.length} currency modules!`);
	files.forEach(fcurr => {
		try {
			var name = require(`./currency/${fcurr}`).name
			bot.commands.set(name, require(`./currency/${fcurr}`));
		} catch (ecurr) {
			bot.log(`Unable to load command ${fcurr}: ${ecurr}`);
		}
	});
	bot.log(`Currency modules loaded!`);
});

readdir('./fun/', (err, files) => {
	bot.log(`Loading ${files.length} fun modules!`);
	files.forEach(ffun => {
		try {
			var name = require(`./fun/${ffun}`).name
			bot.commands.set(name, require(`./fun/${ffun}`));
		} catch (efun) {
			bot.log(`Unable to load command ${ffun}: ${efun}`);
		}
	});
	bot.log(`Fun modules loaded!`);
});

readdir('./events/', (err, files) => {
	bot.log(`Loading ${files.length} events!`);
	files.forEach(file => {
		bot.on(file.split(".")[0], (...args) => {
			require(`./events/${file}`).run(bot, ...args);
		});
	});
	bot.log(`Events loaded!`);
});

//var NOTIFY_HAYL;
//bot.on('ready', () => {
//    NOTIFY_HAYL = bot.channels.find('id', '399746390793650177'); // Channel to send notification
//});

//const TARGET_HOUR_H = 20; 
//const TARGET_MINUTE_H = 30; 

//setInterval(function() {
//    var d2 = new Date();
//    if(d2.getMinutes() !== TARGET_MINUTE_H || d2.getHours() !== TARGET_HOUR_H) return; // Return if current minute is not the notify minute
//    NOTIFY_HAYL.send("Tell Hayl that you love her! <@133350262420013056>")
//}, 60 * 1000); // Check every minute

//daily restart
var restart;
bot.on('ready', () => {
    restart = bot.channels.find('id', '399746390793650177'); // Channel to send notification
});

const TARGET_HOUR_R = 4;
const TARGET_MINUTE_R = 21; 

setInterval(function() {
    var d2 = new Date();
	if(d2.getMinutes() !== TARGET_MINUTE_R || d2.getHours() !== TARGET_HOUR_R) return; // Return if current minute is not the notify minute
	setTimeout(function() {
		process.exit();
	}, 1000);
	restart.send("[AUTO RESTART] | JareBot successfully restarted!")
}, 60 * 1000); // Check every minute

//final log-on
bot.login(require("./config.json").token);