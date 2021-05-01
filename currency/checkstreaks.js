module.exports = {
    name: "checkstreaks",
    permission: 1,
    main: async function (bot, msg) {
        /*
        console.log("Initializing check...");
        var message = "**__Active Daily Streaks:__**\n*Does not include streaks that have expired.*\n";
        console.log(message);
 
        function checkStreaks() {
            bot.guilds.cache.get("399740385221672970").members.cache.forEach(async member => {
                let streaks = (await bot.streaks.get(member.id)) || {};
                if (streaks.streak && streaks.streak >= 1 && (new Date() - new Date(streaks.lastDaily) <= 172800000)) {
                    message += member.displayName + "\n";
                    msg.channel.send(member.displayName + " has an active streak!");
                    console.log("Added " + member.displayName + "'s streak to the array!");
                }
            });
        }


        console.log("Running check...");
        await checkStreaks();
        console.log("Check complete!");

        console.log("Sending message...");
        msg.channel.send(message);
        console.log("Message sent!");
        */

        bot.guilds.cache.get("399740385221672970").members.cache.forEach(async member => {
            let streaks = (await bot.streaks.get(member.id)) || {};
            if (streaks.streak && streaks.streak >= 1 && (new Date() - new Date(streaks.lastDaily) <= 172800000)) {
                msg.channel.send(member.displayName + " has an active streak!");
            }
        });
    }
}