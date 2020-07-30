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
            name: "Last Update: v8.2.0",
            value: `- Rebalanced fishing economy (again)
                    - Improved UI elements
                    - Improved code legibility and stability
                    - Added 'Is Jared at work?'
                    - Added movie role
                    - Added approval system`
          },
          /*CHECK GITHUB FOOTERS*/
          {
            name: "GitHub: v8.1.0",
            value: "https://github.com/KingWaffleshnoz/JareBot\nNote that this page is still a WIP."
          }
        ]
      }
    });
  }
}