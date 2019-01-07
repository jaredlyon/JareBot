module.exports = {
    name: 'rules',
    permission: 1,
    main: function (bot, msg) {
        msg.channel.send({
          embed: 
          { color: 3447003,
            footer: {
              icon_url: msg.guild.iconURL,
              text: "© JL's Diner 2019" 
            },
            author: {
              name: "Dining Rules",
              url: "https://i.imgur.com/5HLaLyc.png",
              icon_url: msg.guild.iconURL
            },
            fields: [
              {
                name: "1. Please be courteous to your fellow customers.",
                value: "This rule is fairly self explainable. Just generally try to be nice. This rule is designed to be easily applicable on purpose, since displaying poor manners could be anything from excessive toxicity during a game to just not having the best attitude."
              }, 
              {
                name: "2. Use the appropriate text channels.",
                value: "We're not always around to moderate what you do all the time, this is a self governed community, so try to help us out with this one. Keep nsfw content out of our diner, and try to keep #general relatively clear of bot command spam."
              },
              {
                name: "3.  Please keep all conversation appropriate.",
                value: "Speech considered hateful or otherwise unhealthy for the diner's atmosphere is heavily subjective; consequently, speech that you may find appropriate may sometimes not be appreciated by your peers and we ask that you be conscious to how your words affect the diner as well as others. Please put forward your best foot in preserving the peace on the diner, and always look to keep an open mind to ideas from people both in and outside of the server."
              }
            ]
          }
        });
    }
}