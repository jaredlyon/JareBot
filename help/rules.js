module.exports = {
  name: 'rules',
  permission: 1,
  main: function (bot, msg) {
    msg.channel.send({
      embed:
      {
        color: 3447003,
        footer: {
          icon_url: msg.guild.iconURL(),
          text: "© JL's Diner 2019"
        },
        author: {
          name: "Server Rules",
          url: "https://i.imgur.com/5HLaLyc.png",
          icon_url: msg.guild.iconURL()
        },
        fields: [
          {
            name: "1. Be respectful.",
            value: "This rule is fairly self-explainable, and also incredibly easy to apply. Generally, just try to maintain a positive attitude, respect boundaries, and don't be an asshole. In that same regard, speech considered hateful or otherwise unhealthy for the server's atmosphere is heavily subjective; consequently, speech that you find appropriate may not always be appreciated by your peers. With this in mind, please be conscious of how your words might affect those around you."
          },
          {
            name: "2. Use the appropriate text channels.",
            value: "Since this server is primarily self-governed by those who are on it, I'm not going to always be around to enforce common sense. Don't post anything nsfw, stick the appropriate content in their respective channels, confine bot usage to #bot-console, and use the designated text channels when participating in voice calls."
          }
        ]
      }
    });
  }
}