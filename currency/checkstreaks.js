module.exports = {
    name: "checkstreaks",
    permission: 1,
    main: function (bot, msg) {
        var message = "**__Active Daily Streaks:__**\n*Does not include streaks that have expired.*\n";

        bot.guilds.cache.get("399740385221672970").members.cache.each(async member => {
            bot.streaks.get(member.id).then(streaks => {
                if (streaks.streak && streaks.streak >= 1 && (new Date() - new Date(streaks.lastDaily) <= 172800000)) {
                    message += member.displayName + "\n" + ",";
                    console.log("Added " + member.displayName + "'s streak to the array!");
                };
            });
        });

        //sends the message
        msg.channel.send(message);
    }
}