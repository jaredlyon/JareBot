module.exports = {
	name: 'inventory',
	aliases: ['inv'],
	permission: 1,
	main: async function (bot, msg) {
		bot.config = require('../config.json');
		if (msg.mentions.users.first()) {
			var target = msg.mentions.users.first();
			let fishing = await bot.fishing.get(target.id);
      
			var total = (fishing.trash) + (fishing.fish1 * 20) + (fishing.fish2 * 30) + (fishing.crabs * 500) + (fishing.crocodiles * 500) + (fishing.whales * 750) + (fishing.dolphins * 750) + (fishing.blowfish * 500) + (fishing.squid * 1000) + (fishing.sharks * 1000);
			msg.channel.send({
				embed: {
					color: 0x4e86f7,
					footer: {
						icon_url: msg.guild.iconURL(),
						text: bot.config.lastUpdateDate
					},
					author: {
						name: "Fishing Inventory for " + target.username,
						icon_url: target.avatarURL()
					},
					fields: [{
						name: "Fish:",
						value: `Trash: **` + fishing.trash + `**\nCommon Fish: **` + fishing.fish1 + `**\nRare Fish: **` + fishing.fish2 + `**\nCrabs: **` + fishing.crabs + `**\nCrocodiles: **` + fishing.crocodiles + `**\nWhales: **` + fishing.whales + `**\nDolphins: **` + fishing.dolphins + `**\nBlowfish: **` + fishing.blowfish + `**\nSquid: **` + fishing.squid + `**\nSharks: **` + fishing.sharks + `**`
					},
					{
						name: "Total Value:",
						value: `**$` + total.toFixed(2) + `**`
					}]
				}
			});
		}
		else if (msg.mentions.users.first() == null) {
			let fishing = await bot.fishing.get(msg.author.id);

			var total = (fishing.trash) + (fishing.fish1 * 20) + (fishing.fish2 * 30) + (fishing.crabs * 500) + (fishing.crocodiles * 500) + (fishing.whales * 750) + (fishing.dolphins * 750) + (fishing.blowfish * 500) + (fishing.squid * 1000) + (fishing.sharks * 1000);

			msg.channel.send({
				embed: {
					color: 0x4e86f7,
					footer: {
						icon_url: msg.guild.iconURL(),
						text: bot.config.lastUpdateDate
					},
					author: {
						name: "Fishing Inventory for " + msg.author.username,
						icon_url: msg.author.avatarURL()
					},
					fields: [{
						name: "Fish:",
						value: `Trash: **` + fishing.trash + `**\nCommon Fish: **` + fishing.fish1 + `**\nRare Fish: **` + fishing.fish2 + `**\nCrabs: **` + fishing.crabs + `**\nCrocodiles: **` + fishing.crocodiles + `**\nWhales: **` + fishing.whales + `**\nDolphins: **` + fishing.dolphins + `**\nBlowfish: **` + fishing.blowfish + `**\nSquid: **` + fishing.squid + `**\nSharks: **` + fishing.sharks + `**`
					},
					{
						name: "Total Value:",
						value: `**$` + total.toFixed(2) + `**`
					}]
				}
			});
		} else msg.reply("something went wrong!");
	}
}