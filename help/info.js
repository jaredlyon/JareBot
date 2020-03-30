module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
    msg.channel.send({
      embed:
      {
        color: 3447003,
        footer: {
          icon_url: msg.guild.iconURL(),
          text: msg.guild.name
        },
        author: {
          name: "Bot Information",
          icon_url: msg.guild.iconURL()
        },
        fields: [
          {
            name: "General:",
            value: "JareBot is a Discord chat bot that performs various chat functions as well as uses an array of RethinkDB tables to create an economy. This project was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript."
          },
          {
            name: "Last Update: v8.0.0",
            value: `- Migrated the bot to v12 of Discord.js
                    - Added a votekick function
                    - Added pushes to the blackjack module
                    - Added text channel timeouts
                    - Rebalanced income portion of the economy
                    - Touched up portions of the UI
                    - Updated README
                    - Fixed an issue where baiting during a blackjack game caused currency discrepancies`
          },
          /*CHECK GITHUB FOOTERS*/
          {
            name: "GitHub: v8.0.0",
            value: "https://github.com/KingWaffleshnoz/JareBot\nNote that this page is still a WIP."
          }
        ]
      }
    });
  }
}