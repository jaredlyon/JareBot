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
            name: "Last Update: v9.0.0",
            value: `- Updated rules\n- Improved database security\n- Added checkstreaks.js\n- Added collatz.js\n- Added channel names to the messageDelete event\n- Added streaks to dbadd.js\n- Deprecated statistics module`
          },
          /*CHECK GITHUB FOOTERS*/
          {
            name: "GitHub",
            value: "https://github.com/KingWaffleshnoz/JareBot\nNote that this page is still a WIP."
          }
        ]
      }
    });
  }
}