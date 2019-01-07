module.exports = {
    name: 'breaking',
    permission: 2,
    main: function(bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "The Diner Tribune",
              icon_url: msg.guild.iconURL
            },
            description: "**BREAKING:**",
            fields: [{
              name: "title",
              value: `*preview*`
            },
            ],
            image: {
              url: `https://i.imgur.com/KrKFRBu.png`
            },
            timestamp: new Date(),
            footer: {
              text: `Pic: caption`
            }
          }
        });
      msg.delete();
    }
  };