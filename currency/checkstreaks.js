module.exports = {
    name: "checkstreaks",
    permission: 1,
    main: async function (bot, msg) {
        bot.guilds.cache.get("399740385221672970").members.cache.forEach(async member => {
            let streaks = (await bot.streaks.get(member.id)) || {};
            if (streaks.streak && streaks.streak >= 1 && (new Date() - new Date(streaks.lastDaily) <= 172800000)) {
                msg.channel.send(member.displayName + " has an active **" + streaks.streak + "** day streak!");
            }
        });
    }
}