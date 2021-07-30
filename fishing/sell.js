module.exports = {
	name: 'sell',
	permission: 1,
	main: async function (bot, msg) {
		var userChoice = msg.content.split(' ').splice(0)[0];
		let account = await bot.bank.get(msg.author.id);
		let fishing = await bot.fishing.get(msg.author.id);

		if (userChoice != null && userChoice == 'trash') {
			var x = fishing.trash;
			
			fishing.trash = 0;
			account.balance += x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** trash for **$` + x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'common') {
			var x = fishing.fish1;

			fishing.fish1 = 0;
			account.balance += 20 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** common fish for **$` + 20 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'rare') {
			var x = fishing.fish2;

			fishing.fish2 = 0;
			account.balance += 30 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** rare fish for **$` + 30 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'crabs') {
			var x = fishing.crabs;

			fishing.crabs = 0;
			account.balance += 500 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** crabs for **$` + 500 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'crocodiles') {
			var x = fishing.crocodiles;

			fishing.crocodiles = 0;
			account.balance += 500 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** crocodiles for **$` + 500 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'whales') {
			var x = fishing.whales;

			fishing.whales = 0;
			account.balance += 750 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** whales for **$` + 750 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'dolphins') {
			var x = fishing.dolphins;

			fishing.dolphins = 0;
			account.balance += 750 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** dolphins for **$` + 750 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'blowfish') {
			var x = fishing.blowfish;

			fishing.blowfish = 0;
			account.balance += 500 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** blowfish for **$` + 500 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'squid') {
			var x = fishing.squid;

			fishing.squid = 0;
			account.balance += 1000 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** squid for **$` + 1000 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'sharks') {
			var x = fishing.sharks;

			fishing.sharks = 0;
			account.balance += 1000 * x;
			msg.channel.send(`:fishing_pole_and_fish: | You sold **` + x + `** sharks for **$` + 1000 * x + `**, ` + msg.author.username + `!`);
		} else if (userChoice != null && userChoice == 'all') {
			var total = fishing.trash + fishing.fish1 * 20 + fishing.fish2 * 30 + fishing.crabs * 500 + fishing.crocodiles * 500 + fishing.whales * 750 + fishing.dolphins * 750 + fishing.blowfish * 500 + fishing.squid * 1000 + fishing.sharks * 1000;
			account.balance += total;
            
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
		} else {
			msg.reply('something went wrong! Be sure to specify if which part of your inventory you intend to sell: **trash**, **common**, **rare**, **crabs**, **crocodiles**, **whales**, **dolphins**, **blowfish**, **squid**, **sharks**, **all**.');
		}
		
		await bot.fishing.update(fishing);
		await bot.bank.update(account);
	}
}