module.exports = {
    name: 'news',
    permission: 2,
    main: function(bot, msg) {
        msg.channel.send({embed: {
            color: 3447003,
            author: {
              name: "The Diner Tribune",
              icon_url: msg.guild.iconURL
            },
            description: "*Something to read while you eat some waffles...*",
            fields: [
            {
              name: `title`,
              value: `*preview*`
            },
            {
              name: `title`,
              value: `*preview*`
            },
            {
              name: `title`,
              value: `*preview*`
            },
            {
              name: `title`,
              value: `*preview*`
            },
            {
              name: `title`,
              value: `*preview*`
            },
            {
              name: `title`,
              value: `*preview*`
            }],
            timestamp: new Date(),
            footer: {
              text: `Pic: caption`
            }
          }
        });
      msg.delete();
    }
};