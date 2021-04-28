module.exports = {
    name: "checkstreaks",
    permission: 1,
    main: async function (bot, msg) {
        const activeStreaks = [];

        //creates an array of all active streaks
        await bot.guilds.cache.get("399740385221672970").members.cache.forEach(async member => {
            let streaks = (await bot.streaks.get(member.id)) || {};

            if (streaks.streak >= 1 && new Date() - new Date(streaks.lastDaily) <= 172800000) {
                var name = member.displayName;
                activeStreaks.push(name);
                console.log("Added " + member.displayName + "'s streak to the array!");
            };
        });
        console.log(activeStreaks);

        //message header
        var message = "**__Active Daily Streaks:__**\n*Does not include streaks that have expired.*\n";

        //add all usernames from the active streak array to the message
        var i;
        var listLength;
        listLength = activeStreaks.length;
        console.log("List Length: " + listLength);
        for (i = 0; i < activeStreaks.length; i++) {
            message += activeStreaks[i];
            message += "\n" + ",";
        };

        //sends the message
        msg.channel.send(message);
    }
}