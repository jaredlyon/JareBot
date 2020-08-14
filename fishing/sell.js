module.exports = {
	name: 'sell',
	permission: 1,
	main: async function (bot, msg) {
		var choose = msg.content.split(' ').splice(0)[0];
		let account = await bot.bank.get(msg.author.id);
		let stats = await bot.stats.get(msg.author.id);
		let fishing = await bot.fishing.get(msg.author.id);

		if (choose != null && choose == 'trash') {
			var y = fishing.trash;
			
			fishing.trash = 0;
			account.balance += y;
			stats.fishing.net += y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** trash for **$` + y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'common') {
			var y = fishing.fish1;

			fishing.fish1 = 0;
			account.balance += 20 * y;
			stats.fishing.net += 20 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** common fish for **$` + 20 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'rare') {
			var y = fishing.fish2;

			fishing.fish2 = 0;
			account.balance += 30 * y;
			stats.fishing.net += 30 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** rare fish for **$` + 30 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'crabs') {
			var y = fishing.crabs;

			fishing.crabs = 0;
			account.balance += 500 * y;
			stats.fishing.net += 500 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crabs for **$` + 500 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'crocodiles') {
			var y = fishing.crocodiles;

			fishing.crocodiles = 0;
			account.balance += 500 * y;
			stats.fishing.net += 500 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** crocodiles for **$` + 500 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'whales') {
			var y = fishing.whales;

			fishing.whales = 0;
			account.balance += 750 * y;
			stats.fishing.net += 750 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** whales for **$` + 750 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'dolphins') {
			var y = fishing.dolphins;

			fishing.dolphins = 0;
			account.balance += 750 * y;
			stats.fishing.net += 750 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** dolphins for **$` + 750 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'blowfish') {
			var y = fishing.blowfish;

			fishing.blowfish = 0;
			account.balance += 500 * y;
			stats.fishing.net += 500 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** blowfish for **$` + 500 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'squid') {
			var y = fishing.squid;

			fishing.squid = 0;
			account.balance += 1000 * y;
			stats.fishing.net += 1000 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** squid for **$` + 1000 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'sharks') {
			var y = fishing.sharks;

			fishing.sharks = 0;
			account.balance += 1000 * y;
			stats.fishing.net += 1000 * y;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + y + `** sharks for **$` + 1000 * y + `**, ` + msg.author.username + `!`);
		} 
		else if (choose != null && choose == 'all') {
			var total = fishing.trash + fishing.fish1 * 20 + fishing.fish2 * 30 + fishing.crabs * 500 + fishing.crocodiles * 500 + fishing.whales * 750 + fishing.dolphins * 750 + fishing.blowfish * 500 + fishing.squid * 1000 + fishing.sharks * 1000;
			account.balance += total;
			stats.fishing.net += total;
            
			fishing.trash = 0;
			fishing.fish1 = 0;
			fishing.fish2 = 0;
			fishing.crabs = 0;
			fishing.crocodiles = 0;
			fishing.whales = 0;
			fishing.dolphins = 0;
			fishing.blowfish = 0;
			fishing.squid = 0;
			fishing.sharks = 0;
            
			msg.channel.send(`:moneybag: | You sold your entire inventory for **$` + total + `**, ` + msg.author.username + `!`);
		} 
		else msg.reply('something went wrong! Be sure to specify if which part of your inventory you intend to sell: **trash**, **common**, **rare**, **crabs**, **crocodiles**, **whales**, **dolphins**, **blowfish**, **squid**, **sharks**, **all**.');

		await bot.fishing.update(fishing);
		await bot.stats.update(stats);
		await bot.bank.update(account);
	}
}