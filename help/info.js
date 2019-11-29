module.exports = {
  name: 'info',
  permission: 1,
  main: function (bot, msg) {
      msg.channel.send({
        embed: 
        { color: 3447003,
          footer: {
            icon_url: msg.guild.iconURL,
            text: msg.guild.name 
          },
          author: {
            name: "Bot Information",
            icon_url: msg.guild.iconURL
          },
          fields: [
            {
              name: "General:",
              value: "JareBot is Discord chat bot (obviously) that performs rudimentary chat tasks as well as executes complicated score and currency commands. This bot is confined to Jared's personal Discord server, and is primarily designed to assist in giveaways, moderation, and a wide array of information distribution. JareBot was initially created in August of 2017 by Michael Cao in order to teach its current developer, Jared Lyon, how to code in Javascript."
            },
            {
              name: "Last Update: v7.0.0",
              value: "-Added a votekick function\n-Fixed coinflip bug\n-Lowered fishing cooldown from 12 to 7 seconds\n-Updated server rules\n-Added pancake tracking to the stats\n-Added j!bal alias for j!balance\n-Split streaks into separate data table\n-Updated j!help"
            },
            /*CHECK GITHUB FOOTERS*/
            {
              name: "GitHub: v7.0.0",
              value: "https://github.com/KingWaffleshnoz/JareBot\nNote that this page is still a WIP."
            }
          ]
        }
      });
  }
}