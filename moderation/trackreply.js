const Discord = require("discord.js");

module.exports = {
	name: 'trackreply',
	permission: 2,
	main: function(bot, msg, get, sendMessage) {
        msg.reply("reply successful.");
        
        const args = msg.content.slice(2).trim().split(/ +/g);
        const command = args.shift().toLowerCase();

        let message = args.splice(0).join(' ');

        var user = msg.mentions.members.first();

		var reply = new Discord.RichEmbed()
			.setColor(0x1675DB)
			.setAuthor('Tracking Request', user.avatarURL)
            .addField('Your Tracking Number:', message)
            .addField('Instructions:', "Go to https://www.usps.com/ and go to the 'Track a Package' webpage. It will prompt you for a tracking number provided in the above field of this message.")
			.setFooter(bot.user.username, bot.user.avatarURL)
			.setTimestamp()
        
        user.createDM()    
		user.send({embed:reply});
	}
};